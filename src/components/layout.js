import * as React from 'react'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'
import { Link } from 'gatsby'

export const Layout = (props) => {
  return (
    <div className={container}>
        <nav>
            <ul className={navLinks}>
                <li className={navLinkItem}><Link className={navLinkText} to='/'>Main Page</Link></li>
                <li className={navLinkItem}><Link className={navLinkText} to='/learning-progress'>Learning Progress</Link></li>
                <li className={navLinkItem}><Link className={navLinkText} to='/about'>About</Link></li>
            </ul>
        </nav>
        <h1 className={heading}>{props.heading}</h1>
    </div>
  )
}

export default Layout

