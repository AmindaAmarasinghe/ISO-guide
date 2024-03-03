import { Button } from "react-bootstrap";

export default function ToRight({leftLink, title}){
    return(<>
        <div className="row d-block">
            <div className="col-12 d-flex" style={{marginTop:'25vh', justifyContent:'center'}}><Button onClick={()=>{window.location.assign(leftLink)}} >Next</Button></div>
            <div className="col-12 text-center"><h3>{title}</h3></div>
        </div>
    </>);
}