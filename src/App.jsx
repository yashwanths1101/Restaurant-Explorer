import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './components/Header'
import BodyComponent from './components/Body'
import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'

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
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
