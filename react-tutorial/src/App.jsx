import React, { useState } from 'react'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { clear, save } from './store/auth.store'
import Login from './pages/Login/Login'
import { Route, Routes } from 'react-router-dom'

function App() {
  const auth = useSelector((state) => state.auth.auth)
  const dispatch = useDispatch()
  const handleLogin = () => {
    dispatch(save({ token: 'djsakl' }))
  }

  const handleLogout = () => {
    dispatch(clear())
  }

  return (
    <div>
      {auth?.token ? 'đã login' : 'chưa login'} <br />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Login />
    </div>
  )
}

export default App
