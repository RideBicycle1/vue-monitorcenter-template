import request from '@/utils/request'

/**
 * 获取所以监控对象信息列表
 * */
export function fetchObjectList() {
  return request({
    url: '/objects/api/',
    method: 'get'
  })
}

/**
 * 获取系统信息
 * */
export function fetchSysInfoList() {
  return request({
    url: '/sysinfo/api/',
    method: 'get'
  })
}
