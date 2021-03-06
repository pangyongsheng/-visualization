/*
 * @Author       : your name
 * @Date         : 2020-04-09 11:33:59
 * @LastEditTime : 2020-07-27 15:05:58
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\.eslintrc.js
 */ 
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'indent': ["off", "tab"],
    'no-trailing-spaces': 0,
    'no-unused-vars': 'off',
    "no-irregular-whitespace":"off",//这禁止掉 空格报错检查
    "no-extra-semi" : 'off'
  }
}
