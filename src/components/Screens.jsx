import { Container, Row, Col } from 'reactstrap'
import Slider from "react-slick";
import iphoneMain from '../images/iphone_main.png';
import iphone1 from '../images/1.png';

var settings = {
    centerMode: true,
    centerPadding: '140px',
    infinite: true,
    autoplay: true,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                centerPadding: "0",
                padding: "0",
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                centerPadding: "160px",
                padding: "20px",
                slidesToScroll: 1,
                centerMode: true,
                autoplay: true,
                dots: true
            }
        }
    ]
};

const Screens = () => {
    return(
        <section id='screens'>
            <Container>
                <Row>
                    <Col lg="6" md="8" className="offset-lg-3 offset-md-2 m-b-10">
                        <div className="screens-title">
                            <div className="main-title">
                                <h2>Screen Shot</h2>
                            </div>
                            <div className="sub-title">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs='12'>
                        <div className='swiper-container'>
                            <div className='swiper-wrapper'>
                                <Slider className='screens-slider' {...settings}>
                                    <div className='screens-item'>
                                        <img alt="" className="screens-img" src={iphoneMain} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt="" className="screens-img" src={iphoneMain} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt="" className="screens-img" src={iphoneMain} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt="" className="screens-img" src={iphoneMain} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt="" className="screens-img" src={iphoneMain} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt="" className="screens-img" src={iphoneMain} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt="" className="screens-img" src={iphoneMain} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt="" className="screens-img" src={iphoneMain} />
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Screens;