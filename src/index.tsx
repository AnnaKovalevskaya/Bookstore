import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'

const rootElement: any = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
