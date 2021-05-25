import request from '@/utils/request'

// 查询文章
export const getArticle = data => request.post('/api/serv/v1/article', { data })

// 获取文章列表
export const queryArticles = data => request.post('/api/serv/v1/column/articles', { data })

// 查询首页客户信息
export const getCustomerInfo = data =>
  request.post('/api/gw/v1/tranSport/companyInfo.json', { data })
