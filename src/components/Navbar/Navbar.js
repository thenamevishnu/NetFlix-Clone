import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NetFlix Logo" />

          <ul className='left-links'>
              <li>Home</li>
              <li>Originals</li>
              <li>Trending</li>
              <li>Action</li>
          </ul>
          
          <ul className='right-icons'>
              <li><i className='fa fa-search'></i> </li>
              <li><i className='fa fa-gift'></i></li>
              <li><i className='fa fa-bell'></i></li>
          </ul>

        <img className='avatar' src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" alt="Avatar" />
    </div>
  )
}

export default Navbar
