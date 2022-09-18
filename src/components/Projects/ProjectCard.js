import { Col } from "react-bootstrap"


export const ProjectCard = ({ title, description,imgUrl,git,inLive}) => {
    return (
        <Col sm={6} md={4}>
           
        <div className="proj-imgbx">
            <img src={imgUrl} alt={title} />
            <div className="proj-txt">
                <h4>{title}</h4>
                    <span>{description}</span>
                    <a href={git}><button className="btn btn-primary">Github</button></a>
                    <a href={inLive}><button className="btn btn-secondary">Ver</button></a>

            </div>
        </div>            
    </Col >
    )
}
