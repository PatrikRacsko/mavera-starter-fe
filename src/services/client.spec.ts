import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { type FetchParams, type FetchOptions, type FetchResponse, useFetch } from './client'

describe.only('Client Service', () => {
  const mockResponse = { data: { name: 'John' }, error: null }

  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    })
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should call fetch with the correct URL and options', async () => {
    const mockParams: FetchParams = { path: '/users', queryParams: { search: 'john' } }
    const mockOptions: FetchOptions = { method: 'GET' }

    const response: FetchResponse<typeof mockResponse.data> = await useFetch(
      mockParams,
      mockOptions
    )

    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith(
      `${import.meta.env.VITE_BASE_URL}users?search=john`,
      expect.objectContaining({
        method: 'GET',
        headers: expect.objectContaining({
          Accept: 'application/json',
          'Content-Type': 'application/json'
        })
      })
    )

    expect(response).toEqual(mockResponse)
  })
})
