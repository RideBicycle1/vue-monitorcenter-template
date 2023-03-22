import request from '@/utils/request'

/**
 * 获取监控对象列表
 * */
export function fetchObjectList(query) {
  return request({
    url: '/objects/list',
    method: 'get',
    params: query
  })
}

/**
 * 根据id获取监控对象记录
 * */
export function fetchObject(id) {
  return request({
    url: '/objects/detail',
    method: 'get',
    params: { id }
  })
}

export function createObject(data) {
  return request({
    url: '/MonitorCenter/v1/objects/create',
    method: 'post',
    data
  })
}

export function updateObject(data) {
  return request({
    url: '/MonitorCenter/v1/objects/update',
    method: 'post',
    data
  })
}
