import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './components/Header/Header'
import BodyComponent from './components/Body'
import { useState } from 'react'
const AppLayout = () => {
  return (
    <div className='app'>
      <HeaderComponent />
      <BodyComponent />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout />)
