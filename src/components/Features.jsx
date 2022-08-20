<<<<<<< HEAD
import FeatureBox from "./FeatureBox";
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';
=======
import { Container, Row, Col } from 'reactstrap';
import FeatureBox from "./FeatureBox";
import featureimage from '../images/feature_1.png';
>>>>>>> 07e9bf252847a0b85a68ce570bebe31fb80b01c6

const Features = () => {
    return(
        <section id='features'>
<<<<<<< HEAD
            <div className='flex-container'>
                <FeatureBox image={featureimage} title='Development Course' />
                <FeatureBox image={featureimage1} title='Development Course' />
                <FeatureBox image={featureimage2} title='Development Course' />
            </div>
=======
            <Container>
                <Row className='row-center'>
                    <Col sm='12' md='12' lg='4'>
                        <FeatureBox image={featureimage} title='Development Course' />
                    </Col>
                    <Col sm='12' md='12' lg='4'>
                        <FeatureBox image={featureimage} title='Development Course' />
                    </Col>
                    <Col sm='12' md='12' lg='4'>
                        <FeatureBox image={featureimage} title='Development Course' />
                    </Col>
                </Row> 
            </Container>
>>>>>>> 07e9bf252847a0b85a68ce570bebe31fb80b01c6
        </section>
    );
};

export default Features;