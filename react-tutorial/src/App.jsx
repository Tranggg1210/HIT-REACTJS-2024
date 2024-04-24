import { Route, Routes, Link, NavLink } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import AboutUs from './pages/AboutUs/AboutUs'
import Contact from './pages/Contact/Contact'

const App = () => {
  // const login = localStorage.getItem('login');

  const onChangeActive = (isActive) => {
    return isActive ? 'active' : ''
  }
  /**
   *
   * @param {{isActive, isPending, isTransitioning}} props
   */
  const onChangeActiveV2 = (props) => {
    return props.isActive ? 'active' : ''
  }
  const onChangeActiveV3 = ({ isActive }) => (isActive ? 'active' : '')
  return (
    <div>
      {/* <h1>{login ? "da login" : "chua login"}</h1>
      <Login/> */}
      <nav>
        <ul>
          <li>
            <NavLink to='/' className={onChangeActiveV3}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about-us' className={onChangeActiveV2}>
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) => onChangeActive(isActive)}>
              Contact
            </NavLink>
          </li>
        </ul>
        <br />
        <br />
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
