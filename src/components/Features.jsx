import { Container, Row } from 'reactstrap';
import SectionTitle from './SectionTitle';
import FeatureBox from "./FeatureBox";

const Features = () => {
    const title = 'Features';
    const text = 'Measure. Scan. Design.';
    const boxTitle = 'Feature 1';
    const boxDetails = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';
    return(
        <section id='features'>
            <Container>
                <Row className='row-center'>
                    <SectionTitle title={title} text={text} />
                    <FeatureBox title={boxTitle} details={boxDetails}/>
                    <FeatureBox title={boxTitle} details={boxDetails}/>
                    <FeatureBox title={boxTitle} details={boxDetails}/>
                    <FeatureBox title={boxTitle} details={boxDetails}/>
                    <FeatureBox title={boxTitle} details={boxDetails}/>
                    <FeatureBox title={boxTitle} details={boxDetails}/>
                </Row>
            </Container>
        </section>
    );
};

export default Features;