import ToLeft from "./ToLeft";
import ToRight from "./ToRight";
import Button from 'react-bootstrap/Button';

export default function Scope({left, leftLink, right, rightLink}){
    return(<div className="row"
    >
    <div className="col-2 d-flex justify-content-center" style={{minHeight:"100vh", backgroundColor:"#6BA8F3", boxShadow: '0 0px 26px 0 rgba(0,0,0,0.2), 0 0px 28px 0 rgba(0,0,0,0.19)'}}><ToLeft leftLink={leftLink} title={left}/></div>
    <div className="col-8 p-5">
        <h1 className="text-center p-2 bg-info m-1">Scope</h1>
        <h3>In this section, we will show you the requirements of a food safety management system and the things you need to follow to get the ISO 22000:2018 certificate.
        </h3>
        <ul>
            <li>First of all, you need to plan, implement, operate, and maintain a food safety management system relevant to your products and services and make sure to update it continuously with the changes you make in the business.</li> 
            <li>You must comply with the rules and regulations in your country which are applicable to your business/products. </li>

            <li>Modern day customers are very much concern about quality and safety of what they consume. Therefore, you have to carefully evaluate and assess the customer safety requirements and also, you need to make them aware about those requirements. </li>
            <li>You must clearly identify the external and internal parties of the organization and you need to communicate food safety issues with the interested parties.</li>
            <li>You must generate a ‘Food Safety Policy’ relevant to your organiztion and you need to ensure that the organization comply with it.</li>
        </ul>
        <h3 className="text-center">This is just a brief summary. We will consult on how to fulfill the above, one by one. So,</h3>
        <h3 className="text-danger text-center">Don't worry. Just proceed with us!
        </h3>
        <div className="col-12 d-flex justify-content-center align-items-center" ><Button onClick={()=>{
            window.location.assign('/guide');
        }}>Back</Button></div>
    </div>
    <div className="col-2 d-flex justify-content-center" style={{backgroundColor:"#6BA8F3", boxShadow: '0 0px 26px 0 rgba(0,0,0,0.2), 0 0px 28px 0 rgba(0,0,0,0.19)'}}><ToRight leftLink={rightLink} title={right}/></div>
    </div>);
    
}