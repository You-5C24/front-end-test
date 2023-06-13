import { Database, User } from './databse';

export class UserService {
  constructor(private database: Database) {
    this.database = database;
  }

  createUser(name: string): User {
    const id = Math.floor(Math.random() * 1000);
    const newUser: User = { id, name };
    this.database.addUser(newUser);
    return newUser;
  }
}
