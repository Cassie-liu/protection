import axios from 'axios'
import CONFIG from './config'

/**
 * 获取首页banner图
 * */
export function getBannerInfo () {
  return new Promise((resolve, reject) => {
    axios.post(CONFIG.serviceUrl + '/api/queryHomeImg')
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 获取联系我们信息
 * */
export function getContactInfo () {
  return new Promise((resolve, reject) => {
    axios.post(CONFIG.serviceUrl + '/api/queryContact')
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
/**
 * 获取项目介绍信息
 * */
export function getProjectInfo () {
  return new Promise((resolve, reject) => {
    axios.post(CONFIG.serviceUrl + '/api/queryProject')
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 获取项目介绍详情信息
 */
export function getProjectDetail (id) {
  return new Promise((resolve, reject) => {
    axios.post(CONFIG.serviceUrl + '/api/queryProjectDetail/' + id)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
/**
 * 获取工程案例信息
 */
export function getEngineerInfo () {
  return new Promise((resolve, reject) => {
    axios.post(CONFIG.serviceUrl + '/api/queryEngineering')
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
/**
 * 获取工程案例详情信息
 */
export function getEngineerDetail (id) {
  return new Promise((resolve, reject) => {
    axios.post(CONFIG.serviceUrl + '/api/queryEngineeringDetail/' + id)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
/**
 * 获取新闻资讯信息
 */
export function getNewsInfo () {
  return new Promise((resolve, reject) => {
    axios.post(CONFIG.serviceUrl + '/api/queryNews')
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
/**
 * 获取新闻资讯详情信息
 */
export function getNewsDetail (id) {
  return new Promise((resolve, reject) => {
    axios.post(CONFIG.serviceUrl + '/api/queryNewsDetail/' + id)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
/**
 * 获取公司介绍信息
 */
export function getCompanyInfo () {
  return new Promise((resolve, reject) => {
    axios.post(CONFIG.serviceUrl + '/api/queryCompanyDetail')
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
