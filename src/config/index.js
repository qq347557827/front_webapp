const baseURL = process.env.NODE_ENV === 'development' ? 'http://192.168.2.171:3008' : 'http://119.91.192.232:3000'
const socketURL = process.env.NODE_ENV === 'development' ? 'ws://127.0.0.1:3001' : 'http://119.91.192.232:3001'

export { baseURL, socketURL }
