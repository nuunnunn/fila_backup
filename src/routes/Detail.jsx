import React from 'react'

import { Container, Row, Col, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faHeart, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Scrollbar } from 'swiper/modules';

import detail_data from '../detail_data';

import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../store';

const Detail = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let { id } = useParams();
    let { moterCoreData } = props;

    let detailData = useState(detail_data);

    let [display, setDisplay] = useState(false)
    let [chevron, setChevron] = useState(false)

    return (
        <>
            <Container className='detail_wrap'>
                <Row>
                    <Col md={7}>
                        <div className='detail_left'>

                            <div className='d_left_top'>
                                <div className='d_l_t_left'>
                                    <img src={moterCoreData[id].imgUrl} alt="motorcore1" />
                                    <img src={moterCoreData[id].imgUrl2} alt="motorcore1_detail1" />
                                    <img src={moterCoreData[id].imgUrl3} alt="motorcore1_detail2" />
                                    <img src={moterCoreData[id].imgUrl4} alt="motorcore1_detail3" />
                                    <img src={moterCoreData[id].imgUrl5} alt="motorcore1_detail4" />
                                    <img src={moterCoreData[id].imgUrl6} alt="motorcore1_detail5" />
                                    <img src={moterCoreData[id].imgUrl7} alt="motorcore1_detail6" />
                                    <img src={moterCoreData[id].imgUrl8} alt="motorcore1_detail7" />
                                </div>
                                <div className='d_l_t_right'>
                                    <video src={moterCoreData[id].video} autoPlay loop muted></video>
                                </div>
                            </div>

                            <div className='d_left_bottom'>
                                <img src="/img/motorcore1_ex.jpg" alt="motorcore" />

                                <h4 style={{ marginBottom: '30px' }}>정보</h4>
                                <div>
                                    <p>신축성</p>
                                    <div className='graph'>
                                        <p className='circle bkCircle'></p>
                                        <p className='circle'></p>
                                        <p className='circle'></p>
                                    </div>
                                    <div className='graph_txt'>
                                        <p>없음</p>
                                        <p style={{ color: "#ccc" }}>보통</p>
                                        <p style={{ color: "#ccc" }}>좋음</p>
                                    </div>
                                </div>
                                <div>
                                    <p>두께감</p>
                                    <div className='graph'>
                                        <p className='circle'></p>
                                        <p className='circle bkCircle'></p>
                                        <p className='circle'></p>
                                    </div>
                                    <div className='graph_txt'>
                                        <p style={{ color: "#ccc" }}>얇음</p>
                                        <p style={{ paddingLeft: '10px' }}>보통</p>
                                        <p style={{ color: "#ccc" }}>두꺼움</p>
                                    </div>
                                </div>

                                <h4 style={{ marginTop: '70px' }}>실측 사이즈</h4>
                                <p>단위 cm</p>
                                <Table responsive="md" className='text-center'>
                                    <thead>
                                        <tr>
                                            <td>사이즈</td>
                                            <td style={{ background: '#eee' }}>090</td>
                                            <td style={{ background: '#eee' }}>095</td>
                                            <td style={{ background: '#eee' }}>100</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>총기장</td>
                                            <td>60.5</td>
                                            <td>62.5</td>
                                            <td>64.5</td>
                                        </tr>
                                        <tr>
                                            <td>가슴둘레</td>
                                            <td>128</td>
                                            <td>133</td>
                                            <td>138</td>
                                        </tr>
                                        <tr>
                                            <td>소매길이</td>
                                            <td>82</td>
                                            <td>84</td>
                                            <td>86</td>
                                        </tr>
                                        <tr>
                                            <td>밑단둘레</td>
                                            <td>120</td>
                                            <td>125</td>
                                            <td>130</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>

                        </div>
                    </Col>
                    <Col md={5} className='detail_right'>
                        <div className='d_r_left'>
                            <div>
                                <span>{moterCoreData[id].type}</span>
                                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14.1' height='15.5' viewBox='0 0 14.1 15.5'%3E%3Cg id='share' transform='translate(-157.25 -924.25)'%3E%3Cline id='선_17' data-name='선 17' y1='3.5' x2='6.16' transform='translate(161.22 927.779)' fill='none' stroke='%23000' stroke-miterlimit='10' stroke-width='1.5'/%3E%3Cline id='선_18' data-name='선 18' x2='6.16' y2='3.5' transform='translate(161.22 932.721)' fill='none' stroke='%23000' stroke-miterlimit='10' stroke-width='1.5'/%3E%3Ccircle id='타원_25' data-name='타원 25' cx='2.1' cy='2.1' r='2.1' transform='translate(158 929.9)' fill='none' stroke='%23000' stroke-linecap='square' stroke-miterlimit='10' stroke-width='1.5'/%3E%3Ccircle id='타원_26' data-name='타원 26' cx='2.1' cy='2.1' r='2.1' transform='translate(166.4 925)' fill='none' stroke='%23000' stroke-linecap='square' stroke-miterlimit='10' stroke-width='1.5'/%3E%3Ccircle id='타원_27' data-name='타원 27' cx='2.1' cy='2.1' r='2.1' transform='translate(166.4 934.8)' fill='none' stroke='%23000' stroke-linecap='square' stroke-miterlimit='10' stroke-width='1.5'/%3E%3C/g%3E%3C/svg%3E%0A" alt="share" />
                            </div>
                            <h3>{moterCoreData[id].name}</h3>
                            <p>{moterCoreData[id].price.toLocaleString()}원</p>
                            <p>{moterCoreData[id].content}</p>
                            <p>{moterCoreData[id].content2}</p>
                            <p>{moterCoreData[id].content3}</p>
                            <p>제품소재 : {moterCoreData[id].material}</p>
                            <p>상품코드 : {moterCoreData[id].code}</p>
                            <p>상품 정보 고시</p>
                        </div>


                        <div className='d_r_right'>
                            <h6>컬러</h6>
                            <img src={moterCoreData[id].imgUrl} alt="motorcore" />
                            {
                                (moterCoreData[id].imgUrl9 != '') ? <img src={moterCoreData[id].imgUrl9} alt="motorcore" /> : null
                            }

                            <div className='size'>
                                <h6>사이즈</h6>
                                <h6>매장 재고 현황</h6>
                            </div>

                            <input type="radio" name='size' id='size' />
                            <label htmlFor="size">090(S)</label>
                            <input name='size' type="radio" id='size2' />
                            <label htmlFor="size2">095(M)</label>

                            <div className='go_cart'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th><FontAwesomeIcon icon={faMinus} /></th>
                                            <th><input type="text" defaultValue={1} /></th>
                                            <th><FontAwesomeIcon icon={faPlus} /></th>
                                        </tr>
                                    </thead>
                                </table>

                                <div>
                                    <p>주문금액</p>
                                    <p>{moterCoreData[id].price.toLocaleString()}원</p>
                                </div>

                                <button>바로 구매하기</button>
                                <div>
                                    <button onClick={() => {
                                        dispatch(addItem({
                                            id: moterCoreData[id].id, name: moterCoreData[id].name, price: moterCoreData[id].price
                                            , code: moterCoreData[id].code, count: 1, imgUrl: moterCoreData[id].imgUrl
                                        }))
                                        navigate('/cart')
                                    }}>카트담기</button>
                                    <FontAwesomeIcon icon={faHeart} style={{ color: '#ccc' }} className='heart' />
                                </div>

                                <img src="/img/review_event_d_banner.jpg" alt="review_event" />
                            </div>

                            <div className='click_newMember' onClick={() => {
                                setDisplay(!display)
                                setChevron(!chevron)
                            }}
                            >
                                <p>신규회원 10,000원 할인 쿠폰 발급</p>
                                <FontAwesomeIcon className='up_down' icon={chevron ? faChevronUp : faChevronDown} />
                            
                                {display ?
                                <div className='newMember'>
                                    <p>가입 시 즉시발급 / 50,000원 이상 구매 시 사용가능</p>
                                </div> : null
                            }
                            </div>
                            <div className='plusBox'>
                                <p>상품 리뷰 &nbsp;<small>0</small></p>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <div className='plusBox'>
                                <p>상품 문의 &nbsp;<small>2</small></p>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>

                            <div>
                                <span>배송 정보</span>
                                <span>교환 및 반품</span>
                                <span>세탁방법</span>
                                <span>A/S</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>


            <div className='detail_under'>
                <h1>이 상품을 본 고객이 함께 본 상품</h1>

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
                        600: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        860: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3.5,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 4.5,
                            spaceBetween: 20,
                        },
                        1500: {
                            slidesPerView: 5.55,
                            spaceBetween: 20,
                        }
                    }}
                    className="mySwiper detail_swiper"
                >
                    {
                        detailData[0].map((v, i) =>
                            <SwiperSlide key={i}>
                                <img src={v.imgUrl} alt="shell jacket" />
                                <div className='detail_swiper_txt'>
                                    <h6>{v.type}</h6>
                                    <h5>{v.name}</h5>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h6>{v.price}</h6>
                                        <FontAwesomeIcon icon={faHeart} style={{ color: '#ccc' }} />
                                    </div>
                                    <button>장바구니 담기</button>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Detail