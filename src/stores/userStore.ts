import { defineStore } from 'pinia'
import { type FetchOptions, type FetchParams, useFetch } from '../services/client'

interface User {
  id: number
  name: string
  email: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[]
  }),
  actions: {
    async fetchUsers(search: string) {
      const urlParams: FetchParams = {
        path: '/users',
        queryParams: { search }
      }
      const options: FetchOptions = {
        method: 'GET'
      }
      const { data, error } = await useFetch<User[]>(urlParams, options)
      if (error) {
        console.error(error)
        return
      }
      this.users = data ?? []
    }
  }
})
