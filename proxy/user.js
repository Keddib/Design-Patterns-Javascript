import { isValidEmail, isLetters } from "./validators.js"
const user = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  age: 42,
  email: 'john@doe.com',
};

const userProxy = new Proxy(user, {
  get(target, prop) {
    console.log(`${new Date()} | The value of ${prop} is ${Reflect.get(target, prop)}`);
    return Reflect.get(target, prop);
  },
  set(target, prop, value) {
    if (prop == 'email') {
      if (!isValidEmail(value)) {
        throw new TypeError(`${value} is not a valid email`);
      }
    } else if (prop == 'age') {
      if (value < 18) {
        throw new TypeError(`${value} is under 18`);
      }
    } else if (prop == 'username') {
      if (!isLetters(value)) {
        throw TypeError(`${value} should contain letter only`);
      } else if (value.length < 3) {
        throw TypeError(`${value} should be at least 3 characters long`);
      }
    }
    return Reflect.set(target, prop, value);
  }
})

export default userProxy;
