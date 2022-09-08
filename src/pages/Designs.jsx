import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick';
import SectionTitle from "../common/SectionTitle";
import Contact from './Contact';
import layout1 from '../assets/images/designs/layout1.png';
import layout2 from '../assets/images/designs/layout2.png';
import layout3 from '../assets/images/designs/layout3.png';
import layout4 from '../assets/images/designs/layout4.png';
import layout5 from '../assets/images/designs/layout5.png';

const pageData = {
    title: 'Designs',
    description: 'AR Room Layout Examples'
}

var settings = {
    centerMode: true,
    centerPadding: '220px',
    infinite: true,
    autoplay: true,
    arrows: false,
    swipeToSlide: true,
    dots: true,
    slidesToShow: 1,
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
                centerPadding: '0'
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '50px'
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '140px'
            }
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '150px'
            }
        }

    ]
};

const Designs = () => {
    return (
        <section id='designs'>
            <Container>
            <Row>
                <SectionTitle title={pageData.title} description={pageData.description} />
            </Row>
            <Row>
                <Col xs='12'>
                    <div className='designs-swiper-container'>
                        <div className='designs-swiper-wrapper'>
                            <Slider className='designs-slider' {...settings}>
                                <div className='designs-item'>
                                    <img alt='' className='designs-img' src={layout1} />
                                </div>
                                <div className='designs-item'>
                                    <img alt='' className='designs-img' src={layout2} />
                                </div>
                                <div className='designs-item'>
                                    <img alt='' className='designs-img' src={layout3} />
                                </div>
                                <div className='designs-item'>
                                    <img alt='' className='designs-img' src={layout4} />
                                </div>
                                <div className='designs-item'>
                                    <img alt='' className='designs-img' src={layout5} />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </Col>
            </Row>

            <Contact />

            </Container>
        </section>
    );
}

export default Designs;