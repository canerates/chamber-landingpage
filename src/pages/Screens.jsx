import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick';
import SectionTitle from '../common/SectionTitle';
import iphoneHomeTab from '../images/screens/iphone_hometab.png';
import iphoneTextureTab from '../images/screens/iphone_texturetab.png';
import iphoneFurnitureTab from '../images/screens/iphone_furnituretab.png';
import iphoneDesignMeasure from '../images/screens/iphone_design_measure.png';
import iphoneDesignFurniture from '../images/screens/iphone_design_furniture.png';
import iphoneDesignSettings from '../images/screens/iphone_design_settings.png';
import iphoneDesignARQuicklook from '../images/screens/iphone_arquicklook.png';

const pageData = {
    title: 'Screens',
    description: 'Chamber AR has three main sections. Home, Design AR, Scan Texture. Home section consists of three main tabs: Home Tab, Furniture Tab, Texture Tab. Design AR section provides AR View. Scan Texture section let users scan real-world texture to apply it on AR design.'
};

var settings = {
    centerMode: true,
    centerPadding: '140px',
    infinite: true,
    autoplay: true,
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
                slidesToScroll: 1,
                centerPadding: '0',
                padding: '0'
                
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '120px'
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '200px'
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerPadding: '40px'
            }
        }

    ]
};

const Screens = () => {
    return(
        <section id='screens'>
            <Container>
                <Row>
                    <SectionTitle title={pageData.title} description={pageData.description} />
                </Row>
                <Row>
                    <Col xs='12'>
                        <div className='swiper-container'>
                            <div className='swiper-wrapper'>
                                <Slider className='screens-slider' {...settings}>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={iphoneHomeTab} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={iphoneFurnitureTab} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={iphoneTextureTab} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={iphoneDesignMeasure} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={iphoneDesignSettings} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={iphoneDesignFurniture} />
                                    </div>
                                    <div className='screens-item'>
                                        <img alt='' className='screens-img' src={iphoneDesignARQuicklook} />
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