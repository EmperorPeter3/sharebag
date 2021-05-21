import axios from 'axios'

const HOST = 'http://localhost:5050'
const API_PREFIX = '/api'

export const API_URL = HOST + API_PREFIX

const config = {
  baseURL: API_URL,
}

const instance = axios.create(config)

instance.interceptors.request.use(
  async (config) => {
    const token = sessionStorage.getItem('token')
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  async function (error) {
    const originalRequest = error.config
    console.log(error.response)
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true
      window.location.reload()
      return instance(originalRequest)
    }
    return Promise.reject(error)
  },
)

export { instance as httpClient }
