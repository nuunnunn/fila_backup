import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faMinus,faTrash } from '@fortawesome/free-solid-svg-icons';
import { addCount, deleteItem, minusCount, sortName, sortPrice_high, sortPrice_row } from '../store';

const CartTab = () => {
    let tab = useSelector(state => state.tab.value)
    let cart = useSelector(state => state.cart)
    let dispatch = useDispatch()

    let total = ()=>{
        let sum = 0;
        for(let i in cart){
            sum += cart[i].price * cart[i].count
        }
        return sum
    }

    let [deliveryFee, setDeliveryFee] = useState(2500)
    useEffect(()=>{
        function fee() {
            if (total() >= 50000) {
                setDeliveryFee(0)
            } else {
                setDeliveryFee(2500)
            }
        }
        fee()
    })
    


    if(tab === 0){
        return(
            <div className='cartTab_wrap py-5'>
                <div className='allCheck'>
                    <div>
                        <input type="checkbox" id='allCheck' checked  />
                        <label htmlFor="allCheck"></label>
                        <span>전체선택</span>
                    </div>
                    <div>
                        <span onClick={()=>{dispatch(sortName())}}>이름순 정렬</span>
                        <span onClick={()=>{dispatch(sortPrice_row())}}>낮은가격순 정렬</span>
                        <span onClick={()=>{dispatch(sortPrice_high())}}>높은가격순 정렬</span>
                    </div>
                </div>

                <div className='cart_product'>
                    {
                        cart.map((v,i)=>
                            <div className='c_p_box' key={i}>
                                <input type="checkbox" id='cartCheck' checked  
                                    // onChange={(e)=>{                                        
                                    //     if(e.target.checked===true){
                                    //         sum += Number(e.target.value)
                                    //         setTotal(sum)
                                    //     }else{
                                    //         sum -= Number(e.target.value)
                                    //         setTotal(sum)
                                    //     }
                                    // }}  
                                />
                                <label htmlFor="cartCheck"></label>
                                <img src={v.imgUrl} alt="cart img" />
                                <div>
                                    <p>FILA</p>
                                    <h6>{v.name}</h6>
                                    <p>{v.code}</p>
                                    <p>{v.price}원</p>
                                </div>
                                <div>
                                    <div>
                                        <FontAwesomeIcon icon={faMinus} className='faPlus' style={{cursor:'pointer'}} 
                                            onClick={()=>{dispatch(minusCount(v.id))}}
                                        />
                                        <span>{v.count}</span>
                                        <FontAwesomeIcon icon={faPlus} className='faMinus' style={{cursor:'pointer'}} 
                                            onClick={()=>{dispatch(addCount(v.id))}}                                                
                                        />
                                    </div>
                                    <FontAwesomeIcon icon={faTrash} className='faTrash' style={{cursor:'pointer'}}
                                        onClick={()=>{dispatch(deleteItem(v.id))}}
                                    />
                                </div>
                            </div>
                        )
                    }
                </div>


                <div className='cart_priceBox p-5'>
                    <div>
                        <span>총 상품금액</span>
                        <span>{total().toLocaleString()}원</span>
                    </div>
                    <div>
                        <span>할인금액</span>
                        <span>-0원</span>
                    </div>
                    <div>
                        <span>배송비</span>
                        <span>{deliveryFee.toLocaleString()}원</span>
                    </div>

                    <div>
                        <h4>총 주문금액</h4>
                        <h4>{(total() + deliveryFee).toLocaleString()}원</h4>
                        <button>구매하기</button>
                    </div>
                </div>
            </div>
        )

    }else if(tab === 1){  
        return(
            <div className='cartTab_wrap'>
                <div className='today_arrived'>
                    <h5 className='py-5' style={{marginBottom:0}}>오늘도착 가능</h5>
                    <ul style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
                        <li>· 멤버쉽 전용 서비스입니다.</li>
                        <li>· 오늘도착 서비스는 &#91;오늘도착&#93; 상품끼리만 주문가능합니다.</li>
                        <li>· 오늘도착 주문은 평일 오전 11시 50분까지 &#34;결제완료&#34;된 주문건에 한해 배송됩니다.</li>
                        <li>· 배송가능 지역은 서울 전지역만 가능하며, 주문서 작성 페이지에서 확인 가능합니다.</li>
                        <li>· 주문하시는 상품의 크기 및 수량에 따라 박스당 5,000원의 배송비가 발생됩니다.</li>
                    </ul>
                </div>

                <NullProduct/>
            </div>
        )

    }else{
        return(
            <div className='cartTab_wrap py-5'>
                <NullProduct/>
            </div>
        )
    }
}


const NullProduct = () => {
  return (
    <div className='nullProduct'>
        <div>
            <p>장바구니에 담긴 상품이 없습니다.</p>
            <button>쇼핑 계속하기</button>
        </div>
    </div>
  )
}



export default CartTab