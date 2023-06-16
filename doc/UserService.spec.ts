import { describe, it, expect, vi } from 'vitest';
import { Database } from './databse';
import { UserService } from './UserService';

describe('UserService', () => {
  it('should create user', () => {
    const database = new Database();
    const userService = new UserService(database);

    const user = userService.createUser('5c24');

    expect(database.getUser(user.id)?.name).toBe('5c24');
  });

  // 行为验证
  it('should create user 2', () => {
    const database = new Database();

    vi.spyOn(database, 'addUser');

    const userService = new UserService(database);
    userService.createUser('5c24');

    expect(database.addUser).toBeCalled();
  });
});
