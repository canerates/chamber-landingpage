import { Container, Row, Col } from 'reactstrap'
import iphoneMain from '../images/iphone_main.png';

const Home = () => {
    return(
        <section id='home'>
            <Container>
            <Col>
                
                <div className='content-left'>
                    <img src={iphoneMain} alt="" />
                </div>
                
                
            </Col>
            <Col>
                
                <div className='content-right'>
                    <div className='home-description'>
                        <h1><span>Design your Room</span> Chamber AR</h1>
                        <p className='details'>Create your 3D room layout with textured floor and walls in real-time. Place your 3D furniture models and design your room. Give realistic looking with user-defined lighting options.  </p>
                        <a href='#' className='cv-btn'>See more</a>
                    </div>
                </div>
                
            </Col>
            </Container>
            
        </section>
    );
};

export default Home;