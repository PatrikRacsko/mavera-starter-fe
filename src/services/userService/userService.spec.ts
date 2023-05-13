import { describe, it, expect, beforeAll, vi, afterEach } from 'vitest'
import { UserService } from './userService'
import {HTTPClient} from '../http'


describe('userService', () => {
    beforeAll(() => {
        HTTPClient.post = vi.fn().mockResolvedValue({ data: { token: '1234' } });
    });

      afterEach(() => {
        vi.clearAllMocks()
      })
  it('login function works properly', async () => {
    const spy = vi.spyOn(HTTPClient, 'post');
    await UserService.login('12334', '1234');
    expect(spy).toHaveBeenCalled();
  })
})
