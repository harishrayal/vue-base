import type { AxiosResponse } from 'axios'
import httpClient from '@/services/http_client'

export const getDetails = async function (): Promise<AxiosResponse> {
    return httpClient.get(`users?page/2`)
}
