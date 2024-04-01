import React, { memo } from 'react'

function Memo({onIncrement}) {

  return (
    <div>
        Memo
        // hooks
        // HOC
        // Render props
        <button onClick={onIncrement}>increment</button>
    </div>
  )
}

export default memo(Memo)