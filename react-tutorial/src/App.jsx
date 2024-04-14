import './App.scss'
import ReactMemo from './components/ReactMemo/ReactMemo'
import UseMemo from './components/UseMemo/UseMemo'
import Counter from './components/Counter/Counter'

const App = () => {
  return (
    <div className='app flex justify-center items-center'>
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      <Counter/>
    </div>
  )
}

export default App
