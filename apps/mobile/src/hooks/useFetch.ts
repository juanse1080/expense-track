import { AxiosRequestConfig } from 'axios'
import { useEffect } from 'react'
import useLazyFetch from './useLazyFetch'

const useFetch = <
  TData extends Record<string, unknown> | undefined = undefined,
  TResponse extends Record<string, unknown> = any,
  TError extends Record<string, unknown> = any
>(
  url: string,
  options: AxiosRequestConfig<TData>
) => {
  const { fetchData, ...rest } = useLazyFetch<TData, TResponse, TError>()

  useEffect(() => {
    fetchData(url, options)
  }, [fetchData, options, url])

  return { ...rest, fetchData }
}

export default useFetch
