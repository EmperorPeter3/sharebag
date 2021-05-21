export type Notification = {
  title?: string
  message?: string | string[]
  level?: 'success' | 'info' | 'warning' | 'error'
}

export type AddNotification = (notification: Notification) => void
