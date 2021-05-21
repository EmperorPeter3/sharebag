import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { grey } from '@material-ui/core/colors'
import { ContactInfoProps } from '../types'

export const ContactInfo = ({ name, surname, phone, email, handleChange }: ContactInfoProps) => (
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
            name="contactInfo.name"
            value={name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            label="Имя"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            required
            name="contactInfo.surname"
            value={surname}
            margin="normal"
            onChange={handleChange}
            fullWidth
            label="Фамилия"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            required
            name="contactInfo.phone"
            value={phone}
            margin="normal"
            onChange={handleChange}
            fullWidth
            label="Телефон"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            required
            name="contactInfo.email"
            type="email"
            value={email}
            margin="normal"
            onChange={handleChange}
            fullWidth
            label="E-mail"
          />
        </Grid>
      </Grid>
    </Box>
  </>
)
