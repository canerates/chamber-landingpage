import { Container, Row } from 'reactstrap';
import SectionTitle from '../common/SectionTitle';
import FeatureBox from "../components/FeatureBox";
import featureIcon1 from '../assets/images/features/feature_icon1.png';
import featureIcon2 from '../assets/images/features/feature_icon2.png';
import featureIcon3 from '../assets/images/features/feature_icon3.png';
import featureIcon4 from '../assets/images/features/feature_icon4.png';
import featureIcon5 from '../assets/images/features/feature_icon5.png';
import featureIcon6 from '../assets/images/features/feature_icon6.png';


const pageData = {
    title: 'Features',
    description: 'Measure. Scan. Design.',
    features: [
        {
            icon: featureIcon1,
            title: 'Measure',
            details: 'Measure the floor, walls and any real-world length by creating AR shapes to show length information in centimeters.'
        },
        {
            icon: featureIcon2,
            title: 'AR Layout',
            details: 'Generate 3D virtual room layout model in real-time by defining the corner positions of the real-world room.'
        },
        {
            icon: featureIcon3,
            title: 'PBR Texture',
            details: 'Use PBR textures to apply to generated virtual floor and walls plane to give realistic looking for the 3D room layout.'
        },
        {
            icon: featureIcon4,
            title: 'Scan Texture',
            details: 'Scan and modify the real-world textures to generate custom textures for the virtual floor and walls planes in AR room.'
        },
        {
            icon: featureIcon5,
            title: '3D Models',
            details: 'Place and manipulate the pre-defined 3d USDZ furniture models to augmented room layout to design in real-time.'
        },
        {
            icon: featureIcon6,
            title: 'Lighting',
            details: 'Use lighting options such as directional, point, spot lighting types to give realistic looking to the 3D AR room layout.'
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