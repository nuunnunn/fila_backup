import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import exhibition_data from '../exhibition_data';

const Exhibition = () => {
    let [exhibitionData] = useState(exhibition_data);
    
  return (
    <div className='exhibitionSlide'>
        <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={0}
            breakpoints={{
                576:{
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768:{
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                1024:{
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1280:{
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1500:{
                    slidesPerView: 2.3,
                    spaceBetween: 30,
                }
            }}
            className="mySwiper"
        >
        {
            exhibitionData.map((v,i)=> 
                <SwiperSlide key={i}>
                    <a>
                        <img src={v.imgUrl} alt="shell jacket" />
                    </a>    
                    <h1>{v.name}</h1>
                    <h5>{v.content}</h5>
                    <h5>{v.content2}</h5>
                    <button>자세히 보기</button>            
                </SwiperSlide>
            )
        }
        </Swiper>        
    </div>
  )
}

export default Exhibition