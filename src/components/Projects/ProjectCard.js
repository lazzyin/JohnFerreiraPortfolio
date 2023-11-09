import { Col } from "react-bootstrap"


export const ProjectCard = ({ title, description,imgUrl,git,inLive}) => {
    return (
        <Col sm={6} md={4}>
           
        <div className="proj-imgbx">
            <img className="imgDesktop" src={imgUrl} alt={title} />
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
export const BackendCard = ({ title, desc,img,git}) => {
    return (
        <Col sm={6} md={4}>
           
        <div className="proj-imgbx">
            <img className="imgDesktop" src={img} alt={title} />
            <div className="proj-txt">
                <h4>{title}</h4>
                    <span>{desc}</span>
                    <a href={git}><button className="btn btn-primary">Github</button></a>
                    
            </div>
        </div>            
    </Col >
    )
}
export const MobileCard = ({ title, desc,img,git,app}) => {
    return (
        <Col sm={6} md={4}>
           
        <div className="proj-imgbx">
            <img className="imgMobile" src={img} alt={title} />
            <div className="proj-txt">
                <h4>{title}</h4>
                    <span>{desc}</span>
                    <a href={git}><button className="btn btn-primary">Github</button></a>
                    <a href={app}><button className="btn btn-secondary">Ver</button></a>

            </div>
        </div>            
    </Col >
    )
}
