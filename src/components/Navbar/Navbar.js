import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'
import Logo from '../../assets/zambala.png'
import { animateScroll as scroll } from 'react-scroll'

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

    // useEffect(() => {
    //     window.addEventListener('scroll', changeNav)
    // }, [])

    const toggleHome= () => {
        scroll.scrollToTop();
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color? 'header header-bg' : 'header'}>
            <Link to="/" onClick={toggleHome}>
                <img src={Logo} alt=""/>
                {/* <h1>DRUKUL</h1> */}
                </Link> 
            <ul className={click? 'nav-menu active' : 'nav-menu' }>
                <li>
                    <Link to="/" className='link' onClick={toggleHome}>HOME</Link>
                </li>
                <li>
                    <Link to="/aboutus" className='link'>ABOUT US</Link>
                </li>
                <li>
                    <Link to="/services" className='link'>SERVICES</Link>
                </li>
                {/* <li>
                    <Link to="/announcements" className='link'>ANNOUNCEMENTS</Link>
                </li> */}
                <li>
                    <Link to="/contact" className='link'>CONTACT US</Link>
                </li>
                <a className="btn" href="tel:+61435816031">0435 816 031</a>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: '#fff'}} />) :  (<FaBars size={20} style={{color: '#fff'}} />)}
            </div>
        </div>
    )
}

export default Navbar
