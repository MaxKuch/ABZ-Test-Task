import React from 'react'
import { useSelector } from 'react-redux'
import logo from './img/logo.svg'
import {NavLink} from 'react-router-dom'
import scrollToElement from '../../helpers/scrollToElement'
const SideDrawer = ({open, drawerClickHandler}) => {
    const ref = useSelector(({app}) => app.regSectionRef)
    return (
        <div className={`side-drawer ${open ? 'open' : ''}`}>
            <nav className="side-drawer__box">
                <img src={logo} className="side-drawer__header" alt="logo"/>
                <ul className="side-drawer__links-group">
                    <li className = "side-drawer__link">
                        <NavLink to="/about-me" activeClassName="selected" className="parag" onClick={drawerClickHandler}>
                            About me
                        </NavLink>
                    </li>
                    <li className = "side-drawer__link">
                        <NavLink to="/relationships" activeClassName="selected" className="parag" onClick={drawerClickHandler}>
                            Relationships
                        </NavLink>
                    </li>
                    <li className = "side-drawer__link">
                        <NavLink to="/users" activeClassName="selected" className="parag" onClick={drawerClickHandler}>
                            Users
                        </NavLink>
                    </li>
                    <li className = "side-drawer__link">
                        <NavLink to="/sign-up" activeClassName="selected" className="parag" onClick={() => {
                            scrollToElement(ref)
                            drawerClickHandler()
                        }}>
                            Sign Up
                        </NavLink>
                    </li>
                    <li className = "side-drawer__link">
                        <NavLink to="/terms-and-conditions" activeClassName="selected" className="parag" onClick={drawerClickHandler}>
                            Terms and Conditions
                        </NavLink>
                    </li>
                </ul>
                <ul className="side-drawer__links-group">
                    <li className = "side-drawer__link">
                        <NavLink to="/how-it-works" activeClassName="selected" className="parag" onClick={drawerClickHandler}>
                            How it works
                        </NavLink>
                    </li>
                    <li className = "side-drawer__link">
                        <NavLink to="/partnership" activeClassName="selected" className="parag" onClick={drawerClickHandler}>
                            Partnership
                        </NavLink>
                    </li>
                    <li className = "side-drawer__link">
                        <NavLink to="/help" activeClassName="selected" className="parag" onClick={drawerClickHandler}>
                            Help
                        </NavLink>
                    </li>
                    <li className = "side-drawer__link">
                        <NavLink to="/leave-testimonial" activeClassName="selected" className="parag" onClick={drawerClickHandler}>
                            Leave testimonial
                        </NavLink>
                    </li>
                    <li className = "side-drawer__link">
                        <NavLink to="/contact-us" activeClassName="selected" className="parag" onClick={drawerClickHandler}>
                            Contact us
                        </NavLink>
                    </li>
                </ul>
                <ul className="side-drawer__links-group">
                    <li className = "side-drawer__link">
                        <NavLink to="/articles" activeClassName="selected" className="parag" onClick={drawerClickHandler}>
                            Articles
                        </NavLink>
                    </li>
                    <li className = "side-drawer__link">
                        <NavLink to="/our-news" activeClassName="selected" className="parag" onClick={drawerClickHandler}>
                            Our news
                        </NavLink>
                    </li>
                    <li className = "side-drawer__link">
                        <NavLink to="/testimonials" activeClassName="selected" className="parag" onClick={drawerClickHandler}>
                            Testimonials
                        </NavLink>
                    </li>
                    <li className = "side-drawer__link">
                        <NavLink to="/licenses" activeClassName="selected" className="parag" onClick={drawerClickHandler}>
                            Licenses
                        </NavLink>
                    </li>
                    <li className = "side-drawer__link">
                        <NavLink to="/privacy-policy" activeClassName="selected" className="parag" onClick={drawerClickHandler}>
                            Privacy Policy
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div onClick={drawerClickHandler} className="side-drawer__substrate"></div>
        </div>
        )
}
export default SideDrawer