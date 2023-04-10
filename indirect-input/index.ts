import { userAge } from './user';

// 直接 input
function add(a : number, b : number) {
  return a + b;
}

// 间接 input
export function doubleUserAge(): number {
  return userAge() * 2
}