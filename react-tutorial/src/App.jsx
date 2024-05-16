import React from 'react'
import './App.scss';
import useStore from './hooks/useStore';
import { actions } from './store';

function App() {
  const [state, dispatch] = useStore();
  console.log(state);
  return (
    <div>
      <input type="text" 
        value={state.todoInput}
        
        onChange={(e) => dispatch(actions.setInputTodo(e.target.value))}
      />
    </div>
  )
}

export default App;
