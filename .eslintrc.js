module.exports = {
  extends: ['scratch'], // no ES6
  env: {
    worker: true
  },
  globals: {
    Scratch: true
  },
  rules: {
    indent: ['error', 2]
  }
};
