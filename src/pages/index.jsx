import React from 'react'
import { Button } from 'antd'
import { saveAs } from 'file-saver'
import { getArticle, queryArticles } from '../services'

const Demo = () => {
  const downloadArticle = data => {
    const content = JSON.stringify(data)
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    saveAs(blob, '../dist/articles.json')
  }

  const getArticles = async () => {
    const params1 = {
      cid: 216,
      size: 100,
      prev: 0,
      order: 'earliest',
      sample: false,
      chapter_ids: ['814', '815', '847', '872', '883', '910', '958', '976', '1023', '1055'],
    }
    const { data } = await queryArticles(params1)
    console.log('获取到的数据', data)
    const newList = data.list.slice(0, 4)
    const articleTisks = newList.map(item =>
      getArticle({ id: item.id, include_neighbors: true, is_freelyread: true }),
    )
    // let articles = []
    Promise.all(articleTisks)
      .then(resList => {
        console.log('获取成功', resList)
        downloadArticle(resList)
      })
      .catch(err => {
        console.log('获取失败', err)
      })
  }

  return (
    <Button type="primary" htmlType="submit" onClick={getArticles}>
      开始下载
    </Button>
  )
}

export default Demo
