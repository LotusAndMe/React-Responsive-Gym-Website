import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image1_webp from '../../assets/image1.webp'
import image2 from '../../assets/image2.png'
import image2_webp from '../../assets/image2.webp'
import image3 from '../../assets/image3.png'
import image3_webp from '../../assets/image3.webp'
import image4 from '../../assets/image4.png'
import image4_webp from '../../assets/image4.webp'
import nb from '../../assets/nb.png'
import nb_webp from '../../assets/nb.webp'
import adidas from '../../assets/adidas.png'
import adidas_webp from '../../assets/adidas.webp'
import nike from '../../assets/nike.png'
import nike_webp from '../../assets/nike.webp'
import tick from '../../assets/tick.png'
import tick_webp from '../../assets/tick.webp'

const Reasons = () => {
    return (
        <div className='reasons' id='reasons'>
            <div className="left-r">
                <picture className='image1'>
                    <source srcSet={image1_webp} />
                    <img src={image1} alt="" className='image1'/>
                </picture>
                <picture className='image2' >
                    <source srcSet={image2_webp} />
                    <img src={image2} alt="" className='image2'/>
                </picture>
                <picture className='image3' >
                    <source srcSet={image3_webp} />
                    <img src={image3} alt="" className='image3' />
                </picture>
                <picture className='image4'>
                    <source srcSet={image4_webp} />
                    <img src={image4} alt="" className='image4' />
                </picture>
            </div>

            <div className="right-r">
                <span>some reasons</span>
                <div>
                    <span className='stroke-text'>why</span>
                    <span> choose us</span>
                </div>

                <div className='details-r'>
                    <div>
                        <picture>
                            <source srcSet={tick_webp} />
                            <img src={tick} alt="" />
                        </picture>
                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div>
                        <picture>
                            <source srcSet={tick_webp} />
                            <img src={tick} alt="" />
                        </picture>
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <picture>
                            <source srcSet={tick_webp} />
                            <img src={tick} alt="" />
                        </picture>
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <picture>
                            <source srcSet={tick_webp} />
                            <img src={tick} alt="" />
                        </picture>
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <span className='partners-label'>OUR PARTNERS</span>
                <div className="partners">
                    <picture>
                        <source srcSet={nb_webp} />
                        <img src={nb} alt="" />
                    </picture>
                    <picture>
                        <source srcSet={adidas_webp} />
                        <img src={adidas} alt="" />
                    </picture>
                    <picture>
                        <source srcSet={nike_webp} />
                        <img src={nike} alt="" />
                    </picture>
                </div>
            </div>
        </div>
    )
}

export default Reasons