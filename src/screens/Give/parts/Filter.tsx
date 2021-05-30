import React from 'react'
import { Box, Button, Grid, TextField } from '@material-ui/core'
import { DirectionsSelect } from '../../../components'
import { FilterProps } from '../types'

export const Filter = ({
  onChangeField,
  onChangeDirectionField,
  onSearch,
  ...form
}: FilterProps) => {
  const onSearchClick = (event: React.FormEvent) => {
    event.preventDefault()
    onSearch({
      from: form.flightDate,
      depatrureStationCode: form.flightFrom!.id,
      arrivalStationCode: form.flightTo!.id,
    })
  }

  return (
    <form onSubmit={onSearchClick}>
      <Grid container spacing={5}>
        <Grid item>
          <Box minWidth="180px">
            <TextField
              fullWidth
              required
              variant="outlined"
              type="datetime-local"
              label="Дата и время вылета"
              value={form.flightDate}
              onChange={onChangeField('flightDate')}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box minWidth="250px">
            <DirectionsSelect
              required
              label="Откуда"
              value={form.flightFrom}
              onChange={onChangeDirectionField('flightFrom')}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box minWidth="250px">
            <DirectionsSelect
              required
              label="Куда"
              value={form.flightTo}
              onChange={onChangeDirectionField('flightTo')}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box width="130px">
            <TextField
              fullWidth
              variant="outlined"
              label="Макс. вес груза"
              type="number"
              value={form.luggageWeight}
              onChange={onChangeField('luggageWeight')}
              inputProps={{
                min: 1,
              }}
            />
          </Box>
        </Grid>
        <Grid item>
          <Button variant="contained" size="large" color="secondary" type="submit">
            Найти предложения
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
