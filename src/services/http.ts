import axios, {
  type AxiosInstance,
  type AxiosError,
  type InternalAxiosRequestConfig,
  type AxiosResponse
} from 'axios'

export const HTTPClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL
})

HTTPClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // TODO check local storage if user is logged in if yes add authorization header
    return config
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  }
)

HTTPClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    // TODO Sentry or other bug tracking tool or redirects
    return Promise.reject(error)
  }
)
