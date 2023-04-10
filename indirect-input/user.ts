const user = {
  age: 4,
};

export function userAge() {
  return user.age;
}

export function fetchUserAge() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(18);
    });
  });
}
