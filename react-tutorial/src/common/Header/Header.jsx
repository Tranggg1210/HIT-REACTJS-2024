import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
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
        <li>
          <NavLink to='/products' className={({ isActive }) => onChangeActive(isActive)}>
            Products
          </NavLink>
        </li>
      </ul>
      <br />
      <br />
    </nav>
    </div>
  )
}

export default Header
