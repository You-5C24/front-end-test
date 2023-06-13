import { describe, it, expect } from 'vitest';
import { Database } from './databse';
import { UserService } from './UserService';

describe('UserService', () => {
  it('should create user', () => {
    const database = new Database();
    const userService = new UserService(database);

    const user = userService.createUser('5c24');

    expect(database.getUser(user.id)?.name).toBe('5c24');
  });
});
