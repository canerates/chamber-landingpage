import { Button, Col } from 'reactstrap';

const FeatureBox = (props) => {
    return(
        <Col lg='4' md='6' className='feature-box-container' key={`features-${props.index}`}>
            <div onClick={() => props.handler(props.index)} className='feature-box'>
                <div className='feature-box-img-block'>
                    <img alt='' className='feature-box-img' src={props.icon} />
                </div>
                <div className='feature-box-description'>
                    <h4 className='feature-box-text'>{props.title}</h4>
                    <p>{props.details}</p>
                    <Button size='sm' className='feature-box-button'>Check Details</Button>
                </div>
            </div>
        </Col>
    );
};

export default FeatureBox;