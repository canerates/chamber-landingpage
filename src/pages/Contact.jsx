import { Container, Row, Col } from 'reactstrap';
import logo from '../images/common/logo_web.png';

const Contact = () => {
    return(
        <section id='contact'>
            <Container>
                <Row>
                    <Col lg='12' md='12' sm='12' xs='12'>
                        <div className='contact-logo'>
                            <img src={logo} alt=''/>
                        </div>
                    </Col>
                    <Col lg='12' md='12' sm='12' xs='12'>
                        <ul className='contact-social'>
                            <li className='social-item'>
                                <a href='mailto:cnrates@gmail.com'>
                                    <i className='fa fa-envelope'></i>
                                    <span>cnrates@gmail.com</span>
                                </a>
                            </li>
                            <li className='social-item'>
                                <a href='https://www.linkedin.com/in/canerates/'>
                                    <i className='fa fa-linkedin'></i>
                                    <span>linkedin.com/in/canerates</span>
                                </a>
                            </li>
                            <li className='social-item'>
                                <a href='https://github.com/canerates'>
                                    <i className='fa fa-github'></i>
                                    <span>github.com/canerates</span>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
        
    );
}

export default Contact;