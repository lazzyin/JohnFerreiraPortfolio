import React from "react";
import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";

import "./Skills.css"
import HtmlCssJs from "../../assets/html css js.png";
import SQL from "../../assets/SQL.png";
import FrameworkReact from "../../assets/React.png";
import Nodejs from "../../assets/Nodejs.png";
import db from "../../assets/database.png";

export const Skills = () => {
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
     

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Habilidades e competencias</h2>
                            <p>Algumas de minhas habilidades e tecnologias que ja usei em projetos</p>
                            <Carousel responsive={responsive} className="skill-slider">
                                <CarouselItem className="item">
                                    <img src={HtmlCssJs} alt="Habilidade" />
                                    <h5>HTML, CSS E JavaScript</h5>
                                </CarouselItem>
                                <CarouselItem className="item">
                                    <img src={FrameworkReact} alt="Habilidade" />
                                    <h5>React.js</h5>
                                </CarouselItem>
                                <CarouselItem className="item">
                                    <img src={Nodejs} alt="Habilidade" />
                                    <h5>Node.js/Express.js</h5>
                                </CarouselItem>
                                <CarouselItem className="item">
                                    <img src={SQL} alt="Habilidade" />
                                    <h5>SQL</h5>
                                </CarouselItem>
                                <CarouselItem className="item">
                                    <img src={db} alt="Habilidade" />
                                    <h5>Arquitetura de banco de dados</h5>
                                </CarouselItem>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="bg-img-lf" src="" alt=""/>
        </section>
    )
}