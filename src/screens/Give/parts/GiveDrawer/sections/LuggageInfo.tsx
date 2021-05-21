import React from 'react'
import { makeStyles, Box, Grid, TextField, Button } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { LuggageInfoProps } from '../../../types'

const useStyles = makeStyles(() => ({
  input: { display: 'none' },
  uploadLabel: { display: 'inline-flex', alignSelf: 'flex-end' },
}))

export const LuggageInfo = ({
  luggageDescription,
  luggagePhoto,
  luggageWeight,
  onChangeField,
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
              fullWidth
              label="Какой груз вы готовы взять"
              value={luggageDescription}
              onChange={onChangeField('luggageDescription')}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              required
              variant="outlined"
              label="Вес груза"
              type="number"
              value={luggageWeight}
              onChange={onChangeField('luggageWeight')}
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
                onChange={onChangeField('luggagePhoto')}
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
