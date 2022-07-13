import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from './../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png'
import leftArrow_webp from '../../assets/leftArrow.webp'
import rightArrow from '../../assets/rightArrow.png'
import rightArrow_webp from '../../assets/rightArrow.webp'
import {motion} from 'framer-motion'

const styleTestimonialName = {
    'color':'var(--orange)'
}

const Testimonials = () => {
    const transition = { type: 'spring', duration: 3 };
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length-1;

    return (
        <div className='testimonials' id='testimonials'>
            <div className="left-t">
                <span>TESTIMONIALS</span>
                <span className='stroke-text'>WHAT THEY</span>
                <span>SAY ABOUT US</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                >
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span style={styleTestimonialName}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>
                <picture>
                    <source srcSet={testimonialsData[selected].imageWebp} />
                    <motion.img
                        key={selected}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={transition}
                        src={testimonialsData[selected].image} alt="" />
                </picture>

                <div className="arrows">
                    <picture>
                        <source srcSet={leftArrow_webp} />
                        <img
                            onClick={() => {
                                selected === 0 ? setSelected(tLength) : setSelected((prev) => prev - 1)
                            }}
                            src={leftArrow} alt="" />
                    </picture>
                    <picture>
                        <source srcSet={rightArrow_webp} />
                        <img
                            onClick={() => {
                                selected === tLength ? setSelected(0) : setSelected((prev) => prev + 1)
                            }}
                            src={rightArrow} alt="" />
                    </picture>
                </div>
            </div>
        </div>
    )
}

export default Testimonials