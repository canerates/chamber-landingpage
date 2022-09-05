import { useState } from 'react';
import { Container, Row, Modal } from 'reactstrap';
import ReactPlayer from 'react-player';
import SectionTitle from '../common/SectionTitle';
import FeatureBox from "../components/FeatureBox";
import featureIcon1 from '../images/features/feature_icon1.png';
import featureIcon2 from '../images/features/feature_icon2.png';
import featureIcon3 from '../images/features/feature_icon3.png';
import featureIcon4 from '../images/features/feature_icon4.png';
import featureIcon5 from '../images/features/feature_icon5.png';
import featureIcon6 from '../images/features/feature_icon6.png';
import featureVideo1 from '../videos/placeholder.MP4';
import featureVideo2 from '../videos/placeholder.MP4';
import featureVideo3 from '../videos/placeholder.MP4';
import featureVideo4 from '../videos/placeholder.MP4';
import featureVideo5 from '../videos/placeholder.MP4';
import featureVideo6 from '../videos/lighting.MP4';


const pageData = {
    title: 'Features',
    description: 'Measure. Scan. Design.',
    features: [
        {
            icon: featureIcon1,
            title: 'Measure',
            video: featureVideo1,
            details: 'Measure the floor, walls and any real-world length by creating AR shapes to show length information in centimeters.'
        },
        {
            icon: featureIcon2,
            title: 'AR Layout',
            video: featureVideo2,
            details: 'Generate 3D virtual room layout model in real-time by defining the corner positions of the real-world room.'
        },
        {
            icon: featureIcon3,
            title: 'PBR Texture',
            video: featureVideo3,
            details: 'Use PBR textures to apply to generated virtual floor and walls plane to give realistic looking for the 3D room layout.'
        },
        {
            icon: featureIcon4,
            title: 'Scan Texture',
            video: featureVideo4,
            details: 'Scan and modify the real-world textures to generate custom textures for the virtual floor and walls planes in AR room.'
        },
        {
            icon: featureIcon5,
            title: '3D Models',
            video: featureVideo5,
            details: 'Place and manipulate the pre-defined 3d USDZ furniture models to augmented room layout to design in real-time.'
        },
        {
            icon: featureIcon6,
            title: 'Lighting',
            video: featureVideo6,
            details: 'Use lighting options such as directional, point, spot lighting types to give realistic looking to the 3D AR room layout.'
        }
    ]
};

const Features = () => {
    const [isOpen, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const openModal = (index) => {
        setOpen(true);
        setSelectedIndex(index);
    }

    const closeModal = () => {
        setOpen(false);
    }

    return(
        <section id='features'>
            <Container>
                <Row>
                    <SectionTitle title={pageData.title} description={pageData.description} />
                </Row>
                <Row>
                    {pageData.features.map( (item, index) => 
                        <FeatureBox handler={openModal} index={index} icon={item.icon} title={item.title} details={item.details}/>
                    )}
                </Row>
                {/* <ModalVideo channel='custom' url={pageData.features[selectedIndex].video} ratio={modalRatio} autoplay={1} isOpen={isOpen} onClose={() => closeModal()} /> */}
                <Modal isOpen={isOpen} toggle={closeModal} backdrop='static' keyboard={false}>
                    <button onClick={closeModal} className='modal-video-close-btn'></button>
                    <ReactPlayer
                        url={pageData.features[selectedIndex].video}
                        width='100%'
                        height='calc(100vh - 100px)'
                        controls={true}
                        playing={isOpen}
                        volume={1}
                        muted={true}
                    />
                </Modal>
            </Container>
        </section>
        
    );
};

export default Features;