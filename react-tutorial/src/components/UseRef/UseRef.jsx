import React, { useRef, useState } from 'react'

function UseRef() {
    const [count, setCount] = useState(90);
    
    const timerID = useRef(0);

    const h1Ref  = useRef(); 

    const handleStart = () => {
        timerID.current = setInterval(() => {
            setCount(pre => pre-1);
        }, 1000)
        h1Ref.current.style.color = "red"
    }
    const handleStop = () => {
        clearInterval(timerID.current);
    }
  return (
    <div>
        <h1 ref={h1Ref}>{count}</h1>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
    </div>
  )
}

export default UseRef