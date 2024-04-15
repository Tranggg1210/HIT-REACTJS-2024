import './App.scss'
import ReactMemo from './components/ReactMemo/ReactMemo'
import UseMemo from './components/UseMemo/UseMemo'
import Counter from './components/Counter/Counter'
import Form from './components/Form/Form1'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

const App = () => {
  return (
    <div className='app flex justify-center items-center'>
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <Counter/> */}
      {/* <Form /> */}
      {/* <Login /> */}
      <Register/>
    </div>
  )
}

export default App
