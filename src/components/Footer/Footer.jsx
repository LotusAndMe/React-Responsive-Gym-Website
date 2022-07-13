import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Github_webp from '../../assets/github.webp'
import Instagram from '../../assets/instagram.png'
import Instagram_webp from '../../assets/instagram.webp'
import LinkedIn from '../../assets/linkedin.png'
import LinkedIn_webp from '../../assets/linkedin.webp'
import Logo from '../../assets/logo.png'
import Logo_webp from '../../assets/logo.webp'


const Footer = () => {
    return (
        <div className='footer-container'>
            <hr />
            <div className="footer">
                <div className="social-links">
                    <picture>
                        <source srcset={Github_webp} />
                        <img src={Github} alt="" />
                    </picture>
                    <picture>
                        <source srcset={Instagram_webp} />
                        <img src={Instagram} alt="" />
                    </picture>
                    <picture>
                        <source srcset={LinkedIn_webp} />
                        <img src={LinkedIn} alt="" />
                    </picture>
                </div>
                <div className="logo-f">
                    <picture>
                        <source srcset={Logo_webp} />
                        <img src={Logo} alt="" />
                    </picture>
                </div>
            </div>
            <div className='blur footer-blur1'></div>
            <div className='blur footer-blur2'></div>
        </div>
    )
}

export default Footer