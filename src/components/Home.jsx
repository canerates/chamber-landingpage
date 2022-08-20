<<<<<<< HEAD
=======
import { Container, Row, Col, Button } from 'reactstrap';
>>>>>>> 07e9bf252847a0b85a68ce570bebe31fb80b01c6
import iphoneMain from '../images/iphone_main.png';

const Home = () => {
    return(
        <section id='home'>
<<<<<<< HEAD
            <div className='flex-container'>
                <div className='content-left'>
                    <img src={iphoneMain} alt="" />
                </div>
                <div className='content-right'>
                    <div className='home-description'>
                        <h1><span>Design your Room</span> Chamber AR</h1>
                        <p className='details'>Create your 3D room layout with textured floor and walls in real-time. Place your 3D furniture models and design your room. Give realistic looking with user-defined lighting options.  </p>
                        <a href='#' className='cv-btn'>See more</a>
                    </div>
                </div>
            </div>
=======
            <Container>
                <Row className='row-center'>
                    <Col lg='5' md='12' sm='12' className='col-pb-30'>
                        <img src={iphoneMain} alt="" />
                    </Col>
                    <Col lg='7' md='12' sm='12' className='home-description col-pb-30'>
                        <Row>
                            <h1><span>Design your Room</span></h1>
                        </Row>
                        <Row>
                            <h1>Chamber AR</h1>
                        </Row>
                        <Row>
                            <p className='details'>Create your 3D room layout with textured floor and walls in real-time. Place your 3D furniture models and design your room. Give realistic looking with user-defined lighting options.  </p>
                        </Row>
                        <div>
                            <Button className='cv-btn'>See more</Button>
                        </div>
                    </Col>
                </Row>
                
            </Container>
>>>>>>> 07e9bf252847a0b85a68ce570bebe31fb80b01c6
        </section>
    );
};

export default Home;