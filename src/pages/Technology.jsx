import { Container, Row, Col } from 'reactstrap'
import SectionTitle from '../common/SectionTitle';

const pageData = {
    title: 'Technology',
    description: 'Technologies and Frameworks for Chamber AR'
}

const Technology = () => {
    return(
        <section id='technology'>
            <Container>
                <Row>
                    <SectionTitle title={pageData.title} description={pageData.description} />
                </Row>
            </Container>
        </section>
    );
}

export default Technology;