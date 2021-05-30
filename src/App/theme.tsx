import React from 'react'
import {
  Box,
  BoxProps,
  // issue: https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from '@material-ui/core'
import { yellow, purple } from '@material-ui/core/colors'

export const accentsColors = {
  green: {
    pale: '#29CC97',
    bg: '#E9F6E8',
    main: '#22A116',
  },
  yellow: {
    main: '#F6C543',
  },
  red: {
    pale: '#F79292',
    main: '#D31F1F',
  },
  violet: {
    pale: '#7693DD',
  },
}

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[200],
      main: purple[400],
      dark: purple[600],
    },
    secondary: {
      light: yellow[200],
      main: yellow[400],
      dark: yellow[600],
    },
    background: {
      paper: '#F3FAFF', // blue bg
      default: '#ffffff',
    },
    text: {
      primary: '#2b2b2b',
      secondary: '#D0E0EE',
      hint: '#5CBCFF',
    },
    grey: {
      50: '#FCFCFC',
      100: '#F5F5F5',
      200: '#F2F2F2',
      300: '#D9D9D9',
      400: '#999999',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0D0D0D',
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        color: 'inherit',
        fontWeight: 'bold',
        fontSize: '64px',
        lineHeight: '83px',
      },
      h2: {
        color: 'inherit',
        fontWeight: 500,
        fontSize: '54px',
        lineHeight: '70px',
      },
      h3: {
        color: 'inherit',
        fontWeight: 600,
        fontSize: '40px',
        lineHeight: '56px',
      },
      h4: {
        color: 'inherit',
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '35px',
      },
      h5: {
        color: 'inherit',
        fontSize: '28px',
        lineHeight: '48px',
      },
      h6: {
        color: 'inherit',
        fontWeight: 'bold',
        fontSize: '25px',
        lineHeight: '27px',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
      },
      subtitle1: {
        // subheader
        color: 'inherit',
        fontWeight: 500,
        fontSize: '24px',
        lineHeight: '38px',
      },
      subtitle2: {
        // subline 18px medium
        color: 'inherit',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '27px',
      },
      body1: {
        // body desktop 16px
        color: 'inherit',
        fontSize: '16px',
        lineHeight: '26px',
      },
      body2: {
        // body desktop 14px
        color: 'inherit',
        fontSize: '14px',
        lineHeight: '21px',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
      },
      containedSizeLarge: {
        padding: '16px 30px',
      },
    },
    MuiFormLabel: {
      root: {
        color: '#777777',
      },
    },
  },
})

export const Body20 = ({
  children,
  ...props
}: {
  children: React.ReactNode
} & BoxProps) => (
  <Box fontSize="20px" lineHeight="34px" color="#000" {...props}>
    {children}
  </Box>
)
