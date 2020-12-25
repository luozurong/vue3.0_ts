import axios, { AxiosRequestConfig } from 'axios'

axios.interceptors.request.use(config => {
  return config
})

axios.interceptors.response.use(res => {
  return res.data
}, err => {
  return err.response.data
})

export {axios, AxiosRequestConfig}