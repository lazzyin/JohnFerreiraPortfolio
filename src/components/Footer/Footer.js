import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaLinkedin,FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="footer">
        <Container>
            <Row className="align-items-center">
                <Col sm={6}>
                    <img src="" alt="logo"/>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="github.com/lazzyin"><i><FaGithub/></i></a>
                        <a href=""><i><FaLinkedin/></i></a>
                        <a href=""><i><FaInstagram/></i></a>
                    </div>
                    <p>Criado por <span>John Ferreira</span></p>
                </Col>
            </Row>
        </Container>
    </div>)
    
}