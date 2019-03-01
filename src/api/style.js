import axios from '@/libs/api.request'

export const getDispms = (id) => {
  return axios.request({
    url: 'dispm/' + id,
    method: 'get'
  })
}

export const getStyle = (id) => {
  return axios.request({
    url: '/style/dispms/' + id,
    method: 'get'
  })
}

export const getAllStyle = ({ page, count, queryId, queryString }) => {
  return axios.request({
    url: 'styles/',
    method: 'get',
    params: {
      query: queryId,
      queryString: queryString,
      page: page,
      count: count
    }
  })
}

export const deleteStyle = (id) => {
  return axios.request({
    url: '/style/' + id,
    method: 'delete'
  })
}