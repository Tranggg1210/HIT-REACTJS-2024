import React, { useCallback, useState } from 'react'
import ReactMemo from '../ReactMemo/ReactMemo'

function Counter() {
  const [counter, setCounter] = useState(0)
  const handleIncrement = useCallback(() => {
    setCounter(counter + 1)
  }, [])
  console.log("re-render");
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <ReactMemo onIncrement={handleIncrement}/>
    </div>
  )
}

export default Counter
