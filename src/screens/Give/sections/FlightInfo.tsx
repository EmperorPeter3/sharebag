import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { grey } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import { Select } from '../../../components'
import { FlightInfoProps } from '../types'
import { CITY_DATA } from '../../../fakeData'

const useStyles = makeStyles(() => ({
  formControl: {
    width: 144,
  },
  extendedformControl: {
    width: 200,
    height: 40,
  },
}))

export const FlightInfo = ({ from, to, dateTime, flightNumber, handleChange }: FlightInfoProps) => {
  const classes = useStyles()
  const [flightKnowledge, setFlightKnowledge] = useState(false)

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
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={flightKnowledge}
                onChange={({ target: { checked } }) => setFlightKnowledge(checked)}
                value="flightKnowledge"
                color="primary"
                inputProps={{
                  'aria-label': 'secondary checkbox',
                }}
              />
            }
            label="Я знаю номер рейса"
          />
        </Box>
        {flightKnowledge ? (
          <Grid container spacing={3} alignItems="center">
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
            <Grid item sm={6} xs={12}>
              <FormControl className={classes.extendedformControl}>
                <TextField
                  id="datetime-local"
                  label="Дата/Время вылета"
                  type="datetime-local"
                  name="flightInfo.dateTime"
                  value={dateTime}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={3}>
            <Grid item sm={4} xs={12}>
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
            <Grid item sm={4} xs={12}>
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
              <FormControl className={classes.formControl}>
                <TextField
                  id="date-local"
                  label="Дата вылета"
                  type="date"
                  name="flightInfo.dateTime"
                  value={dateTime}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  )
}
