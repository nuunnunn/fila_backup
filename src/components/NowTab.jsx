import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import wind_data from '../wind_data';
import fBox_data from '../fBox_data';
import trend_data from '../trend_data';
import tennis_data from '../tennis_data';
import motorCore_data from '../motorCore_data';
import kids_data from '../kids_data';

const NowTab = (props) => {
    let { tab } = props;
    let windData = useState(wind_data);
    let fBoxData = useState(fBox_data);
    let trendData = useState(trend_data);
    let tennisData = useState(tennis_data);
    let moterCoreData = useState(motorCore_data);
    let kidsData = useState(kids_data);

    let [fade, setFade] = useState('');
    useEffect(() => {
        setTimeout(() => { setFade(' end') }, 50);
        return () => { setFade('') }
    }, [tab]);


    return (
        <div className={'start' + fade + ' nowSlide'}>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1500: {
                        slidesPerView: 5.55,
                        spaceBetween: 20,
                    }
                }}
                className="mySwiper"
            >
                {[
                    moterCoreData[0].map((v, i) =>
                        <SwiperSlide key={i}>
                            <a href='#'>
                                <img src={v.imgUrl} alt="shell jacket" />
                            </a>
                            <div className='now_txt'>
                                <a href='#'>
                                    <h6>{v.type}</h6>
                                    <h5>{v.name}</h5>
                                </a>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h6>{v.price}</h6>
                                    <FontAwesomeIcon icon={faHeart} style={{ color: '#ccc' }} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ),
                    windData[0].map((v, i) =>
                        <SwiperSlide key={i}>
                            <a href='#'>
                                <img src={v.imgUrl} alt="shell jacket" />
                            </a>
                            <div className='now_txt'>
                                <a href='#'>
                                    <h6>{v.type}</h6>
                                    <h5>{v.name}</h5>
                                </a>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h6>{v.price}</h6>
                                    <FontAwesomeIcon icon={faHeart} style={{ color: '#ccc' }} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ),
                    fBoxData[0].map((v, i) =>
                        <SwiperSlide key={i}>
                            <a href='#'>
                                <img src={v.imgUrl} alt="shell jacket" />
                            </a>
                            <div className='now_txt'>
                                <a href='#'>
                                    <h6>{v.type}</h6>
                                    <h5>{v.name}</h5>
                                </a>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h6>{v.price}</h6>
                                    <FontAwesomeIcon icon={faHeart} style={{ color: '#ccc' }} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ),
                    trendData[0].map((v, i) =>
                        <SwiperSlide key={i}>
                            <a href='#'>
                                <img src={v.imgUrl} alt="shell jacket" />
                            </a>
                            <div className='now_txt'>
                                <a href='#'>
                                    <h6>{v.type}</h6>
                                    <h5>{v.name}</h5>
                                </a>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h6>{v.price}</h6>
                                    <FontAwesomeIcon icon={faHeart} style={{ color: '#ccc' }} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ),
                    tennisData[0].map((v, i) =>
                        <SwiperSlide key={i}>
                            <a href='#'>
                                <img src={v.imgUrl} alt="shell jacket" />
                            </a>
                            <div className='now_txt'>
                                <a href='#'>
                                    <h6>{v.type}</h6>
                                    <h5>{v.name}</h5>
                                </a>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h6>{v.price}</h6>
                                    <FontAwesomeIcon icon={faHeart} style={{ color: '#ccc' }} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ),
                    kidsData[0].map((v, i) =>
                        <SwiperSlide key={i}>
                            <a href='#'>
                                <img src={v.imgUrl} alt="shell jacket" />
                            </a>
                            <div className='now_txt'>
                                <a href='#'>
                                    <h6>{v.type}</h6>
                                    <h5>{v.name}</h5>
                                </a>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h6>{v.price}</h6>
                                    <FontAwesomeIcon icon={faHeart} style={{ color: '#ccc' }} />
                                </div>
                            </div>
                        </SwiperSlide>
                    )][tab]


                }
            </Swiper>
        </div>
    )
}

export default NowTab