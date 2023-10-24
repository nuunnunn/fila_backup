import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faX } from '@fortawesome/free-solid-svg-icons';

const RecoPop = (props) => {
    let {idx, setPopUp, recommendData} = props;
    console.log(recommendData)
  return (
    <div className='popWrap'>
        <div>
            <img src={recommendData[idx].imgUrl} alt="shoes" />
            <div>
                <div>
                    <div className='popAllCheck'>
                        <div>
                            <input type="checkbox" id='popCheck' />
                            <label htmlFor="popCheck"></label>
                            <span>전체선택</span>
                        </div>
                        <FontAwesomeIcon icon={faX} />
                    </div>
                    <div className='popProduct'>
                        <input type="checkbox" id='popCheck2' />                        
                        <label htmlFor="popCheck"></label>

                        <img src={recommendData[idx].imgUrl2} alt="shoes" />
                        <div>
                            <p>{recommendData[idx].name}</p>
                            <FontAwesomeIcon icon={faHeart} style={{color:'#ccc'}} />
                        </div>
                        <div>
                            <p>{recommendData[idx].price.toLocaleString()}원</p>
                            <select name="size" id="size">
                                <option value="size">사이즈</option>
                                <option value="230">230</option>
                                <option value="240">240</option>
                                <option value="250">250</option>
                                <option value="260">260</option>
                                <option value="270">270</option>
                                <option value="280">280</option>
                                <option value="290">290</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p>주문금액</p>
                        <p>원</p>
                    </div>
                    <div className='pop_cart'>
                        <p>장바구니 담기</p>
                        <p>구매하기</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecoPop