import axios from 'axios'

let localhost = 'http://localhost:8000'

// 获取指定的电影
export const retrieveMovie = id => {
  return axios.get(`${localhost}/movie/` + id + '/')
}

// 获取电影列表
export const listMovie = () => {
  return axios.get(`${localhost}/movie/`)
}
