import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './components/Header'
import BodyComponent from './components/Body'
import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './components/Error'

const AppLayout = () => {
  return (
    <div className='app'>
      <HeaderComponent />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <BodyComponent />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
