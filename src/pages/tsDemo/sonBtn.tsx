import React from 'react'

interface Iprops {
  handleClick(): void
}

const SonBtn: React.FC<Iprops> = ({ handleClick }) => (
  <div>
    <button onClick={handleClick}>123</button>
  </div>
)

export default SonBtn
