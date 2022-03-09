import React from 'react'
import {NavLink} from 'react-router-dom'
import "../Menubar.css"

export default function MenuBar() {
  return (
    <>
        <div className="menu_style">
          <NavLink className='extraStyle' exact activeClassName='active_class' to='/' >About Us</NavLink>

          <NavLink className='extraStyle' exact activeClassName='active_class' to='/contact'>Contact Us</NavLink>

          <NavLink className='extraStyle' exact activeClassName='active_class' to='/search'>Search</NavLink>
          
          <NavLink className='extraStyle' exact activeClassName='active_class' to='/user/page'>User</NavLink>
          
          <NavLink className='extraStyle' exact activeClassName='active_class' to='/service'>Service</NavLink>
        </div>
        {/* <br /><br />
        <a href="/">About</a>
        <a href="Contact">Contact</a> */}
    </>
  )
}
