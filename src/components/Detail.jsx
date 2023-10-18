import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {useParams, useNavigate} from 'react-router-dom'

const Detail = (props) => {
    let { moterCoreData, res } = props;
    let navigate = useNavigate();
    let {id} = useParams();
    console.log(id)
    
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
                        </div>

                    </div>
                </Col>
                <Col md={5} className='detail_right'>
                    <div className='d_r_left'>
                        <h6>{moterCoreData[id].type}</h6>
                        <h3>{moterCoreData[id].name}</h3>
                        <p>{moterCoreData[id].price}</p>
                    </div>
                    <div className='d_r_left'></div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Detail