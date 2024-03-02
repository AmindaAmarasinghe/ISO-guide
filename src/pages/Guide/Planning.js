import ToLeft from "./ToLeft";
import ToRight from "./ToRight";
import Button from 'react-bootstrap/Button';

export default function Planning({left, leftLink, right, rightLink}){
    return(<div className="row"
    >
    <div className="col-2 d-flex justify-content-center" style={{minHeight:"100vh", backgroundColor:"#6BA8F3", boxShadow: '0 0px 26px 0 rgba(0,0,0,0.2), 0 0px 28px 0 rgba(0,0,0,0.19)'}}><ToLeft leftLink={leftLink} title={left}/></div>
    <div className="col-8 p-5">
        <h1 className="text-center p-2 bg-info m-1">Planning</h1>
        <img src="img/start.png" style={{scale:'0.5'}}></img>
        <h4>6.1 Actions to address risks and opportunities</h4>
        <p>6.1.1 When planning FSMS, you need to consider the internal and external issues (4.1), needs and expectations of interested parties (4.2) and scope of the FSMS (4.3) to determine the <h4>risks and opportunities.</h4> </p>
        <p>Then you need to address those risks and opportunities in order to,</p>
        <ul>
            <li>Assure that the FSMS can achieve its intended results</li>
            <li>Enhance desirable effects</li>
            <li>Prevent, or reduce, undesired effects</li>
            <li>Achieve continual improvement</li>
        </ul>

        <h4>6.1.2 Your organization shall plan the following activities</h4>
        <ul>
            <li>Actions to address risks and opportunities</li>
            <li>Methods to</li>
            <li>The policy should provide details about the organization’s commitment to satisfy food safety requirements, including statutory and regulatory requirements and mutually agreed customer requirements related to food safety.</li>
            <li>It should address internal and external communication</li>
            <li>Need to include the commitment to continual improvement of the FSMS</li>
            <li>Should address the need to ensure competencies related to food safety.</li>
        </ul>
        <h5>6.1.3 The actions taken by the organization to address the risks and opportunities shall be proportionate to: </h5>
        <ul>
            <li>The impact on food safety requirements</li>
            <li>You need to communicate the food safety policy with all levels within the organization and also all the employees shall understand it.</li>
            <li>Apart from that you must communicate the food safety policy with appropriate interested parties that you have defined previously. </li>
        </ul>
        
        <h4>5.3 Organizational roles, responsibilities and authorities</h4>
        5.3.1 The top management of your organization shall assign responsibilities and authorities for relevant roles and make sure that they are communicated and understood well among all the employees within the organization.
        <p>Assigning responsibilities and authorities for relevant roles in order to,</p>
        <ul>
            <li>Ensure that your FSMS comply with the standard (ISO 22000:2018) requirements.</li>
            <li>The conformity of food products and services to customers</li>
            <li>Requirements to interested parties in the food chain. </li>
        </ul>
        <h3>6.2 Objectives of the food safety management system and planning to achieve them</h3>
        <h4>6.2.1 The organization shall establish FSMS objectives at relevant functions and levels. These objectives shall:</h4>
        <ul>
            <li>Consistent with the food safety policy</li>
            <li>Be measurable</li>
            <li>Take into account applicable food safety requirements, including saturatory, regulatory and customer requirements.</li>
            <li>Be monitored and verified.</li>
            <li>Be communicated</li>
            <li>Be maintained and updated as appropriate.</li>
        </ul>
        You need to maintain documented information on FSMS objectives.
        <h4>6.2.2 You need to determine the following when planning on how to achieve FSMS objectives</h4>
        <ul>
            <li>What will be done</li>
            <li>What resources will be required</li>
            <li>Who will be responsible</li>
            <li>When it will be completed</li>
            <li>How the results will be evaluated</li>
        </ul>
        <h3>6.3 Planning of changes</h3>
        <p>When the organization determines the need for changes to the FSMS, including personal changes, those changes shall be carried out and communicated in a planned manner. </p>
        <h4>6.2.1 The organization shall establish FSMS objectives at relevant functions and levels. These objectives shall:</h4>
        <p>In that case you nee to consier:</p>
        <ul>
            <li>The purpose of changes and their potential consequences.</li>
            <li>The continued integrity of the FSMS</li>
            <li>The availability of resources to effectively implement the changes</li>
            <li>The allocation or re-allocation of responsibilities and authorities </li>
        </ul>
        <div className="col-12 d-flex justify-content-center align-items-center" ><Button onClick={()=>{
            window.location.assign('/guide');
        }}>Back</Button></div>
    </div>
    <div className="col-2 d-flex justify-content-center" style={{backgroundColor:"#6BA8F3", boxShadow: '0 0px 26px 0 rgba(0,0,0,0.2), 0 0px 28px 0 rgba(0,0,0,0.19)'}}><ToRight leftLink={rightLink} title={right}/></div>
    </div>);
    
}