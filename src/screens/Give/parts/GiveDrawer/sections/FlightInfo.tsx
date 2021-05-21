import React, { useState } from 'react'
import { Box, Grid, Checkbox, TextField, FormControlLabel } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { FlightInfoProps } from '../../../types'
import { DirectionsSelect } from '../../../../../components'

export const FlightInfo = ({
  flightFrom,
  flightTo,
  flightDate,
  flightNumber,
  onChangeField,
  onChangeDirectionField,
}: FlightInfoProps) => {
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
              <Box width="144px">
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  label="Номер рейса"
                  value={flightNumber}
                  onChange={onChangeField('flightNumber')}
                />
              </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Box width="200px" height="40px">
                <TextField
                  id="datetime-local"
                  label="Дата и время вылета"
                  type="datetime-local"
                  value={flightDate}
                  onChange={onChangeField('flightDate')}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={3}>
            <Grid item sm={4} xs={12}>
              <Box width="144px">
                <DirectionsSelect
                  required
                  label="Откуда"
                  value={flightFrom}
                  onChange={onChangeDirectionField('flightFrom')}
                />
              </Box>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Box width="144px">
                <DirectionsSelect
                  required
                  label="Куда"
                  value={flightTo}
                  onChange={onChangeDirectionField('flightTo')}
                />
              </Box>
            </Grid>
            <Grid item sm={4} xs={12}>
              фото билета
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  )
}
