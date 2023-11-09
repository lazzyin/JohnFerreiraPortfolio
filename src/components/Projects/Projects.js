import React from "react"
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { projects } from "../Data/data";
import { backendProjects } from "../Data/dataBackend";
import { mobileProjects } from "../Data/dataMobile";
import { ProjectCard, MobileCard, BackendCard } from "./ProjectCard";
//import {, } from "./ProjectCard";
import "./Projects.css"

export const Projects=()=>{

    

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projetos</h2>
                        <p>Alguns de meus projetos feitos para estudos</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Projetos WEB</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Mobile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Backend</Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                    
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                <ProjectCard key={index} {...project}/>
                                            )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <Row>
                                {
                                            mobileProjects.map((project, index) => {
                                                return(
                                                <MobileCard key={index} {...project}/>
                                            )
                                            })
                                        }
                                </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">Exercicios, estudos e projetos feitos principalmente utilizando linguagens Backend
                                <Row>
                                {
                                            backendProjects.map((project, index) => {
                                                return(
                                                <BackendCard key={index} {...project}/>
                                            )
                                            })
                                        }
                                </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="bg-img-rt" src="" alt="background rigth"/>
        </section>

    )
}