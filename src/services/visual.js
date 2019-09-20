import request from '../utils/request'

export const visualClass = params => {
  let url = '/emstu/class/lists'
  return request.get(url, params)
}

export const addClass = params => {
  let url = '/emstu/class/create'
  return request.put(url, params)
}

export const addStudent = params => {
  let url = '/emstu/student/add'
  return request.put(url, params)
}

export const addExam = params => {
  let url = '/emstu/student/addrecord'
  return request.put(url, params)
}
