import React, { useState } from 'react'
import Son from '@p/tsDemo/son'
import SonBtn from '@p/tsDemo/sonBtn'

const TsDemo: React.FC = () => {
  const [tsNum, setTsNum] = useState(0)
  const handleClick = () => setTsNum((v) => v + 1)
  return (
    <div>
      <Son tsNum={tsNum} />
      <SonBtn handleClick={handleClick} />
    </div>
  )
}
export default TsDemo
