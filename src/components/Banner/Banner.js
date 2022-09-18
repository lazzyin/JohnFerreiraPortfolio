import React,{useEffect,useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import floatLaptop from "../../assets/float-laptop.png"
import './Banner.css'

export const Banner=()=>{

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Analista de software","SoftwareDev John= new SoftwareDev", "<WebDev/>"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta) 
        return () => {
            clearInterval(ticker)
        }
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className = "banner" id = "home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bem vindo ao meu portfolio</span>
                        <h1>{'Ola eu sou o John Ferreira '}<span className="wrap">{text}</span></h1>
                        <p>Formado como analista de sistemas pela UNIFACIG em 2021. Desde a minha formação venho estudado e aprofundado meus conhecimentos na stack JavaScript, para assim poder atuar como desenvolvedor Web</p>
                        <button className="bannerbtn" ><span>Baixar CV</span></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className="imgBanner" src={floatLaptop} alt="Banner Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}