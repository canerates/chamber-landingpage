import React, {useState} from 'react';
import logo from '../images/logo_web.png';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
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
            <Navbar expand='md' fixed='top' container='md' className={navStatus || isOpen ? 'navbar-active' : ''}>
                <NavbarBrand href="#home">
                    <div className='logo'>
                        <img src={logo} alt=''/>
                    </div>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} className={isOpen ? 'navbar-toggler-checked' : ''} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className={isOpen ? 'nav-opened ms-auto' : 'ms-auto'} navbar>
                    {links.map(createNavItem)}
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
