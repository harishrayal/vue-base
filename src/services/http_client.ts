import axios, { type AxiosRequestHeaders } from 'axios'
import router from '@/router'
import { StatusCodes } from 'http-status-codes'

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
})

instance.interceptors.request.use(
    function (config) {
        Object.assign(config.headers as AxiosRequestHeaders, {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        })
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)
instance.interceptors.response.use(
    function (response) {
        return Promise.resolve(response)
    },
    function (error) {
        if (error.response.status == StatusCodes.UNAUTHORIZED) {
            localStorage.removeItem('access_token')
            router.push({ name: 'Login' })
        }
        return Promise.reject(error)
    }
)

export default instance
