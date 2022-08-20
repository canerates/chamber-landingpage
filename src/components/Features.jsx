import { Container, Row, Col } from 'reactstrap';
import FeatureBox from "./FeatureBox";
import featureimage from '../images/feature_1.png';

const Features = () => {
    return(
        <section id='features'>
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
        </section>
    );
};

export default Features;