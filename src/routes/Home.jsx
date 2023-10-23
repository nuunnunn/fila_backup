import React, { useState } from 'react';
import { Button, Container, Nav, Tab } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NowTab from '../components/NowTab';
import Exhibition from '../components/Exhibition';
import Recommend from '../components/Recommend';
import Community from '../components/Community';
import ForCustomer from '../components/ForCustomer';
import { useDispatch, useSelector } from 'react-redux'
import { chTab } from '../store'

const Home = (props) => {
    let { moterCoreData } = props;
    let tab = useSelector(state => state.tab)
    let dispatch = useDispatch()


    return (
        <>
            {/* main banner */}
            <Swiper
                slidesPerView={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                scrollbar={true}
                navigation={true}
                modules={[Keyboard, Scrollbar, Navigation, Autoplay]}
                autoplay={{
                    delay: 14000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="mySwiper mainSwiper"
            >
                <SwiperSlide>
                    <img src="/img/banner1.jpg" />

                    <div className="swiper_txt">
                        <h1>SO-HEE SHELL JACKET</h1>
                        <Button variant="outline-light" className='swiper_btn mt-3'>자세히 보기</Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <video src="/img/banner2.mp4" autoPlay loop muted></video>

                    <div className="swiper_txt swiper_txt2">
                        <h1>Motor collection</h1>
                        <h1>with SO-HEE</h1>
                        <Button variant="outline-light" className='swiper_btn mt-3'>자세히 보기</Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <video src="/img/banner3.mp4" autoPlay loop muted></video>

                    <div className="swiper_txt">
                        <h1>HAILEY FOR FILA</h1>
                        <Button variant="outline-light" className='swiper_btn mt-3'>자세히 보기</Button>
                    </div>
                </SwiperSlide>
            </Swiper>


            {/* section1 */}
            <div className='now'>
                <h1>지금 많이 찾는 상품</h1>

                <Nav variant="underline" defaultActiveKey="motorCore" className='mt-4'>
                    <Nav.Item>
                        <Nav.Link eventKey="motorCore" onClick={() => { dispatch(chTab(0)) }}>#MOTORCORE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="wind" onClick={() => { dispatch(chTab(1)) }}>#윈드브레이커</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="fBox" onClick={() => { dispatch(chTab(2)) }}>#F-BOX</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="trend" onClick={() => { dispatch(chTab(3)) }}>#Trend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="tennis" onClick={() => { dispatch(chTab(4)) }}>#테니스</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="kids" onClick={() => { dispatch(chTab(5)) }}>#FILA KIDS X HIRO</Nav.Link>
                    </Nav.Item>
                </Nav>

                <NowTab moterCoreData={moterCoreData} />
            </div>
            



            {/* section2 */}
            <div className="exhibition">
                <Container><h1>기획전</h1></Container>
                <Exhibition />
            </div>



            {/* section3 */}
            <div className="recommend">
                <Container className='recommend_title'>
                    <h1>추천 스타일</h1>
                    <button className='more'>더보기</button>
                </Container>
                <Recommend />
            </div>



            {/* section4 */}
            <div className="community">
                <Container className='recommend_title'>
                    <h1>커뮤니티</h1>
                    <button className='more'>더보기</button>
                </Container>
                <Community />
            </div>



            {/* section5 */}
            <div className="forCustomer">
                <h1>고객님을 위한 추천 상품</h1>
                <ForCustomer />
            </div>



            {/* section6 */}
            <Container className='insta'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                        <path id="iconmonstr-instagram-11_2_" data-name="iconmonstr-instagram-11 (2)" d="M15,2.7c4.005,0,4.48.015,6.063.087,4.065.185,5.964,2.114,6.149,6.149C27.284,10.521,27.3,11,27.3,15s-.015,4.48-.086,6.061c-.186,4.031-2.08,5.964-6.149,6.149-1.582.073-2.055.088-6.062.088s-4.48-.015-6.061-.088c-4.075-.186-5.964-2.124-6.149-6.15C2.717,19.48,2.7,19.006,2.7,15s.016-4.479.088-6.061C2.976,4.905,4.87,2.975,8.939,2.79,10.521,2.719,10.995,2.7,15,2.7ZM15,0c-4.074,0-4.584.018-6.184.09C3.369.34.341,3.363.091,8.815.017,10.416,0,10.926,0,15s.018,4.585.09,6.185c.25,5.448,3.273,8.475,8.725,8.725,1.6.073,2.111.09,6.185.09s4.585-.017,6.185-.09c5.443-.25,8.477-3.273,8.724-8.725.074-1.6.091-2.111.091-6.185s-.017-4.584-.09-6.184C29.665,3.374,26.639.341,21.186.091,19.585.017,19.074,0,15,0Zm0,7.3A7.7,7.7,0,1,0,22.7,15,7.7,7.7,0,0,0,15,7.3ZM15,20a5,5,0,1,1,5-5A5,5,0,0,1,15,20ZM23.007,5.194a1.8,1.8,0,1,0,1.8,1.8A1.8,1.8,0,0,0,23.007,5.194Z"></path>
                    </svg>
                    <a href="https://www.instagram.com/fila_korea/">@fila_korea</a>
                </div>

                <div className='insta_imgBox'>
                    <a href='#'></a>
                    <a href='#'></a>
                    <a href='#'></a>
                    <a href='#'></a>
                    <a href='#'></a>
                    <a href='#'></a>
                    <a href='#'></a>
                    <a href='#'></a>
                    <a href='#'></a>
                    <a href='#'></a>
                </div>
            </Container>
        </>
    )
}

export default Home