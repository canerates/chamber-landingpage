import {useState} from 'react';
import {Link} from 'react-scroll';
import logo from '../images/logo_web.png';

const Navbar = () => {
    const [navStatus, setNavStatus] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNavStatus(true);
        }
        else {
            setNavStatus(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return(
        <nav className={navStatus ? 'nav active' : 'nav'}>
            <div className='logo'>
                <img src={logo} alt=''/>
            </div>
            <input type='checkbox' className='menu-btn' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li>
                    <Link activeClass="active"  spy to="home">Home</Link>
                </li>
                <li>
                    <Link activeClass="active"  spy to="features">Features</Link>
                </li>
                <li>
                    <Link activeClass="active"  spy to="screens">Screens</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
