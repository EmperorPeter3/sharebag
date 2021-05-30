import React from 'react'
import { Grid, TextField } from '@material-ui/core'
import { LuggageInfoProps } from '../../../types'
import { DrawerHeader } from '../../../../../components'

export const LuggageInfo = ({
  luggageDescription,
  luggageWeight,
  luggagePrice,
  onChangeField,
}: LuggageInfoProps) => (
  <>
    <DrawerHeader>Информация о грузе</DrawerHeader>
    <Grid container spacing={4}>
      <Grid item sm={12} xs={12}>
        <TextField
          multiline
          variant="outlined"
          margin="normal"
          label="Какой груз вы готовы взять"
          value={luggageDescription}
          onChange={onChangeField('luggageDescription')}
          fullWidth
        />
      </Grid>
      <Grid item sm={6} xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Макс. вес груза (кг)"
          type="number"
          value={luggageWeight}
          onChange={onChangeField('luggageWeight')}
          inputProps={{
            min: 1,
          }}
        />
      </Grid>
      <Grid item sm={6} xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Ваш гонорар (руб)"
          type="number"
          value={luggagePrice}
          onChange={onChangeField('luggagePrice')}
          inputProps={{
            min: 0,
          }}
        />
      </Grid>
    </Grid>
  </>
)
