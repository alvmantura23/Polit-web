import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <footer className="bg-white text-dark p-4">
            <Container>
                <Row className="text-center text-md-start">
                <Col md={4}>
                    <h5>PolitWeb</h5>
                    <p>Información sobre política y votaciones.</p>
                </Col>

                <Col md={4}>
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-dark">Home</a></li>
                        <li><a href="#" className="text-dark">Political Organizations</a></li>
                        <li><a href="#" className="text-dark">Surveys</a></li>
                        <li><a href="#" className="text-dark">How to vote?</a></li>
                    </ul>
                </Col>

                <Col md={4}>
                    <h5>Contact</h5>
                    <p>Email: contact@politweb.com</p>
                </Col>
                </Row>

            <hr />

            <p className="text-center">
                © {new Date().getFullYear()} PolitWeb - All rights reserved
            </p>
            </Container>
        </footer>
    );
}

export default Footer;