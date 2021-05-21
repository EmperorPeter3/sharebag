import React, { useContext, useState } from 'react'
import { NotificationSystemContext } from '../../components/NotificationSystem'
import * as api from './api'
import { LoginForm, SignupForm } from './parts'
import { LoginProps, LoginFormFields, SignupFormFields } from './types'

export const Login = ({ setToken }: LoginProps) => {
  const [isLoginView, setIsLoginView] = useState<boolean>(true)

  const { addNotification } = useContext(NotificationSystemContext)

  const toggleFormView = () => {
    setIsLoginView(!isLoginView)
  }

  const onLogin = async (body: LoginFormFields) => {
    try {
      const result = await api.login(body)
      setToken(result)
    } catch (error) {
      addNotification({
        level: 'error',
        title: 'Error',
        message: error && error.response ? error.response.data : 'Unhandled error',
      })
    }
  }

  const onSignup = async (body: SignupFormFields) => {
    try {
      await api.signup(body)
      toggleFormView()
      addNotification({ level: 'error', title: 'Регистрация прошла успешно' })
    } catch (error) {
      addNotification({
        level: 'error',
        title: 'Error',
        message: error && error.response ? error.response.data : 'Unhandled error',
      })
    }
  }

  return isLoginView ? (
    <LoginForm onLogin={onLogin} onFormViewChange={toggleFormView} />
  ) : (
    <SignupForm onSignup={onSignup} onFormViewChange={toggleFormView} />
  )
}
