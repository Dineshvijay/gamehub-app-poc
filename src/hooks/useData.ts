import {useState, useEffect} from 'react'
import apiClient from '../service/api-client'
import { AxiosRequestConfig } from 'axios'

interface FetchResponse<T> {
    count: number,
    results: T[]
}
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState("")
  
    useEffect(() => {
      setLoading(true)
      apiClient.get<FetchResponse<T>>(endpoint, {...requestConfig})
      .then((res) => {
          setData(res.data.results)
          setLoading(false)
      })
      .catch((err) => {
          setError(err.message)
          setLoading(false)
      })
    }, deps ? [...deps] : [])
  
    return {data, error, isLoading}
}

export default useData