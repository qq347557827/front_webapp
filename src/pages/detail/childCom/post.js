import { Card } from 'antd-mobile'

function Post(props) {
  const { postData } = props
  return (
    <div className={'top-borer-1'}>
      <Card title={postData.title}>
        <div className={'detail-post'}>
          <div dangerouslySetInnerHTML={{ __html: postData.htmlContent }}></div>
        </div>
      </Card>
    </div>
  )
}

export default Post
