import React, { useReducer, useState } from 'react'
import './App.scss';

// useState
// initState = 0
// actions (UP/Down);

// useReducer
// initState 
const initialState = 0;

// actions (UP/Down);
const UP_COUNT = 'up';
const DOWN_COUNT = 'down';
const NHAN_COUNT= 'nhan';

// reducer
const reducer = (state, action) => {
  switch(action)
  {
    case UP_COUNT: 
      return state + 1;

    case DOWN_COUNT:
      return state -1;

    case NHAN_COUNT:
      return state *state;

    
    
    default:
        throw new Error("Invalid action")
  }

}
// dispatch

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={() => dispatch(UP_COUNT)}>up</button>
      <button type="button" onClick={() => dispatch(DOWN_COUNT)}>down</button>
      <button type="button" onClick={() => dispatch(NHAN_COUNT)}>NHAN</button>

    </div>
  )
}

export default App
