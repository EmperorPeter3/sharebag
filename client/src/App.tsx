import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import indigo from '@material-ui/core/colors/indigo'
import background from './images/home_bg_1.jpg'
import { Home } from './Home'
import { Give } from './GiveForm'
// import { Take } from './TakeForm'

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: indigo,
  },
})

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-image: url(${background});
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #464646;
  }
`

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CssBaseline />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/give" exact component={Give} />
        {/* <Route path="/take" exact component={Take} /> */}
      </BrowserRouter>
    </ThemeProvider>
  )
}
