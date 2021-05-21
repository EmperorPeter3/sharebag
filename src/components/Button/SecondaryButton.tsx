import { withStyles, Button } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'

export const SecondaryButton = withStyles((theme) => ({
  root: {
    height: '64px',
    width: '244px',
    textAlign: 'center',
    borderRadius: '35px',
    color: theme.palette.getContrastText(purple[400]),
    backgroundColor: purple[400],
    '&:hover': {
      backgroundColor: purple[600],
    },
  },
  label: {
    letterSpacing: 1.25,
    fontWeight: 500,
  },
}))(Button)
