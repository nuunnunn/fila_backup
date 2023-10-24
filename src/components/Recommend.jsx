import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import recommend_data from '../recommend_data';
import RecoPop from './RecoPop';

const Recommend = () => {
    let [recommendData] = useState(recommend_data);
    
    let [popUp, setPopUp] = useState(false);
    let [idx, setIdx] = useState(0)
    
  return (
    <div className='exhibitionSlide'>
        <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={0}
            breakpoints={{
                576:{
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                768:{
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024:{
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1280:{
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1500:{
                    slidesPerView: 4.3,
                    spaceBetween: 20,
                }
            }}
            className="mySwiper"
        >
        {
            recommendData.map((v,i)=> 
                <SwiperSlide key={i}>
                    <img src={v.imgUrl} alt="shell jacket" onClick={()=>{
                        setPopUp(true) 
                        setIdx(i)
                    }}/>
                </SwiperSlide>
            )

           
        }
        </Swiper>
        {
            popUp ? <RecoPop  idx={idx} setPopUp={setPopUp} recommendData={recommendData} /> : null
        }        
    </div>
  )
}

export default Recommend