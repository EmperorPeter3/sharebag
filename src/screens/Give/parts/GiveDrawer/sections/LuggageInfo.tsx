import React from 'react'
import { makeStyles, Box, Grid, TextField, Button } from '@material-ui/core'
import { DrawerHeader } from '../../../../../components'
import { LuggageInfoProps } from '../../../types'

const useStyles = makeStyles(() => ({
  input: { display: 'none' },
  uploadLabel: { display: 'inline-flex', alignSelf: 'flex-end' },
}))

export const LuggageInfo = ({
  luggageDescription,
  luggagePhoto,
  luggageWeight,
  onChangePhoto,
  onChangeField,
}: LuggageInfoProps) => {
  const classes = useStyles()

  const onAddPhoto = (event: any) => {
    onChangePhoto(URL.createObjectURL(event.target.files[0]))
  }

  return (
    <>
      <DrawerHeader>Информация о грузе</DrawerHeader>
      <Box mx={4}>
        <Grid container spacing={4}>
          <Grid item sm={12} xs={12}>
            <TextField
              multiline
              fullWidth
              label="Какой груз вы хотите отправить"
              value={luggageDescription}
              onChange={onChangeField('luggageDescription')}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Вес груза"
              type="number"
              value={luggageWeight}
              onChange={onChangeField('luggageWeight')}
              inputProps={{
                min: 1,
              }}
            />
          </Grid>
          <Grid container item sm={6} xs={12} alignItems="center">
            {luggagePhoto ? (
              <Box>
                <img alt="luggage" width="200px" height="56px" src={luggagePhoto} />
              </Box>
            ) : (
              <Box display="flex" pt={0.75}>
                <input
                  id="ticket-file"
                  type="file"
                  accept="image/*"
                  value={luggagePhoto}
                  className={classes.input}
                  onChange={onAddPhoto}
                />
                <label className={classes.uploadLabel} htmlFor="ticket-file">
                  <Button variant="outlined" component="span" size="large">
                    Добавить фото груза
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
