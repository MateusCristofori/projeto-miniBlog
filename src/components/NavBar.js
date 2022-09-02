import React from 'react'
// CSS
import style from './NavBar.module.css'
// Router
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <NavLink to="/" className={style.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={style.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? style.active : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? style.active : '')}
          >
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
