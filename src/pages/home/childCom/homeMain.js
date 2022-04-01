import React, { useState } from 'react'
import { connect } from 'react-redux'
import { InfiniteScroll, List, Card } from 'antd-mobile'
import { getList } from '../../../api/content'

function HomeMain() {
  const [page, setPage] = useState(0)
  const [limit] = useState(20)
  const [data, setData] = useState([])
  const [hasMore, setHasMore] = useState(true)

  async function loadMore() {
    const res = await getList({
      limit,
      page,
    })
    const data = res.data.data
    setData((val) => [...val, ...data])
    setPage((v) => v + 1)
    setHasMore(data.length >= limit)
  }

  return (
    <>
      <List>
        {data.map((item, index) => (
          <List.Item key={index}>
            <div>
              <Card>
                <div>{item.title}</div>
                <div>{item.content}</div>
              </Card>
            </div>
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </>
  )
}

const stateToProps = (state) => state

export default connect(stateToProps)(HomeMain)
