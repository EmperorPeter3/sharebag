import React, { useContext, useEffect, useState } from 'react'
import { makeStyles, Box, Grid, TextField, MenuItem } from '@material-ui/core'
import {
  DirectionsSelect,
  NotificationSystemContext,
  DrawerHeader,
} from '../../../../../components'
import { getFlights } from '../../../api'
import { FlightInfoProps, FlightParams, FileEventTarget, Flight } from '../../../types'

const useStyles = makeStyles(() => ({
  hiddenInput: { display: 'none' },
  uploadLabel: { display: 'inline-flex', alignSelf: 'flex-end' },
}))

export const FlightInfo = ({
  flightFrom,
  flightTo,
  flightDate,
  flightNumber,
  onChangeField,
  onChangeDirectionField,
  onChangeExactFlightInfo,
}: FlightInfoProps) => {
  const classes = useStyles()
  const [flights, setFlights] = useState<Flight[]>([])
  const { addNotification } = useContext(NotificationSystemContext)

  useEffect(() => {
    const fetchFlightNumbers = async (params: FlightParams) => {
      let result: Flight[] = []
      try {
        result = await getFlights(params)
      } catch (error) {
        addNotification({ level: 'error', message: error })
      } finally {
        setFlights(result)
      }
    }
    if (flightFrom && flightTo && flightDate) {
      fetchFlightNumbers({ from: flightFrom.id, to: flightTo.id, date: flightDate })
    }
  }, [flightFrom, flightTo, flightDate, addNotification])

  const onChangeFlightNumber = (event: any) => {
    onChangeField('flightNumber')(event)
    const flightInfo = flights.find(({ flightNumber }) => flightNumber === event.target.value)
    onChangeExactFlightInfo(flightInfo || null)
  }

  const disabledFlightNumber = !flightFrom || !flightTo || !flightDate

  return (
    <>
      <DrawerHeader>Информация о рейсе</DrawerHeader>
      <Grid container spacing={1}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <DirectionsSelect
            label="Откуда"
            required
            value={flightFrom}
            onChange={onChangeDirectionField('flightFrom')}
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <DirectionsSelect
            label="Куда"
            required
            value={flightTo}
            onChange={onChangeDirectionField('flightTo')}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="center">
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Box mt={1}>
            <TextField
              label="Дата вылета"
              type="date"
              onChange={onChangeField('flightDate')}
              value={flightDate}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <TextField
            required
            select
            disabled={disabledFlightNumber}
            value={flightNumber}
            variant="outlined"
            margin="normal"
            onChange={onChangeFlightNumber}
            fullWidth
            label="Номер рейса"
          >
            {flights.length ? (
              flights.map((flight) => (
                <MenuItem key={flight.flightNumber} value={flight.flightNumber}>
                  {flight.flightNumber}
                </MenuItem>
              ))
            ) : (
              <MenuItem>Нет рейсов</MenuItem>
            )}
          </TextField>
        </Grid>
        <Grid container>
          {/* {ticketPhoto ? (
              <Box display="flex" height="100%" pb={2} alignItems="center">
                <Box>{ticketPhoto.name}</Box>
              </Box>
            ) : (
              <Box display="flex" height="100%" pb={2}>
                <input
                  id="ticket-file"
                  type="file"
                  accept="image/*"
                  value={ticketPhoto}
                  className={classes.hiddenInput}
                  name="flightInfo.ticketPhoto"
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    // @ts-ignore
                    setFieldValue('flightInfo.ticketPhoto', event.target.files[0])
                  }}
                />
                <label className={classes.uploadLabel} htmlFor="ticket-file">
                  <Button variant="outlined" component="span">
                    Добавить фото билета
                  </Button>
                </label>
              </Box>
            )} */}
          ticket
        </Grid>
      </Grid>
    </>
  )
}
