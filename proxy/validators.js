function isValidEmail(email) {
  const tester = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return tester.test(email);
}

function isLetters(value) {
  if (typeof value == 'string') {
    return value.match(/^[a-zA-Z]+$/);
  }
  return false;
}
export { isValidEmail, isLetters }
