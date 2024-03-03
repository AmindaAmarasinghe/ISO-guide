import ToLeft from "./ToLeft";
import ToRight from "./ToRight";
import Button from 'react-bootstrap/Button';

export default function Improvement({left, leftLink, right, rightLink}){
    return(<div className="row"
    >
    <div className="col-2 d-flex justify-content-center" style={{minHeight:"100vh", backgroundColor:"#6BA8F3", boxShadow: '0 0px 26px 0 rgba(0,0,0,0.2), 0 0px 28px 0 rgba(0,0,0,0.19)'}}><ToLeft leftLink={leftLink} title={left}/></div>
    <div className="col-8 p-5">
        <h1 className="text-center p-2 bg-info m-1">Improvement</h1>
        <div className="d-flex p-5" style={{justifyContent:'center'}}><img src="img/Images/improve.jpeg" style={{scale:'1.0'}}></img></div>

        <p style={{textAlign:"justify"}}><strong><span>10.1 Nonconformity and corrective action</span></strong><span>&nbsp;</span></p>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>10.1.1&nbsp;</span></strong><span>When a non-unconformity occurs, the organization shall</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>a) react to the nonconformity and, as applicable</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>1) take action to control and correct it</span></p>
<p style={{textAlign:"justify"}}><span>2) deal with the consequence</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>b) evaluate the need for action to eliminate the cause(s) of the nonconformity, in order that it does not recur or occur elsewhere, by</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>1) reviewing the nonconformity</span></p>
<p style={{textAlign:"justify"}}><span>2) determining the causes of the nonconformity</span></p>
<p style={{textAlign:"justify"}}><span>3) determining if similar nonconformities exist, or could potentially occur</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>c) implement any action needed</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>d) review the effectiveness of any corrective action taken</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>e) make changes to the FSMS, if necessary. Corrective actions shall be appropriate to the effects of the nonconformities encountered.&nbsp;</span></p>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>10.1.2</span></strong><span>&nbsp;The organization shall retain documented information as evidence of</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>a) the nature of the nonconformities and any subsequent actions taken</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>b) the results of any corrective action.&nbsp;</span></p>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>10.2 Continual improvement&nbsp;</span></strong></p>
<p></p>
<p style={{textAlign:"justify"}}><span>The organization shall continually improve the suitability, adequacy and effectiveness of the FSMS.&nbsp;</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>Top management shall ensure that the organization continually improves the effectiveness of the FSMS through the use of communication, management review internal audit, analysis of results of verification activities, validation of control measure(s) and combination(s) of control measure(s), corrective actions and FSMS updating.&nbsp;</span></p>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>10.3 Update of the food safety management system</span></strong><span>&nbsp;</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>Top management shall ensure that the FSMS is continually updated.&nbsp;</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>To achieve this, the food safety team shall evaluate the FSMS at planned intervals. The team shall consider whether it is necessary to review the hazard analysis, the established hazard control plan and the established PRPs. The updating activities shall be based on</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>a) input from communication, external as well as internal</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>b) input from other information concerning the suitability, adequacy and effectiveness of the FSMS</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>c) output from the analysis of results of verification activities</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>d) output from management review</span></p>

        <div className="col-12 d-flex justify-content-center align-items-center" ><Button onClick={()=>{
            window.location.assign('/guide');
        }}>Back</Button></div>
    </div>
    <div className="col-2 d-flex justify-content-center" style={{backgroundColor:"#6BA8F3", boxShadow: '0 0px 26px 0 rgba(0,0,0,0.2), 0 0px 28px 0 rgba(0,0,0,0.19)'}}><ToRight leftLink={rightLink} title={right}/></div>
    </div>);
    
}