import React from 'react'
import './Hero.css'
import Header from './../Header/Header';
import hero_image from '../../assets/hero_image.png'
import hero_image_webp from '../../assets/hero_image.webp'
import hero_image_back from '../../assets/hero_image_back.png'
import hero_image_back_webp from '../../assets/hero_image_back.webp'
import Heart from '../../assets/heart.png'
import Heart_webp from '../../assets/heart.webp'
import Calories from '../../assets/calories.png'
import Calories_webp from '../../assets/calories.webp'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
    const transition1 = { type: 'tween', duration: 3 };
    const transition2 = { type: 'spring', duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className='hero' id='home'>
            <div className='blur hero-blur'></div>
            <div className="left-h">
                <Header />

                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? '170px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={transition1}
                    >
                    </motion.div>
                    <span>the best fitness club in the town</span>
                </div>

                {/* Hero heading */}

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div >
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={140} start={100} delay='4' freFix="+"/>
                        </span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span><NumberCounter end={978} start={800} delay='4' freFix="+"/></span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span><NumberCounter end={50} start={0} delay='4' freFix="+"/></span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>
                {/* hero buttons */}
                <div className="hero-btns">
                    <button className='btn'>Get started</button>
                    <button className='btn'>Learn more</button>
                </div>
            </div>

            <div className="right-h">
                <button className='btn'>Join Now</button>
                <motion.div
                    initial={{right:'-1rem'}}
                    whileInView={{ right: '4rem' }}
                    transition= {transition2}
                    className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* hero images */}
                <img src={hero_image} alt="" className='hero-image' />
                <motion.img
                    initial={{right:'11rem'}}
                    whileInView={{ right: '20rem' }}
                    transition= {transition2}
                    src={hero_image_back} alt="" className='hero-image-back' />
                {/* calories */}
                <motion.div
                    initial={{right:'37rem'}}
                    whileInView={{ right: '28rem' }}
                    transition= {transition2}
                    className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero