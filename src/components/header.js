import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <nav className={headerStyles.nav}>
      <ul className={headerStyles.navList}>
      <li>
      <h3>
        <Link className={headerStyles.title} to="/">
          Angel's Blog
        </Link>
      </h3>
        </li>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact"> 
          Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
