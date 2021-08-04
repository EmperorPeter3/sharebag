import React, { useContext, useEffect, useState } from 'react'
import { Box, Grid, MenuItem, TextField } from '@material-ui/core'
import {
  DirectionsSelect,
  DrawerHeader,
  NotificationSystemContext,
} from '../../../../../components'
import { getFlights } from '../../../../Home/api'
import { Flight, FlightParams } from '../../../../Home/types'
import { FlightInfoProps } from '../../../types'

export const FlightInfo = ({
  flightFrom,
  flightTo,
  flightDateFrom,
  flightNumber,
  onChangeField,
  onChangeDirectionField,
  onChangeExactFlightInfo,
}: FlightInfoProps) => {
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
    if (flightFrom && flightTo && flightDateFrom) {
      fetchFlightNumbers({ from: flightFrom.id, to: flightTo.id, date: flightDateFrom })
    }
  }, [flightFrom, flightTo, flightDateFrom, addNotification])

  const onChangeFlightNumber = (event: any) => {
    onChangeField('flightNumber')(event)
    const flightInfo = flights.find(({ flightNumber }) => flightNumber === event.target.value)
    onChangeExactFlightInfo(flightInfo || null)
  }

  const disabledFlightNumber = !flightFrom || !flightTo || !flightDateFrom

  return (
    <>
      <DrawerHeader>Информация о рейсе</DrawerHeader>
      <Box mx={4}>
        <Grid container spacing={1}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <DirectionsSelect
              required
              label="Откуда"
              value={flightFrom}
              onChange={onChangeDirectionField('flightFrom')}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <DirectionsSelect
              required
              label="Куда"
              value={flightTo}
              onChange={onChangeDirectionField('flightTo')}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center">
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <TextField
              label="Дата вылета"
              type="date"
              value={flightDateFrom}
              onChange={onChangeField('flightDateFrom')}
              InputLabelProps={{
                shrink: true,
              }}
            />
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
        </Grid>
      </Box>
    </>
  )
}
