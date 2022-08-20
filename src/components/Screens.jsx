import { Container, Row, Col } from 'reactstrap'
import Slider from "react-slick";
import iphoneMain from '../images/iphone_main.png';

var settings = {
    centerMode: true,
    centerPadding: '140px',
    infinite: true,
    autoplay: false,
    arrows: false,
    swipeToSlide: true,
    dots: true,
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
                centerPadding: "120px",
                dots: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "200px",
                autoplay: false,
                dots: true
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                centerPadding: "40px",
                slidesToScroll: 1,
                autoplay: false,
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
                    <Col lg='8' md='10' sm='10' className="offset-lg-2 offset-md-1 offset-sm-1">
                        <div className="screens-title">
                            <div className="main-title">
                                <h1>Screens</h1>
                            </div>
                            <div className="sub-title">
                                <p>Chamber AR has three main sections. Home, Design AR, Scan Texture. Home section consists of three main tabs: Home Tab, Furniture Tab, Texture Tab. Design AR section provides AR View. Scan Texture section let users scan real-world texture to apply it on AR design.</p>
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