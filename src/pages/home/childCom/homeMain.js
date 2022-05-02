import { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { InfiniteScroll, List, Card, ErrorBlock } from 'antd-mobile'

import { getList } from '@/api/content'

function HomeMain() {
  const history = useHistory()
  const [page, setPage] = useState(0)
  const [limit] = useState(20)
  const [data, setData] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [errGetList, setErrGetList] = useState(false)

  async function loadMore() {
    try {
      const res = await getList({
        limit,
        page,
      })
      const data = res.data.data
      setData((val) => [...val, ...data])
      setPage((v) => v + 1)
      setHasMore(data.length >= limit)
    } catch (err) {
      console.log(' %c 🐱‍🏍 err: ', 'font-size:20px;background-color: #42b983;color:#fff;', err)
      setErrGetList(true)
    }
  }

  const postClick = (id) => {
    console.log(' %c 🐱‍🏍 id: ', 'font-size:20px;background-color: #42b983;color:#fff;', id)
    history.push(`/detail/${id}`)
  }
  return (
    <div>
      {errGetList ? (
        <ErrorBlock status="disconnected" />
      ) : (
        <div>
          <List>
            {data.map((item, index) => (
              <List.Item key={index}>
                <div>
                  <Card>
                    <div onClick={postClick.bind(null, item._id)}>
                      <div>{item.title}</div>
                      <div style={{ marginLeft: '1px', marginRight: '1px' }}>
                        <span className={'text-ellipsis'}>{item.content}</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </List.Item>
            ))}
          </List>
          <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </div>
      )}
    </div>
  )
}

const stateToProps = (state) => state

export default connect(stateToProps)(HomeMain)
