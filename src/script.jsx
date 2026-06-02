import React from 'react'
import ReactDOM from 'react-dom/client'
import logo from './assets/logo.svg'

const HeadingComponent = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={logo}></img>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const BodyComponent = () => {
  return (
    <div className='body'>
      <div className='search'>
        <h2 className='search'>Search</h2>
      </div>
      <div className='restro-container'>
        <div className='restro-image'>
          <img
            alt='kfcImage'
            src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/c1c0b0f4-4d4c-43d9-b82d-d79194e7add0_37103.JPG'
          ></img>
        </div>
        <div className='restro'>
          <p>KFC</p>
          <p>4.2 starts (17k+)</p>
          <p>35-40 mins</p>
          <p>Abids - 3 km</p>
        </div>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className='app'>
      <HeadingComponent />
      <BodyComponent />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout />)
