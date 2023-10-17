import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import community_data from '../community_data';

const Community = () => {
    let communityData = useState(community_data)
    
  return (
    <div className='communitySlide'>
        <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            breakpoints={{
                576:{
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768:{
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                1024:{
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                1280:{
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1500:{
                    slidesPerView: 3.5,
                    spaceBetween: 40,
                }
            }}
            className="mySwiper"
        >
        {
            communityData[0].map((v,i)=> 
            <SwiperSlide key={i}>
                <a href='#'>
                    <img src={v.imgUrl} alt="shell jacket" />
                </a>    
                <div className='community_txt'>
                    <h5>{v.name} <small>{v.type}</small></h5>
                    <h5>{v.name2}</h5>
                    <h6>{v.content}</h6>
                    <h6>{v.content2}</h6>    
                </div>      
            </SwiperSlide>
        )
        }
        </Swiper>        
    </div>
  )
}

export default Community