import { Skeleton } from 'antd-mobile'

function HomeSkeleton() {
  return (
    <div>
      <Skeleton.Paragraph animation lineCount={5} />
    </div>
  )
}

export default HomeSkeleton
