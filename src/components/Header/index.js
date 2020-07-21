import React from 'react'
import { useSelector } from 'react-redux'
import logo from './img/logo.svg'
import {NavLink} from 'react-router-dom'
import DrawerToggleButton from '../SideDrawer/SideDrawerButton'
import scrollToElement from '../../helpers/scrollToElement'
const Header = ({drawerClickHandler}) => {
    const ref = useSelector(({app}) => app.regSectionRef)
    return (
        <header className = "header nav fixed-top sticky-top d-flex align-center justify-between" role="navigation">
            <div className="main-container d-flex align-items-center justify-content-between">
                <NavLink to="/" className="header__logo d-block">
                    <img src={logo} alt="logo" className="d-block"/>
                </NavLink>
                <ul className="header__nav">
                    <li className="header__nav-item">
                        <NavLink to="/about-me" activeClassName="selected" className="header__nav-link">
                            About me
                        </NavLink>
                    </li>

                    <li className="header__nav-item">
                        <NavLink to="/relationships" activeClassName="selected" className="header__nav-link">
                            Relationships
                        </NavLink>
                    </li>

                    <li className="header__nav-item">
                        <NavLink to="/requirements" activeClassName="selected" className="header__nav-link">
                            Requirements
                        </NavLink>
                    </li>

                    <li className="header__nav-item">
                        <NavLink to="/users" activeClassName="selected" className="header__nav-link">
                            Users
                        </NavLink>
                    </li>

                    <li className="header__nav-item">
                        <NavLink to="/sign-up" activeClassName="selected" onClick={() => {scrollToElement(ref)}} className="header__nav-link">
                            Sign Up
                        </NavLink>
                    </li>
                </ul>
                <DrawerToggleButton drawerClickHandler = {drawerClickHandler}/>
            </div>
        </header>
    )
}

export default Header