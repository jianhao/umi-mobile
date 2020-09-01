import React, { memo, useEffect } from 'react'
import { connect } from 'umi'

import styles from './index.less'

export default connect(({ customerManage, loading }) => ({
  customerManage,
  infoLoading: loading.effects['customerManage/getCustomerInfo'],
}))(
  memo(props => {
    const { infoLoading, dispatch } = props
    console.log(infoLoading)

    // 获取客户信息
    useEffect(() => {
      dispatch({
        type: 'customerManage/getCustomerInfo',
      })
    }, [])

    return (
      <div className={styles.customerManage}>
        <h1>hello Umi3</h1>
      </div>
    )
  }),
)
