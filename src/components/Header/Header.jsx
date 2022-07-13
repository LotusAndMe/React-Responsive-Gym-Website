import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Logo_webp from '../../assets/logo.webp'
import Bars from '../../assets/bars.png'
import Bars_webp from '../../assets/bars.webp'
import { useState } from 'react'
import {Link} from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);
  const styleBar = { 'width': '1.5rem', 'height': '1.5rem' };
  const styleBarBackground = { 'backgroundColor': 'var(--appColor)', 'padding': '0.5rem', 'borderRadius': '5px' };
  
  return (
    <div className='header'>
      <picture>
        <source srcSet={Logo_webp} />
        <img src={Logo} alt="" className='logo' />
      </picture>
      {menuOpen === false && mobile === true ? (
        <div
          style={styleBarBackground}
          onClick={() => setMenuOpen(true)}
        >
          <picture>
            <source srcSet={Bars_webp} />
            <img src={Bars} alt="" style={styleBar} />
          </picture>
        </div>) : (
        <ul className='header-menu'>
          <li ><Link
            onClick={() => setMenuOpen(false)}
            activeClass='active'
            to='home' spy={true} smooth={true}>Home</Link></li>
            
          <li ><Link
            onClick={() => setMenuOpen(false)}
            to='programs' spy={true} smooth={true}>Programs</Link></li>
            
          <li ><Link
            onClick={() => setMenuOpen(false)}
            to='reasons' spy={true} smooth={true}>Why us</Link></li>
            
          <li ><Link
            onClick={() => setMenuOpen(false)}
            to='plans' spy={true} smooth={true}>Plans</Link></li>

          <li><Link
            onClick={() => setMenuOpen(false)}
            to='testimonials' spy={true} smooth={true}>Testimonials</Link></li>
        </ul>)}
          
    </div>
  )
}

export default Header