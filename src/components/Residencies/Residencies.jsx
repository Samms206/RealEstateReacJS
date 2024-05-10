import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import "./Residencies.css"
import "swiper/css"
import data from "../../utils/slider.json"
import { sliderSettings } from '../../utils/common'

const Residencies = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>
            <Swiper {...sliderSettings} id='mySwiper'>
                <SliderButton/>
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flexColStart r-card">
                                <img src={item.image} alt="residence" />
                                <span className="orangeText r-price">
                                    <span>$</span>
                                    <span>{item.price}</span>
                                </span>
                                <span className="primaryText r-name">{item.name}</span>
                                <span className="secondaryText r-detail">{item.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies

const SliderButton = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
    
}
