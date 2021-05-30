import { Box, Button, Paper, TextField, Typography, CircularProgress } from '@material-ui/core'
import React, { useState } from 'react'
import { SignupFormFields, SignupFormProps } from '../types'

export const SignupForm = ({ isLoading, onSignup, onFormViewChange }: SignupFormProps) => {
  const [form, setForm] = useState<SignupFormFields>({
    email: '',
    password: '',
    phoneNumber: '',
    skype: '',
    firstName: '',
    lastName: '',
  })

  const onSignupClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    onSignup(form)
  }

  const onChangeField = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [field]: event.target.value as string })
  }

  return (
    <Box display="flex" height="100vh" width="100%" justifyContent="center" alignItems="center">
      <Paper>
        <form onSubmit={onSignupClick}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            width="350px"
            height="600px"
            px={6}
            py={4}
          >
            {isLoading ? (
              <CircularProgress size={100} />
            ) : (
              <>
                <TextField
                  fullWidth
                  required
                  type="email"
                  label="E-mail"
                  variant="outlined"
                  value={form.email}
                  onChange={onChangeField('email')}
                />
                <Box my={1} />
                <TextField
                  fullWidth
                  required
                  type="password"
                  label="Пароль"
                  variant="outlined"
                  value={form.password}
                  onChange={onChangeField('password')}
                />
                <Box my={1} />
                <TextField
                  fullWidth
                  required
                  type="phone"
                  label="Телефон"
                  variant="outlined"
                  value={form.phoneNumber}
                  onChange={onChangeField('phoneNumber')}
                />
                <Box my={1} />
                <TextField
                  fullWidth
                  required
                  label="Имя"
                  variant="outlined"
                  value={form.firstName}
                  onChange={onChangeField('firstName')}
                />
                <Box my={1} />
                <TextField
                  fullWidth
                  required
                  label="Фамилия"
                  variant="outlined"
                  value={form.lastName}
                  onChange={onChangeField('lastName')}
                />
                <Box my={1} />
                <TextField
                  fullWidth
                  label="Skype"
                  variant="outlined"
                  value={form.skype}
                  onChange={onChangeField('skype')}
                />
                <Box my={2} />
                <Button type="submit" size="large" variant="outlined" color="primary">
                  Зарегистрироваться
                </Button>
                <Box my={1} />
                <Box
                  textAlign="center"
                  color="secondary.dark"
                  style={{ cursor: 'pointer ' }}
                  onClick={onFormViewChange}
                >
                  <Typography variant="body2" color="inherit">
                    Уже есть аккаунт? Войти
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </form>
      </Paper>
    </Box>
  )
}
