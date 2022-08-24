import { Container, Row } from 'reactstrap';
import SectionTitle from '../common/SectionTitle';
import FeatureBox from "../components/FeatureBox";
import featureIcon1 from '../images/features/feature_icon1.png';
import featureIcon2 from '../images/features/feature_icon2.png';
import featureIcon3 from '../images/features/feature_icon3.png';
import featureIcon4 from '../images/features/feature_icon4.png';
import featureIcon5 from '../images/features/feature_icon5.png';
import featureIcon6 from '../images/features/feature_icon6.png';

const pageData = {
    title: 'Features',
    description: 'Measure. Scan. Design',
    features: [
        {
            icon: featureIcon1,
            title: 'Measure',
            details: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
        },
        {
            icon: featureIcon2,
            title: 'AR Layout',
            details: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
        },
        {
            icon: featureIcon3,
            title: 'PBR Texture',
            details: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
        },
        {
            icon: featureIcon4,
            title: 'Scan Texture',
            details: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
        },
        {
            icon: featureIcon5,
            title: '3D Models',
            details: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
        },
        {
            icon: featureIcon6,
            title: 'Lighting',
            details: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
        }
    ]
};

const Features = () => {
    return(
        <section id='features'>
            <Container>
                <Row>
                    <SectionTitle title={pageData.title} description={pageData.description} />
                </Row>
                <Row>
                    {pageData.features.map( (item, index) => 
                        <FeatureBox index={index} icon={item.icon} title={item.title} details={item.details}/>
                    )}
                </Row>
            </Container>
        </section>
    );
};

export default Features;