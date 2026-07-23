import logo from '../../assets/logo.svg'
import { useState } from 'react'

const HeaderComponent = () => {
  const [darkModeToggle, setDarkModeToggle] = useState(false)
  return (
    <div className='header'>
      <div className='logo-container'>
        <a href='/'>
          <img className='logo' src={logo}></img>
        </a>
      </div>

      <div className='nav-items'>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderComponent
