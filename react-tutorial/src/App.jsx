import React from 'react'
import './App.scss';
import { useStore, actions } from './store';
import { ADD_TODO } from './store/constants';

function App() {

  const [state, dispatch] = useStore();
  
  return (
    <div>
    </div>
  )
}

export default App
