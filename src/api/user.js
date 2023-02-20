import request from '@/utils/request'
// 登录
export function login(data) {
  return request({
    url: '/users/login',
    method: 'post',
    data
  })
}
// 注册
export function register(data) {
  return request({
    url: '/users',
    method: 'post',
    data
  })
}
// 获取用户信息
export function getInfo(token) {
  return request({
    url: '/user',
    method: 'get',
    params: { token }
  })
}
// 登出
// export function logout() {
//   return request({
//     url: "/vue-element-admin/user/logout",
//     method: "post",
//   });
// }
