import axios from 'axios'

export function request(config) {
  //1、创建axios实例
  const instance = new axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })

  instance.interceptors.request.use(config  => {
    console.log('request打印')
    console.log(config);
    return config
  }, err  => {
    console.log(err)
  })

  instance.interceptors.response.use(res  => {
    console.log('response打印')
    console.log(res);
    return res.data
  },err  => {
    console.log('response失败打印')
    console.log(err)
  })

  return instance(config)
}
