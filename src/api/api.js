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

// 获取类别枚举列表
export const listType = () => {
  return axios.get(`${localhost}/type_list/`)
}

// 获取地区枚举列表
export const listZone = () => {
  return axios.get(`${localhost}/zone_list/`)
}

// 获取1925~2016年电影平均score(世界&中国大陆)
export const listMeanScore = () => {
  return axios.get(`${localhost}/mean_score/`)
}

// 获取[0, 5, 6.5, 7.5, 8, 8.5, 9, 10]两两区间下的score分布(世界&中国大陆)
export const listScoreDistri = () => {
  return axios.get(`${localhost}/score_distri/`)
}

// 获取电影数目、评论数目随时间的变化(1920-2016)
export const listMvAndPNum = () => {
  return axios.get(`${localhost}/mvnum_pnum/`)
}

// 获取2010-2016年五个区间评分的电影数目变化
export const listScoreFlow = () => {
  return axios.get(`${localhost}/score_flow/`)
}

// 获取指定类型的电影的常见导演的score分布
export const retrieveTypeDirector = type => {
  return axios.get(`${localhost}/type_director/` + type + '/')
}

// 获取指定类型的电影的score分布
export const retrieveTypeScore = type => {
  return axios.get(`${localhost}/type_score/` + type + '/')
}

// 获取指定类型的电影的account分布
export const retrieveTypeAccount = type => {
  return axios.get(`${localhost}/type_account/` + type + '/')
}

// 获取指定地区的电影的score分布
export const retrieveZoneScore = zone => {
  return axios.get(`${localhost}/zone_score/` + zone + '/')
}

// 获取指定类型的电影的account分布
export const retrieveZoneAccount = zone => {
  return axios.get(`${localhost}/zone_account/` + zone + '/')
}

// 获取指定地区的电影的account分布
export const retrieveZoneDirector = zone => {
  return axios.get(`${localhost}/zone_director/` + zone + '/')
}
