import { withStyles, Button } from '@material-ui/core'
import { yellow } from '@material-ui/core/colors'

export const PrimaryButton = withStyles((theme) => ({
  root: {
    height: '64px',
    width: '244px',
    textAlign: 'center',
    borderRadius: '35px',
    color: theme.palette.getContrastText(yellow[400]),
    backgroundColor: yellow[400],
    '&:hover': {
      backgroundColor: yellow[600],
    },
  },
  label: {
    letterSpacing: 1.25,
    fontWeight: 500,
  },
}))(Button)
