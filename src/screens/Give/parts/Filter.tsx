import React from 'react'
import { Box, Grid, TextField } from '@material-ui/core'
import { DirectionsSelect } from '../../../components'
import { FilterProps } from '../types'

export const Filter = ({ onChangeField, onChangeDirectionField, ...form }: FilterProps) => (
  <Grid container spacing={5}>
    <Grid item>
      <Box width="180px">
        <TextField
          fullWidth
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
      <Box width="180px">
        <DirectionsSelect
          required
          label="Откуда"
          value={form.flightFrom}
          onChange={onChangeDirectionField('flightFrom')}
        />
      </Box>
    </Grid>
    <Grid item>
      <Box width="180px">
        <DirectionsSelect
          required
          label="Куда"
          value={form.flightTo}
          onChange={onChangeDirectionField('flightTo')}
        />
      </Box>
    </Grid>
    <Grid item>
      <Box width="180px">
        <TextField
          fullWidth
          required
          variant="outlined"
          label="Макс. вес груза"
          type="number"
          value={form.luggageWeight}
          onChange={onChangeField('luggageWeight')}
        />
      </Box>
    </Grid>
  </Grid>
)
