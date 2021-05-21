import axios from 'axios'
import { API_URL } from '../../httpClient'
import { LoginFormFields, SignupFormFields } from './types'

export const login = async (body: LoginFormFields) =>
  axios.post(`${API_URL}/Account/Token`, body).then(({ data }: { data: string }) => data)

export const signup = async (body: SignupFormFields) =>
  axios.post(`${API_URL}/Account/CreateUser`, body).then(({ data }: { data: string }) => data)
