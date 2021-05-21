import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { grey } from '@material-ui/core/colors'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { LuggageInfoProps } from '../types'

const useStyles = makeStyles(() => ({
  input: { display: 'none' },
  uploadLabel: { display: 'inline-flex', alignSelf: 'flex-end' },
}))

export const LuggageInfo = ({
  luggageDescription,
  weight,
  luggagePhoto,
  handleChange,
}: LuggageInfoProps) => {
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
            <InputLabel htmlFor="adornment-amount">Вес груза</InputLabel>
            <Input
              id="adornment-amount"
              required
              type="number"
              name="luggageInfo.weight"
              value={weight}
              onChange={handleChange}
              startAdornment={<InputAdornment position="start">кг</InputAdornment>}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box display="flex" height="100%" pb={2}>
              <input
                id="ticket-file"
                type="file"
                accept="image/*"
                value={luggagePhoto}
                className={classes.input}
                name="luggageInfo.luggagePhoto"
                onChange={handleChange}
              />
              <label className={classes.uploadLabel} htmlFor="ticket-file">
                <Button variant="outlined" component="span">
                  Добавить фото груза
                </Button>
              </label>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
