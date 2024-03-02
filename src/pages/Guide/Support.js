import ToLeft from "./ToLeft";
import ToRight from "./ToRight";
import Button from 'react-bootstrap/Button';

export default function Support({left, leftLink, right, rightLink}){
    return(<div className="row"
    >
    <div className="col-2 d-flex justify-content-center align-items-center" style={{backgroundColor:"#6BA8F3", boxShadow: '0 0px 26px 0 rgba(0,0,0,0.2), 0 0px 28px 0 rgba(0,0,0,0.19)'}}><ToLeft leftLink={leftLink} title={left}/></div>
    <div className="col-8 p-5">
        <h1 className="text-center p-2 bg-info m-1">Support</h1>
        <img src="img/start.png" style={{scale:'0.5'}}></img>
        <h4>7.1 Resources</h4>
        <p><h4>7.1.1 General</h4> </p>
        <p>You need to determine and provide the resources that essential for the establishment, implementation, maintenance, update and continual improvement of the FSMS.</p>
        <p>Therefore, your organization shall consider;</p>
        <ul>
            <li>The capacity and constrains on the existing internal issues</li>
            <li>The need of external issues</li>
        </ul>

        <h4>7.1.2 People</h4>
        <p>You need to ensure that people necessary to operate and maintain an effective FSMS are competent in their roles.</p>
        <p>When you get the assistance of the experts for the development, implementation, operation or assessment of the FSMS, you neet to keep evidence of agreement or contracts defining the competency, responsibility and authority of these external experts as documented information. </p>
        
        
        <h4>7.1.3 Infrastructure</h4>
        <p>You need to provide resources for the determination, establishment and maintenance of the infrastructure necessary to achieve conformity with the FSMS requirements.</p>
        <p>Those infrastructure can include:</p>
        <ul>
            <li>Ensure that your FSMS comply with the standard (ISO 22000:2018) requirements.</li>
            <li>The conformity of food products and services to customers</li>
            <li>Requirements to interested parties in the food chain. </li>
        </ul>
        <h3>6.2 Objectives of the food safety management system and planning to achieve them</h3>
        <h4>6.2.1 The organization shall establish FSMS objectives at relevant functions and levels. These objectives shall:</h4>
        <ul>
            <li>Land, vessels, buildings and associated utilities</li>
            <li>Equipment, including hardware and software</li>
            <li>Transportation</li>
            <li>Information and communication technology </li>
        </ul>

        <h4>7.1.4 Work environment</h4>
        <p>You need to determine, provide and maintain the resources for the establishment, management and maintenance of the work environment which comply with the FSMS requirements.</p>
        <p>A suitable work environment can be a combination of both physical and human factors such as;</p>
        <ul>
            <li>Social (non-descriminatory, calm, non-confrontational)</li>
            <li>Psychological (stress-reducing, burnout prevention, emotionally protective)</li>
            <li>Physical (temperature, heat, humidity, light, air flow, hygiene, noise)</li>
        </ul>
        <p>The above factors can differ according to the products and services you provie. </p>

        <h3>7.1.5 Externally developed elements of the food safety management system</h3>
        <p>When you use externally developed elements such as; PRPs, hazard analysis and the hazard control plan, (Don’t worry…..we will let you kow what are thses abbreviations! Also you can refer normative references - Clause 2.0) you need to ensure that these elements are;</p>
        
        <ul>
            <li>Developed in conformance with requirements of the standard</li>
            <li>applicable to the sites, processes and products of the organization</li>
            <li>specifically adapted to the processes and products of the organization by the food safety team</li>
            <li>implemented, maintained and updated as required by this document</li>
            <li>retained as documented information.</li>
        </ul>
        <h3>7.1.6 Control of externally provided processes, products or services</h3>
        <p>The organization shall:</p>
        <ul>
            <li>establish and apply criteria for the evaluation, selection, monitoring of performance and re-evaluation of external providers of processes, products and services.</li>
            <li>ensure adequate communication of requirements to the external providers.</li>
            <li>ensure that externally provided processes, products or services do not adversely affect the organization's ability to consistently meet the requirements of the FSMS</li>
            <li>retain documented information of these activities</li>
        </ul>
        <h1>Competence</h1>
        <p>The organization shall:</p>
        <ul>
            <li>determine the necessary competence of people, including external providers, doing work under its control that affects its food safety performance and effectiveness of the FSMS</li>
            <li>ensure that these persons, including the food safety team and those responsible for the operation of the hazard control plan, are competent on the basis of appropriate education, training and experience</li>
            <li>ensure that the food safety team has a combination of multi-disciplinary knowledge and experience in developing and implementing the FSMS (not limited to, the organization’s products, processes, equipment and food safety hazards within the scope of the FSMS);</li>
            <li>where applicable, take actions to acquire the necessary competence, and evaluate the effectiveness of the actions taken</li>
            <li>retain appropriate documented information as evidence of competence.</li>
        </ul>
        <h1>7.3 Awareness</h1>
        <p>You must ensure that all relevant persons doing work under the organization’s control shall be aware of:</p>
        <ul>
            <li>the food safety policy</li>
            <li>the objectives of the FSMS relevant to their tasks</li>
            <li>their individual contribution to the effectiveness of the FSMS, including the benefits of improved food safety performance</li>
            <li>the implications of not conforming with the FSMS requirements.</li>
        </ul>
        <h1>7.4 Communication</h1>
        <h3>7.4.1 General</h3>
        <p>You need to determine the internal and external communications relevant to the FSMS including</p>
        <ul>
            <li>a) on what it will communicate</li>
            <li>b) when to communicate</li>
            <li>c) with whom to communicate</li>
            <li>d) how to communicate</li>
            <li>e) who communicates</li>
        </ul>
        <p>Your organization shall ensure that the requirement for effective communication
             is understood by all persons whose activities have an impact on food safety.</p>
        <h4>7.4.2 External communication</h4>
        <p>The organization shall ensure that sufficient information is communicated externally and is available for interested parties of the food chain.</p>
        <p>Therefore, you ,must establish, implement and maintain effective communications with</p>
        <ul>
            <li>a) external providers and contractors</li>
            <li>b) customers and consumers, in relation to,
                <ul>
                    <li>1) product information related to food safety, to enable the handling, display, storage, preparation, distribution and use of the product within the food chain or by the consumer</li>
                    <li>2) identified foods safety hazards that need to be controlled by other organizations in the food chain and by consumers</li>
                    <li>3) contractual arrangements, enquiries and orders, including their amendments</li>
                    <li>4) customer and consumer feedback, including complaints</li>
                </ul>
            </li>
            <li>c) statutory and regulatory authorities</li>
            <li>d) other organizations that have an impact on, or will be affected by, the effectiveness or updating of the FSMS.</li>
        </ul>
        <p>
        Designated persons shall have defined responsibility and authority for the external communication of any information concerning food safety. The information obtained through external communication shall be included as input for management review and for updating the FSMS.
        </p>
        <p>You must keep evidence of external communication as documented information.</p>
        <h3>7.4.3 Internal communication</h3>
        <p>The organization shall establish, implement and maintain an effective system for communicating issues having an impact on food safety.</p>
        <p>To maintain the effectiveness of the FSMS, your organization shall ensure that the food safety team is informed in a timely manner of changes in the following,</p>
        <ul>
            <li>a) products or new products</li>
            <li>b) raw materials, ingredients and services</li>
            <li>c) production systems and equipment</li>
            <li>d) production premises, location of equipment and surrounding environment</li>
            <li>e) cleaning and sanitation programmes</li>
            <li>f) packaging, storage and distribution systems</li>
            <li>g) competencies or allocation of responsibilities and authorizations</li>
            <li>h) applicable statutory and regulatory requirements</li>
            <li>i) knowledge regarding food safety hazards and control measures</li>
            <li>j) customer, sector and other requirements that the organization observes</li>
            <li>k) relevant enquiries and communications from external interested parties</li>
            <li>l) complaints and alerts indicating food safety hazards associated with the end product</li>
            <li>m) other conditions that have an impact on food safety.</li>
        </ul>
        <p>The food safety team shall ensure that this information is included when updating the FSMS. Top management shall ensure that relevant information is included as input to the management review</p>
        <h4>7.5 Documented information</h4>
        <h4>7.5.1 General</h4>
        <p>Your FSMS shall include,</p>
        <ul>
            <li>a) documented information required by the standard.</li>
            <li>b) documented information determined by the organization as being necessary for the effectiveness of the FSMS</li>
            <li>c) documented information and food safety requirements required by statutory, regulatory authorities and customers.</li>
        </ul>
        <p>
        The extent of documented information for a FSMS can differ from one organization to another due to
        </p>
        <ul>
            <li>— the size of organization and its type of activities, processes, products and services;</li>
            <li>— the complexity of processes and their interactions;</li>
            <li>— the competence of persons.</li>
        </ul>
        <h4>7.5.2 Creating and updating</h4>
        <p>When creating and updating documented information, the organization shall ensure appropriate</p>
        <ul>
            <li>a) identification and description (e.g. a title, date, author, or reference number)</li>
            <li>b) format (e.g. language, software version, graphics) and media (e.g. paper, electronic);</li>
            <li>c) review and approval for suitability and adequacy (Documents need to be reviewed and approved by authorized personal in your organization). </li>
        </ul>
        <h4>7.5.3 Control of documented information</h4>
        <p>7.5.3.1 Documented information required by the FSMS and by the standard shall be controlled to ensure</p>
        
        <ul>
            <li>a) it is available and suitable for use, where and when it is needed</li>
            <li>b) it is adequately protected (e.g. from loss of confidentiality, improper use, or loss of integrity).</li>
        </ul>
        <h5>7.5.3.2 For the control of documented information, the organization shall address the following activities, as applicable</h5>
        <ul>
            <li>a) distribution, access, retrieval and use</li>
            <li>b) storage and preservation, including preservation of legibility</li>
            <li>c) control of changes (e.g. version control)</li>
            <li>d) retention and disposition.</li>
        </ul>
        <p>Documented information of external origin determined by the organization to be necessary for the planning and operation of the FSMS shall be identified, as appropriate, and controlled.</p>

        <div className="col-12 d-flex justify-content-center align-items-center" ><Button onClick={()=>{
            window.location.assign('/guide');
        }}>Back</Button></div>
    </div>
    <div className="col-2 d-flex justify-content-center align-items-center" style={{backgroundColor:"#6BA8F3", boxShadow: '0 0px 26px 0 rgba(0,0,0,0.2), 0 0px 28px 0 rgba(0,0,0,0.19)'}}><ToRight leftLink={rightLink} title={right}/></div>
    </div>);
    
}