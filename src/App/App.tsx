import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Box, makeStyles, ThemeProvider } from '@material-ui/core'
import background from '../images/home_bg_1.jpg'
import { NotificationSystem } from '../components/NotificationSystem'
import { Home } from '../screens/Home'
import { Give } from '../screens/Give'
import { Login } from '../screens/Login'
import { ROUTES } from './routes'
import { theme } from './theme'

const useStyles = makeStyles(() => ({
  container: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  },
}))

export const useToken = () => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '')

  const saveToken = (token: string) => {
    sessionStorage.setItem('token', token)
    setToken(token)
  }

  return {
    setToken: saveToken,
    token,
  }
}

export const App = () => {
  const classes = useStyles()
  const { token, setToken } = useToken()

  return (
    <ThemeProvider theme={theme}>
      <NotificationSystem>
        <BrowserRouter>
          <Box
            className={classes.container}
            display="flex"
            flexDirection="column"
            minHeight="100vh"
          >
            {token ? (
              <>
                <Route path={ROUTES.HOME} exact component={Home} />
                <Route path={ROUTES.GIVE} exact component={Give} />
              </>
            ) : (
              <Login setToken={setToken} />
            )}
          </Box>
        </BrowserRouter>
      </NotificationSystem>
    </ThemeProvider>
  )
}
