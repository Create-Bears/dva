import request from '../utils/request'

export const UserLogin = params => {
  console.log(params)
  let url ='/emstu/teacher/login';
  return request.post(url,params)
}

export const UserRegister = (params)=>{
  let url ='/emstu/teacher/register';
  return request.post(url,params)
}
