// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
  // plugin:react/jsx-runtime 是 使用函数组件如果不引入 React 就会报错
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/prop-types': 0, // 防止在react组件定义中缺少props验证
    'no-useless-escape': 0,
    'no-unused-vars': 1,
    'no-undef': 0,
  },
}
