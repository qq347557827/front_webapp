// @ts-ignore

import React from 'react'

interface SonProps {
  tsNum: number
}

const Son: React.FC<SonProps> = ({ tsNum }) => {
  return <div>{tsNum}</div>
}

export default Son
