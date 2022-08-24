import { Col } from 'reactstrap';
import iconImg from '../images/common/icon_web.png';

const SectionTitle = (props) => {
    return(
        <Col lg='8' md='10' sm='10' className="offset-lg-2 offset-md-1 offset-sm-1">
            <div className="sections-title">
                <div className="main-title">
                    <img src={iconImg} alt='icon' />
                    <h1><span>{props.title}</span></h1>
                </div>
                <div className="sub-title">
                    <p>{props.description}</p>
                </div>
            </div>
        </Col>
    );
}

export default SectionTitle;