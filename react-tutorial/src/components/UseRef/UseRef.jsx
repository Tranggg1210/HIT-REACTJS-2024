import React, { useEffect, useRef, useState } from 'react'
import './UseRef.scss'

function UseRef() {
  const [count, setCount] = useState(90)
  const intervalId = useRef()
  const inputRef = useRef()
  const handleStart = () => {
    intervalId.current = setInterval(() => {
      setCount((pre) => pre - 1)
    }, 1000)
  }

  const handleStop = () => {
    clearInterval(intervalId.current)
  }

  const handleInput = () => {
    inputRef.current.focus()
    inputRef.current.value = 'hellu'
  }

  return (
    <div className='use-ref'>
      <h1>{count}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button> <br />
      <input type='text' ref={inputRef} onClick={handleInput} />
    </div>
  )
}

export default UseRef
