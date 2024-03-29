export type LoginProps = {
  setToken: (token: string) => void
}

export type LoginFormFields = {
  email: string
  password: string
}

export type SignupFormFields = {
  email: string
  password: string
  phoneNumber: string
  skype?: string
  firstName: string
  lastName: string
}

export type LoginFormProps = {
  isLoading: boolean
  onLogin: (props: LoginFormFields) => void
  onFormViewChange: () => void
}

export type SignupFormProps = {
  isLoading: boolean
  onSignup: (props: SignupFormFields) => void
  onFormViewChange: () => void
}
