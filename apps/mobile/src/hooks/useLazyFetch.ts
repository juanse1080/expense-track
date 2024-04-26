import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useCallback, useState } from 'react'

const useLazyFetch = <
  TData extends Record<string, unknown> | undefined = undefined,
  TResponse extends Record<string, unknown> = any,
  TError extends Record<string, unknown> = any
>() => {
  const [response, setResponse] = useState<TResponse>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<AxiosError<TError>>()

  const fetchData = useCallback(
    async (url: string, options: AxiosRequestConfig<TData>) => {
      try {
        setLoading(true)
        const response = await axios(url, {
          baseURL: process.env.EXPO_PUBLIC_API_URL,
          ...options,
        })

        setResponse(response.data as TResponse)
        setLoading(false)

        return response.data as TResponse
      } catch (error) {
        setError(error as AxiosError<TError>)
        setLoading(false)

        throw error
      }
    },
    []
  )

  return {
    response,
    loading,
    error,
    fetchData,
    setResponse,
  }
}

export default useLazyFetch
