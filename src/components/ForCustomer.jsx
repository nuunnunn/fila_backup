import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons';

import forCustomer_data from '../forCustomer_data';

const ForCustomer = () => {
    let forCustomerData = useState(forCustomer_data);
    
  return (
    <div className='forCustomerSlide'>
        <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
                500:{
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768:{
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                1024:{
                    slidesPerView: 3.5,
                    spaceBetween: 20,
                },
                1280:{
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1500:{
                    slidesPerView: 5.55,
                    spaceBetween: 20,
                }
            }}
            className="mySwiper"
        >
        {
            forCustomerData[0].map((v,i)=> 
                <SwiperSlide key={i} className='cancelBasic'>
                    <a>
                        <img src={v.imgUrl} alt="shell jacket" />
                    </a>
                    <div className='forCustomer_txt'>
                        <a>
                            <h6>{v.type}</h6>
                            <h5>{v.name}</h5>
                        </a>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h6>{v.price}</h6>  
                            <FontAwesomeIcon icon={faHeart} style={{color: '#ccc'}}/>
                        </div>   
                        <button>장바구니 담기</button>
                    </div>
                </SwiperSlide>
            )
        }
        </Swiper>        
    </div>
  )
}

export default ForCustomer