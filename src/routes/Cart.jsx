import React, { useEffect, useState } from 'react'
import CartTab from '../components/CartTab'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, chTab } from '../store'

import { Container, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Scrollbar } from 'swiper/modules';

import detail_data from '../detail_data';

const Cart = () => {
    let user = useSelector(state => state.user)
    let tab = useSelector(state => state.tab)
    let dispatch = useDispatch()

    let detailData = useState(detail_data);


    return (
        <>
            <Container className='cart_wrap'>
                <h2 className='text-center' onClick={() => { dispatch(changeName()) }}>{user.value}님의 장바구니</h2>

                <Nav variant="underline" defaultActiveKey="cart" className='mt-4 cart_tab'>
                    <Nav.Item>
                        <Nav.Link eventKey="delivery" onClick={() => { dispatch(chTab(0)) }}>일반배송 <sup>0</sup></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="todayArrive" onClick={() => { dispatch(chTab(1)) }}>오늘도착 <sup>0</sup></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="pickUp" onClick={() => { dispatch(chTab(2)) }}>매장픽업 <sup>0</sup></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="reservation" onClick={() => { dispatch(chTab(3)) }}>예약구매 <sup>0</sup></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="custom" onClick={() => { dispatch(chTab(4)) }}>커스텀오더 <sup>0</sup></Nav.Link>
                    </Nav.Item>
                </Nav>

                <CartTab />

            </Container>


            <div className='cart_swiperBox'>
                <h1>고객님을 위한 추천 상품</h1>

                <Swiper
                    navigation={true}
                    scrollbar={true}
                    modules={[Navigation, Scrollbar]}
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
                    className="mySwiper cart_swiper"
                >
                    {
                        detailData[0].map((v, i) =>
                            <SwiperSlide key={i}>
                                <img src={v.imgUrl} alt="shell jacket" />
                                <h6>{v.type}</h6>
                                <h5>{v.name}</h5>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h6>{v.price}</h6>
                                    <FontAwesomeIcon icon={faHeart} style={{ color: '#ccc' }} />
                                </div>
                                <button>장바구니 담기</button>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </>

    )
}

export default Cart