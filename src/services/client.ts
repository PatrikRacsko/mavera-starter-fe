export interface FetchOptions {
  method: string
  headers?: Record<string, string>
  body?: BodyInit
}

export interface FetchParams {
  path: string
  queryParams?: Record<string, string>
}

export interface FetchResponse<T> {
  data: T | null
  error: Error | null
}

function useHeaders(headers?: Record<string, string>): Record<string, string> {
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  return { ...defaultHeaders, ...headers }
}

export async function useFetch<T extends any>(
  params: FetchParams,
  options: FetchOptions = { method: 'GET' }
): Promise<FetchResponse<T>> {
  const { path, queryParams } = params

  const searchParams = new URLSearchParams(queryParams)

  const url = new URL(path, import.meta.env.VITE_BASE_URL)
  url.search = searchParams.toString()

  try {
    const response = await fetch(url.toString(), {
      ...options,
      headers: useHeaders(options.headers)
    })

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    const result = await response.json()
    return result as FetchResponse<T>
  } catch (err) {
    //Sentry?
    return err as FetchResponse<T>
  }
}
