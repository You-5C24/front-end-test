import { User } from "./User";

export function doubleUserAge(): number {
  const user = new User("5C24", 8);

  // return user.age * 2;
  return user.getAge() * 2;
}
