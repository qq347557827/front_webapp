// import Search from "./search";
import {SearchBar, Tabs} from "antd-mobile";


function SearchNav() {
  return (
    <div className={'search-nav'}>
      <SearchBar className={'search-bar'}
                 style={{
                   '--border-radius': '100px'
                 }}
      />
      <Tabs defaultActiveKey='/index'>
        <Tabs.Tab title='首页' key='/index' />
        <Tabs.Tab title='提問' key='/ask' />
        <Tabs.Tab title='建议' key='/advise' />
        <Tabs.Tab title='分享' key='/share' />
        <Tabs.Tab title='讨论' key='/discuss' />
      </Tabs>
    </div>
  )
}

export default SearchNav
