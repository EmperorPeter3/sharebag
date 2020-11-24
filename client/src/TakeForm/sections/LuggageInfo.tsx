import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { grey } from '@material-ui/core/colors'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import { LuggageInfoProps } from '../types'

export const LuggageInfo = ({
  luggageDescription,
  maxWeight,
  ownerPrice,
  handleChange,
}: LuggageInfoProps) => (
  <>
    <Box
      px={8}
      fontSize={12}
      fontWeight={500}
      color={grey[500]}
      style={{ textTransform: 'uppercase' }}
    >
      Информация о грузе
    </Box>
    <Box px={8} pb={12}>
      <Grid container spacing={4}>
        <Grid item sm={12} xs={12}>
          <TextField
            multiline
            name="luggageInfo.luggageDescription"
            value={luggageDescription}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
            label="Какой груз вы готовы взять"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <InputLabel htmlFor="adornment-amount">Макс. вес груза</InputLabel>
          <Input
            id="adornment-amount"
            required
            type="number"
            name="luggageInfo.maxWeight"
            value={maxWeight}
            onChange={handleChange}
            startAdornment={<InputAdornment position="start">кг</InputAdornment>}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <InputLabel htmlFor="adornment-amount">Ваш гонорар</InputLabel>
          <Input
            id="adornment-amount"
            required
            type="number"
            name="luggageInfo.ownerPrice"
            value={ownerPrice}
            onChange={handleChange}
            startAdornment={<InputAdornment position="start">&#8381;</InputAdornment>}
          />
        </Grid>
      </Grid>
    </Box>
  </>
)
