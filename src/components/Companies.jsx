import React from 'react'
import Company from './Company'
import companiesfromJson from '../CompanyJson.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../assets/css/Logos.css'


const Companies = () => {
    return (
        <div className='container company'>
            <div className='row  '>
              <h3>Trusted by</h3>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        320: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                    }}
                      modules={[Autoplay]}
                    className="mySwiper"
                >
                    {
                        companiesfromJson.map((logo,index) => (
                        <SwiperSlide ><Company key={index} logos={logo.company_pic} /></SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Companies