import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import shortid from 'shortid'
import DrawerToggleButton from '../SideDrawer/SideDrawerButton'
import scrollToElement from '../../helpers/scrollToElement'
import logo from './img/logo.svg'

const Header = ({ drawerClickHandler }) => {
    const ref = useSelector(({ app }) => app.regSectionRef)
    const linksArray = [
        {
            title: 'About me',
            path: '/about-me',
            ref: null,
        },
        {
            title: 'Relationships',
            path: '/relationships',
            ref: null,
        },
        {
            title: 'Requirements',
            path: '/requirements',
            ref: null,
        },
        {
            title: 'Users',
            path: '/users',
            ref: null,
        },
        {
            title: 'Sign Up',
            path: '/sign-up',
            ref,
        }
    ]
    return (
        <header className="header nav fixed-top sticky-top d-flex align-center justify-between" role="navigation">
            <div className="main-container d-flex align-items-center justify-content-between">
                <NavLink to="/" className="header__logo d-block">
                    <img src={logo} alt="logo" className="d-block" />
                </NavLink>
                <ul className="header__nav">
                    {linksArray.map((linkItem) => {
                        return (
                            <li key={shortid.generate()} className="header__nav-item">
                                <NavLink 
                                    to={linkItem.path}
                                    onClick={() => { scrollToElement(linkItem.ref) }} 
                                    activeClassName="selected" 
                                    className="header__nav-link">
                                        {linkItem.title}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                <DrawerToggleButton drawerClickHandler={drawerClickHandler} />
            </div>
        </header>
    )
}

export default Header