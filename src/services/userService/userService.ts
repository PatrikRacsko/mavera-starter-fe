import { HTTPClient } from '../http'

export const UserService = {
  async login(email: string, password: string) {
    const response = await HTTPClient.post('/login', { email, password })
    return response.data
  }
}
