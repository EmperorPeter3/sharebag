import React from 'react'
import { Box, Grid, TextField } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { ContactInfoProps } from '../../../types'

export const ContactInfo = ({ name, surname, phone, email, onChangeField }: ContactInfoProps) => (
  <>
    <Box
      px={8}
      fontSize={12}
      fontWeight={500}
      color={grey[500]}
      style={{ textTransform: 'uppercase' }}
    >
      Контактные данные
    </Box>
    <Box px={8} pb={12}>
      <Grid container spacing={4}>
        <Grid item sm={6} xs={12}>
          <TextField
            required
            fullWidth
            label="Имя"
            value={name}
            onChange={onChangeField('name')}
            margin="normal"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            required
            fullWidth
            label="Фамилия"
            value={surname}
            margin="normal"
            onChange={onChangeField('surname')}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            required
            fullWidth
            label="Телефон"
            value={phone}
            margin="normal"
            onChange={onChangeField('phone')}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            required
            fullWidth
            margin="normal"
            type="email"
            label="E-mail"
            value={email}
            onChange={onChangeField('email')}
          />
        </Grid>
      </Grid>
    </Box>
  </>
)
