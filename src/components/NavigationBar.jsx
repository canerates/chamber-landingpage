import React, {useState} from 'react';
import logo from '../images/logo_web.png';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
<<<<<<< HEAD
    NavItem,
    NavLink,
=======
    NavItem
>>>>>>> 07e9bf252847a0b85a68ce570bebe31fb80b01c6
  } from 'reactstrap';
import { Link } from 'react-scroll';

const links = [
    { to: 'home', text: 'Home' },
    { to: 'features', text: 'Features' },
    { to: 'screens', text: 'Screens' }
];
  
const createNavItem = ({ to, text, className }) => (
    <NavItem>
        <Link className='nav-link' activeClass="active"  spy to={to}>{text}</Link>
    </NavItem>
);

const NavigationBar = () => {
    const [navStatus, setNavStatus] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNavStatus(true);
        }
        else {
            setNavStatus(false);
        }
    }

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    window.addEventListener('scroll', changeBackground);

    return(
        <div>
<<<<<<< HEAD
            <Navbar expand='sm' fixed='top' container='sm' className={navStatus ? 'navbar-active' : ''}>
=======
            <Navbar expand='md' fixed='top' container='md' className={navStatus || isOpen ? 'navbar-active' : ''}>
>>>>>>> 07e9bf252847a0b85a68ce570bebe31fb80b01c6
                <NavbarBrand href="#home">
                    <div className='logo'>
                        <img src={logo} alt=''/>
                    </div>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} className={isOpen ? 'navbar-toggler-checked' : ''} />
                <Collapse isOpen={isOpen} navbar>
<<<<<<< HEAD
                <Nav className='ms-auto' navbar>
=======
                <Nav className={isOpen ? 'nav-opened ms-auto' : 'ms-auto'} navbar>
>>>>>>> 07e9bf252847a0b85a68ce570bebe31fb80b01c6
                    {links.map(createNavItem)}
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
