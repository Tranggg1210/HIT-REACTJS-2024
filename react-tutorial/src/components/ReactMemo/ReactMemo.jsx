import React, { memo } from 'react'

function ReactMemo({onIncrement}) {
  console.log("re-render");
  return (
    <div>
        ReactMemo <br />
        <button onClick={onIncrement}>increment</button>
    </div>
    
  )
}

export default memo(ReactMemo)
