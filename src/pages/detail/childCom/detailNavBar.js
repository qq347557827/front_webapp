import { NavBar } from 'antd-mobile'

function DetailNavBar(props) {
  const { onBack } = props
  return (
    <div>
      <NavBar
        onBack={onBack}
        style={{
          '--border-bottom': '1px #eee solid',
        }}
      >
        详情页
      </NavBar>
    </div>
  )
}

export default DetailNavBar
