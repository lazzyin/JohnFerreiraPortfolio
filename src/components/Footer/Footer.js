import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "../../assets/jkdev-proj.png"

export const Footer = () => {
    return (
        <div className="footer" id="footer">
        <Container>
            <Row className="align-items-center">
                <Col sm={6}>
                    <img src={logo} alt="logo"/>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                    <a href="https://github.com/lazzyin"><i><FaGithub/></i></a>
                          <a href="mailto:johnferreira141@gmail.com"><i><SiGmail/></i></a>
                          <a href="https://wa.me/5531982661317
                          "><i><FaWhatsapp /></i></a>
                    </div>
                    <p>Criado por <span>John Ferreira</span></p>
                </Col>
            </Row>
        </Container>
    </div>)
    
}