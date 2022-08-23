import { Row, Col, Button } from 'reactstrap';

const TechnologyBox = (props) => {
    return(
        <Col lg='6' md='12' sm='12' xs='12' className='tech-box-container' key={`tech-${props.index}`}>
            <div className='tech-box'>
                <Row className='align-items-center'>
                    <Col lg='4' md='3' sm='4' xs='6' className='offset-3 offset-sm-0 offset-md-0 offset-lg-0' >
                        <div className='tech-box-img-block'>
                            <img alt='' className='tech-box-img' src={props.icon} />
                        </div>
                    </Col>
                    <Col lg='8' md='9' sm='8' xs='12'>
                        <div className='tech-box-description'>
                            <h4 className='tech-box-text'>{props.title}</h4>
                            <p>{props.details}</p>
                            <Button size='sm' href={props.href} className='tech-box-button'>See more</Button>
                        </div>
                    </Col>
                </Row>
                    
            </div>
        </Col>
    );
};

export default TechnologyBox;