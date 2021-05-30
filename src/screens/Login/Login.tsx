import React, { useContext, useState } from 'react'
import { NotificationSystemContext } from '../../components'
import * as api from './api'
import { LoginForm, SignupForm } from './parts'
import { LoginProps, LoginFormFields, SignupFormFields } from './types'

export const Login = ({ setToken }: LoginProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoginView, setIsLoginView] = useState<boolean>(true)

  const { addNotification } = useContext(NotificationSystemContext)

  const toggleFormView = () => {
    setIsLoginView(!isLoginView)
  }

  const onLogin = async (body: LoginFormFields) => {
    setIsLoading(true)
    try {
      const result = await api.login(body)
      setToken(result)
    } catch (error) {
      addNotification({
        level: 'error',
        title: 'Error',
        message: error && error.response ? error.response.data : 'Unhandled error',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const onSignup = async (body: SignupFormFields) => {
    setIsLoading(true)
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
    } finally {
      setIsLoading(false)
    }
  }

  return isLoginView ? (
    <LoginForm isLoading={isLoading} onLogin={onLogin} onFormViewChange={toggleFormView} />
  ) : (
    <SignupForm isLoading={isLoading} onSignup={onSignup} onFormViewChange={toggleFormView} />
  )
}
