import ToLeft from "./ToLeft";
import ToRight from "./ToRight";
import Button from 'react-bootstrap/Button';

export default function Context({left, leftLink, right, rightLink}){
    return(<div className="row"
    >
    <div className="col-2 d-flex justify-content-center align-items-center" style={{backgroundColor:"#6BA8F3", boxShadow: '0 0px 26px 0 rgba(0,0,0,0.2), 0 0px 28px 0 rgba(0,0,0,0.19)'}}><ToLeft leftLink={leftLink} title={left}/></div>
    <div className="col-8 p-5">
        <h1 className="text-center p-2 bg-info m-1">Context of the organization</h1>
        <img src="img/start.png" style={{scale:'0.5'}}></img>
        <h4>4.1 Understanding the organization and its context</h4>
        <p>In order to implement a food safety management system, you must understand some important factors relevant to your organization. </p>
            In this section, we discuss about,
            <h3><i><b>internal and external issues</b></i></h3> applicable to your organization. 
        <p>Remember, We need to prepare a Food Safety Manual?. So you need to address these issues, review each and every issue and also you will update these information time to time in the manual document.</p>
        <p>Dont worry……We will show you a sample manual at the end ot this tour. So you can study by yourself. </p>
        <p>These internal and external issues can be:</p>
        <ul>
            <li>Legal factors</li>
            <li>Technological</li>
            <li>Competitive,</li>
            <li>Market factors,</li>
            <li>Social, cultural and economic environments,</li>
            <li>Cyber security,</li>
            <li>Food fraud/adulteration</li>
            <li>Food defence and intetntional contamination</li>
            <li>Knowledge and performance of the organization,</li>
            <li>Other factors.</li>
        </ul>
        <p>You need to categorize the internal and external issues not only according to the above factors but also you can consider some other important factors as well. </p>
        <h3>Its up to you!</h3>

        <h4>4.2 Understanding the needs and expectations of interested parties</h4>
        <p>In a food safety management system, the ultimate goal should be to provide safe food consistently which comply with regulations and customer expectations. In order to achieve this, you must understand who are the interested parties of your organization.</p>
        <p>In your food safety manual you should address all the </p>
        <p><h2><b>internal and external parties</b></h2> relevant to your organization. You need to review and update all the parties time to time. In the manual.</p>
        <h4>4.3 Determining the scope of the food safety management system.</h4>
        <p>You need to address the scope of your organization in the food safety manual. </p>
        <p>When determining the scope, you must clearly define the,</p>
        <ul>
            <li>Products</li>
            <li>Services</li>
            <li>Processes</li>
            <li>Activities</li>
            <li>Production site(s)</li>
        </ul>
        <p>of your organization which have an influence on the food safety of end products. </p>
        <h4>4.4 Food Safety Management System</h4>
        <p>After addressing the issues, interested parties and the scope of the organization, you need to ensure that your organization,
            <i>establishes, implements, maintains, updates and continually improves the food safety management system. </i>
            You shall address the <h5>processes and their interactions</h5> complying with the ISO 22000:2018 standard. 
        </p>
        <div className="col-12 d-flex justify-content-center align-items-center" ><Button onClick={()=>{
            window.location.assign('/guide');
        }}>Back</Button></div>
    </div>
    <div className="col-2 d-flex justify-content-center align-items-center" style={{backgroundColor:"#6BA8F3", boxShadow: '0 0px 26px 0 rgba(0,0,0,0.2), 0 0px 28px 0 rgba(0,0,0,0.19)'}}><ToRight leftLink={rightLink} title={right}/></div>
    </div>);
    
}