import ToLeft from "./ToLeft";
import ToRight from "./ToRight";
import Button from 'react-bootstrap/Button';

export default function Leadership({left, leftLink, right, rightLink}){
    return(<div className="row"
    >
    <div className="col-2 d-flex justify-content-center" style={{minHeight:"100vh", backgroundColor:"#6BA8F3", boxShadow: '0 0px 26px 0 rgba(0,0,0,0.2), 0 0px 28px 0 rgba(0,0,0,0.19)'}}><ToLeft leftLink={leftLink} title={left}/></div>
    <div className="col-8 p-5">
        <h1 className="text-center p-2 bg-info m-1">Leadership</h1>
        <img src="img/start.png" style={{scale:'0.5'}}></img>
        <h4>5.1 Leadership and commitment</h4>
        <p>In this section, you need to ensure that the top management has established expectations and they provide enough resources to run the food safety management system effeciently according to the standard. </p>
        <p>You need to demonstrate your leadership under following criteria.</p>
        
        <ul>
            <li>You need to ensure that the Food Safety Policy and FSMS objectives are established in the company and they are compatible with the context and strategic direction of the organization.</li>
            <li>You must ensure the integration of the FSMS requirements into the organization’s business processes</li>
            <li>Ensure that the resources needed for the FSMS are available.</li>
            <li>You need to communicate the importance of an effective FSMS with your work staff and also, you must ensure the conformity to FSMS requirements, applicable statutory and regulatory requirements and mutually agreed customer requirements related to FSMS.</li>
            <li>You need to ensure that the FSMS achieves its intended results</li>
            <li>You shall direct and support your people to contribute to the effectiveness of the FSMS</li>
            <li>Promote continual improvement</li>
            <li>Support other relevant management roles to demonstrate their leadership as it applies to their areas of responsibility.</li>
        </ul>

        <h4>5.2 Policy</h4>
        <h5>5.2.1 Establishing the food safety policy</h5>
        <p>The top management of your organization shall establish, implement and maintain a food safety policy. When preparing the food safety policy, you need to concern about following criteria. </p>
        <p>We have already included an example for a proper food safety policy in the master manual. </p>
        <ul>
            <li>It should be appropriate to the purpose and context of your organization. </li>
            <li>It should provide a framework for setting and reviewing the FSMS objectives.</li>
            <li>The policy should provide details about the organization’s commitment to satisfy food safety requirements, including statutory and regulatory requirements and mutually agreed customer requirements related to food safety.</li>
            <li>It should address internal and external communication</li>
            <li>Need to include the commitment to continual improvement of the FSMS</li>
            <li>Should address the need to ensure competencies related to food safety.</li>
        </ul>
        <h5>5.2.2  Communicating the food safety policy</h5>
        <ul>
            <li>You need to display the food safety policy in relevant areas of the company and need to keep it as a documented information.</li>
            <li>You need to communicate the food safety policy with all levels within the organization and also all the employees shall understand it.</li>
            <li>Apart from that you must communicate the food safety policy with appropriate interested parties that you have defined previously. </li>
        </ul>
        
        <h4>5.3 Organizational roles, responsibilities and authorities</h4>
        5.3.1 The top management of your organization shall assign responsibilities and authorities for relevant roles and make sure that they are communicated and understood well among all the employees within the organization.
        <p>Assigning responsibilities and authorities for relevant roles in order to,</p>
        <ul>
            <li>Ensure that your FSMS comply with the standard (ISO 22000:2018) requirements.</li>
            <li>Report the performance of FSMS to top management.</li>
            <li>Appoint food safety team and food safety team leader.</li>
            <li>Designate people with defined responsibility and authority to initiate and document actions.</li>
        </ul>

        5.3.2 Responsibilities of food safety team leader,
        <ul>
            <li>Ensure that FSMS is established, implemented, maintained and updated</li>
            <li>Manage and organize the work of food safety team</li>
            <li>Ensure and facilitate with relevant training and competencies for the food safety team</li>
            <li>Report the top management about the effectiveness and suitability of the FSMS</li>
        </ul>

        5.3.3 All the employees have the responsibility to report problems relevant to FSMS to identified person(s).
        <div className="col-12 d-flex justify-content-center align-items-center" ><Button onClick={()=>{
            window.location.assign('/guide');
        }}>Back</Button></div>
    </div>
    <div className="col-2 d-flex justify-content-center" style={{backgroundColor:"#6BA8F3", boxShadow: '0 0px 26px 0 rgba(0,0,0,0.2), 0 0px 28px 0 rgba(0,0,0,0.19)'}}><ToRight leftLink={rightLink} title={right}/></div>
    </div>);
    
}