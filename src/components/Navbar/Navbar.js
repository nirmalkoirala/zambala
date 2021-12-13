import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'
import Logo from '../../assets/logo.png'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true)
        }else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color? 'header header-bg' : 'header'}>
            <Link to="/">
                <img src={Logo} alt="" />
                {/* <h1>DRUKUL</h1> */}
                </Link> 
            <ul className={click? 'nav-menu active' : 'nav-menu' }>
                <li>
                    <Link to="/ ">HOME</Link>
                </li>
                <li>
                    <Link to="/aboutus">ABOUT US</Link>
                </li>
                <li>
                    <Link to="/services">SERVICES</Link>
                </li>
                <li>
                    <Link to="/announcements">ANNOUNCEMENTS</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT US</Link>
                </li>
                <a className="btn" href="tel:+61406789009">0406 789 009</a>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: '#fff'}} />) :  (<FaBars size={20} style={{color: '#fff'}} />)}
            </div>
        </div>
    )
}

export default Navbar
