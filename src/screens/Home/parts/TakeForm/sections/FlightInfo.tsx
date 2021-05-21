import React, { ChangeEvent } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import { grey } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import { Select } from '../../../../../components'
import { FlightInfoProps } from '../types'
import { CITY_DATA } from '../../../../../fakeData'

export type FileEventTarget = HTMLInputElement & EventTarget & { files: FileList }

const useStyles = makeStyles(() => ({
  formControl: {
    width: 144,
  },
  extendedFormControl: {
    width: 200,
  },
  input: { display: 'none' },
  uploadLabel: { display: 'inline-flex', alignSelf: 'flex-end' },
}))

export const FlightInfo = ({
  from,
  to,
  dateTime,
  flightNumber,
  ticketPhoto,
  handleChange,
  setFieldValue,
}: FlightInfoProps) => {
  const classes = useStyles()

  return (
    <>
      <Box
        px={8}
        fontSize={12}
        fontWeight={500}
        color={grey[500]}
        style={{ textTransform: 'uppercase' }}
      >
        Информация о рейсе
      </Box>
      <Box px={8} pb={12}>
        <Grid container spacing={4}>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="from">Откуда *</InputLabel>
              <Select
                required
                name="flightInfo.from"
                value={from}
                options={CITY_DATA}
                onChange={handleChange}
                inputProps={{
                  id: 'from',
                }}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="to">Куда *</InputLabel>
              <Select
                required
                name="flightInfo.to"
                value={to}
                options={CITY_DATA}
                onChange={handleChange}
                inputProps={{
                  id: 'to',
                }}
              />
            </FormControl>
          </Grid>
          <Grid item sm={4} xs={12}>
            <FormControl className={classes.extendedFormControl}>
              <TextField
                id="datetime-local"
                label="Дата/Время вылета"
                type="datetime-local"
                onChange={handleChange}
                name="flightInfo.dateTime"
                value={dateTime}
                InputLabelProps={{ shrink: true }}
              />
            </FormControl>
          </Grid>
          <Grid item sm={4} xs={12}>
            <FormControl className={classes.formControl}>
              <TextField
                required
                name="flightInfo.flightNumber"
                value={flightNumber}
                margin="normal"
                onChange={handleChange}
                fullWidth
                label="Номер рейса"
              />
            </FormControl>
          </Grid>
          <Grid item sm={8} xs={12}>
            {ticketPhoto ? (
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
                  className={classes.input}
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
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
