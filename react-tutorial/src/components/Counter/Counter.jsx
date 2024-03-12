import React, { useState } from 'react'

function Counter() {
    const marks = [100, 100, 33];

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleIncrement}>increment</button>
        </div>
    )
}

export default Counter