import React from 'react'
import './App.scss';
import { store } from './store';
import {increment} from './store/actions'
import { useSelector } from 'react-redux';

function App() {
  const count = useSelector(store.getState);
  return (
    <div>
      <h1>{count.count}</h1>
      <button
        onClick={() => store.dispatch(increment())}
      >Tăng</button>
    </div>
  )
}

export default App;
