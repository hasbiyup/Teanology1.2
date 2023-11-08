import { Container, Row, Col } from "react-bootstrap";
import './Catalogue.css';

const HeadCatalogue = () => {
    return(
        <Container fluid className="mood__box-neutral">
            <Row>
                <Col md={12}>
                    <h2 className="neutral">Katalog Teanology</h2>
                    <p className='sub-title'>Here are your personalised menu recommendation based on your emotion!</p>
                    <a href='camera'>
                        <p className='link-neutral'>Not feeling Happy? Scan again!</p>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default HeadCatalogue;