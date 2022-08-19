import FeatureBox from "./FeatureBox";
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';

const Features = () => {
    return(
        <section id='features'>
            <div className='flex-container'>
                <FeatureBox image={featureimage} title='Development Course' />
                <FeatureBox image={featureimage1} title='Development Course' />
                <FeatureBox image={featureimage2} title='Development Course' />
            </div>
        </section>
    );
};

export default Features;