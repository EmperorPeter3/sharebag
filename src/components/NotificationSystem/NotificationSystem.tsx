import * as React from 'react'
import { withStyles, Snackbar, Box, Fade } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { Notification, AddNotification } from './types'

const Alert = withStyles(() => ({
  icon: {
    padding: '12px 0',
  },
  action: {
    paddingTop: '12px',
    alignItems: 'flex-start',
  },
}))(MuiAlert)

type NotificationSystemState = {
  notifications: Notification[]
  addNotification: AddNotification
}

type NotificationSystemProps = {
  children: React.ReactNode
}

export const NotificationSystemContext = React.createContext<NotificationSystemState>({
  notifications: [],
  addNotification: () => {},
})

export class NotificationSystem extends React.Component<
  NotificationSystemProps,
  NotificationSystemState
> {
  addNotification = (notification: Notification) => {
    this.setState({
      notifications: [...this.state.notifications, notification],
    })
  }

  handleClose = (event?: React.SyntheticEvent, reason?: string, index?: number) => {
    if (reason === 'clickaway') {
      return
    }

    let notifications

    if (index !== undefined) {
      notifications = this.state.notifications.filter((n, idx) => idx !== index)
    } else {
      notifications = this.state.notifications.slice(0, 0)
    }

    this.setState({ notifications })
  }

  state = {
    notifications: [],
    addNotification: this.addNotification,
  }

  renderMessage = (message: string | string[]) => {
    return Array.isArray(message) ? (
      <Box display="flex" flexDirection="column">
        {message.map((msg) => (
          <Box mt={0.5}>{msg}</Box>
        ))}
      </Box>
    ) : (
      <Box fontSize="18px">{message}</Box>
    )
  }

  render() {
    const { notifications } = this.state
    const open = notifications.length > 0

    return (
      <>
        <NotificationSystemContext.Provider value={this.state}>
          {this.props.children}
        </NotificationSystemContext.Provider>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          autoHideDuration={3000}
          onClose={this.handleClose}
          TransitionComponent={Fade}
        >
          <Box display="flex" flexDirection="column">
            {notifications.map(({ title, message, level }, idx) => (
              <Box key={idx} mb={1}>
                <Alert
                  elevation={6}
                  variant="filled"
                  onClose={(event: React.SyntheticEvent) => this.handleClose(event, undefined, idx)}
                  severity={level}
                >
                  <Box fontSize="24px">{title}</Box>
                  {message && this.renderMessage(message)}
                </Alert>
              </Box>
            ))}
          </Box>
        </Snackbar>
      </>
    )
  }
}
