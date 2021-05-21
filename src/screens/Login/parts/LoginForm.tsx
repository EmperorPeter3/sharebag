import React, { useState } from 'react'
import { Box, Paper, TextField, Button, Typography } from '@material-ui/core'
import { LoginFormProps } from '../types'

export const LoginForm = ({ onLogin, onFormViewChange }: LoginFormProps) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onLoginClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    onLogin({ email, password })
  }

  return (
    <Box display="flex" height="100vh" width="100%" justifyContent="center" alignItems="center">
      <Paper>
        <form onSubmit={onLoginClick}>
          <Box display="flex" flexDirection="column" minWidth="250px" px={6} py={4}>
            <TextField
              fullWidth
              type="email"
              label="E-mail"
              variant="outlined"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Box my={1} />
            <TextField
              fullWidth
              type="password"
              label="Пароль"
              variant="outlined"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Box my={2} />
            <Button type="submit" size="large" variant="outlined" color="primary">
              Войти
            </Button>
            <Box my={1} />
            <Box
              textAlign="center"
              color="secondary.dark"
              style={{ cursor: 'pointer ' }}
              onClick={onFormViewChange}
            >
              <Typography variant="body2" color="inherit">
                Зарегистрироваться
              </Typography>
            </Box>
          </Box>
        </form>
      </Paper>
    </Box>
  )
}
