import React, { useState } from 'react'
import {
  makeStyles,
  Box,
  Grid,
  TextField,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  Drawer,
} from '@material-ui/core'
import { ArrowUpward } from '@material-ui/icons'
import { SecondaryButton, Select } from '../../components'
import { GiveDrawer } from './GiveDrawer'
import { CarrierOffersList } from './CarrierOffersList'
import { FormViewProps } from './types'
import { CITY_DATA } from '../../fakeData'

const useStyles = makeStyles(() => ({
  formControl: {
    width: 170,
  },
  fixedContainer: {
    position: 'fixed',
    bottom: '32px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
}))

export const FormView = (formProps: FormViewProps) => {
  const classes = useStyles()
  const [giveDrawerState, setGiveDrawerState] = useState(false)
  const {
    values: {
      flightInfo: { from, to, dateTime },
      luggageInfo: { weight },
    },
    handleChange,
  } = formProps

  const filterProps = {
    from,
    to,
    dateTime,
    weight,
  }

  return (
    <Box>
      <Grid container spacing={10}>
        <Grid item>
          <FormControl className={classes.formControl}>
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
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="adornment-amount">Макс. вес груза</InputLabel>
            <Input
              id="adornment-amount"
              required
              type="number"
              name="luggageInfo.weight"
              value={weight}
              onChange={handleChange}
              startAdornment={<InputAdornment position="start">кг</InputAdornment>}
            />
          </FormControl>
        </Grid>
      </Grid>
      <CarrierOffersList {...filterProps} />
      <div className={classes.fixedContainer}>
        <SecondaryButton onClick={() => setGiveDrawerState(true)}>
          Отдать багаж
          <ArrowUpward style={{ marginLeft: '8px' }} />
        </SecondaryButton>
      </div>
      <Drawer anchor="right" open={giveDrawerState} onClose={() => setGiveDrawerState(false)}>
        <GiveDrawer {...formProps} />
      </Drawer>
    </Box>
  )
}
