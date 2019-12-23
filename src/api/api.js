import axios from 'axios'

let localhost = 'http://localhost:8000'

// 符号*表示可能用不上的接口

// *获取指定的电影
export const retrieveMovie = id => {
  return axios.get(`${localhost}/movie/` + id + '/')
}

// *获取电影列表
export const listMovie = () => {
  return axios.get(`${localhost}/movie/`)
}

// 按照流派获(类别)取电影列表
export const listMovieByGenres = genre => {
  return axios.get(`${localhost}/movie/?search=` + genre)
}

// 获取流派枚举
export const listGenres = () => {
  return axios.get(`${localhost}/movie_genres/`)
}

// 获取类别type_set
export const listTypeSet = () => {
  return axios.get(`${localhost}/type_set/`)
}
