import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import './styles/index.scss'
import App from './App'
import { StoreProvider } from './store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <StoreProvider>
          <App />
        </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
