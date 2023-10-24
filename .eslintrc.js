module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  extends: "eslint:recommended",
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    Vlog: true,
    Browser: true,
    ScreenChromeExtensionUtil: true,
    VConsole: true,
    ActiveXObject: true
  },
  rules: {
    'generator-star-spacing': 'off',
    semi: [0],
    eqeqeq: [0],
    camelcase: 0,
    'space-before-function-paren': [0],
    'no-debugger': process.env.NODE_ENV === 'prod' ? 'error' : 'off'
  }
}
