import ToLeft from "./ToLeft";
import ToRight from "./ToRight";
import Button from 'react-bootstrap/Button';

export default function Evaluation({left, leftLink, right, rightLink}){
    return(<div className="row"
    >
    <div className="col-2 d-flex justify-content-center" style={{minHeight:"100vh", backgroundColor:"#6BA8F3", boxShadow: '0 0px 26px 0 rgba(0,0,0,0.2), 0 0px 28px 0 rgba(0,0,0,0.19)'}}><ToLeft leftLink={leftLink} title={left}/></div>
    <div className="col-8 p-5">
        <h1 className="text-center p-2 bg-info m-1">Evaluation</h1>
        <div className="d-flex p-1" style={{justifyContent:'center'}}><img src="img/Images/OIP.jpeg" style={{scale:'0.7'}}></img></div>

        <p style={{textAlign:"justify"}}><strong><span>9.1 Monitoring, measurement, analysis and evaluation&nbsp;</span></strong></p>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>9.1.1 General&nbsp;</span></strong></p>
<p></p>
<p style={{textAlign:"justify"}}><span>The organization shall determine</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>a) what needs to be monitored and measured</span></p>
<p style={{textAlign:"justify"}}><span>b) the methods for monitoring, measurement, analysis and evaluation, as applicable, to ensure valid results</span></p>
<p style={{textAlign:"justify"}}><span>c) when the monitoring and measuring shall be performed</span></p>
<p style={{textAlign:"justify"}}><span>d) when the results from monitoring and measurement shall be analyzed and evaluated</span></p>
<p style={{textAlign:"justify"}}><span>e) who shall analyze and evaluate the results from monitoring and measurement.&nbsp;</span></p>
<p></p>
<p></p>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>9.1.2 Analysis and evaluation&nbsp;</span></strong></p>
<p></p>
<p style={{textAlign:"justify"}}><span>The organization shall analyze and evaluate appropriate data and information arising from monitoring and measurement, including the results of verification activities related to Pre Requisite Programs(PRPs) and the hazard control plan, the internal audits and external audits.&nbsp;</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>The analysis shall be carried out</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>a) to confirm that the overall performance of the system meets the planned arrangements and the FSMS requirements established by the organization</span></p>
<p style={{textAlign:"justify"}}><span>b) to identify the need for updating or improving the FSMS</span></p>
<p style={{textAlign:"justify"}}><span>c) to identify trends which indicate a higher incidence of potentially unsafe products or process failures</span></p>
<p style={{textAlign:"justify"}}><span>d) to establish information for planning of the internal audit programme related to the status and importance of areas to be audited</span></p>
<p style={{textAlign:"justify"}}><span>e) to provide evidence that corrections and corrective actions are effective.&nbsp;</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>The results shall be reported to top management and used as input to the management review (see 9.3) and the updating of the FSMS.&nbsp;</span></p>
<p></p>
<p style={{textAlign:"justify"}}><em><span>Methods to analyze data can include statistical techniques.&nbsp;</span></em></p>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>9.2 Internal audit&nbsp;</span></strong></p>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>9.2.1</span></strong><span>&nbsp;The organization shall conduct internal audits at planned intervals to provide information on whether the FSMS:&nbsp;</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>a) conforms to:&nbsp;</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>1) the organization&rsquo;s own requirements for its FSMS</span></p>
<p style={{textAlign:"justify"}}><span>2) the requirements of this document</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>b) is effectively implemented and maintained.&nbsp;</span></p>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>9.2.2&nbsp;</span></strong><span>The organization shall</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>a) plan, establish, implement and maintain (an) audit programme(s), including the frequency, methods, responsibilities, planning requirements and reporting, which shall take into consideration the importance of the processes concerned, changes in the FSMS, and the results of monitoring, measurement and previous audits</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>b) define the audit criteria and scope for each audit;&nbsp;</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>c) select competent auditors and conduct audits to ensure objectivity and the impartiality of the audit process</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>d) ensure that the results of the audits are reported to the food safety team and relevant management</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>e) retain documented information as evidence of the implementation of the audit programme and the audit results</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>f) make the necessary correction and take the necessary corrective action within the agreed time frame</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>g) determine if the FSMS meets the intent of the food safety policy and objectives of the FSMS</span></p>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>9.3 Management review&nbsp;</span></strong></p>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>9.3.1&nbsp;</span></strong><span>General Top management shall review the organization&rsquo;s FSMS, at planned intervals, to ensure its continuing suitability, adequacy and effectiveness.&nbsp;</span></p>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>9.3.2&nbsp;</span></strong><span>Management review input The management review shall consider:&nbsp;</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>a) the status of actions from previous management reviews</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>b) changes in external and internal issues that are relevant to the FSMS, including changes in the organization and its context&nbsp;</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>c) information on the performance and the effectiveness of the FSMS, including trends in</span></p>
<p style={{textAlign:"justify"}}><span>1) result(s) of system updating activities</span></p>
<p style={{textAlign:"justify"}}><span>2) monitoring and measurement results</span></p>
<p style={{textAlign:"justify"}}><span>3) analysis of the results of verification activities related to PRPs and the hazard control plan</span></p>
<p style={{textAlign:"justify"}}><span>4) nonconformities and corrective actions</span></p>
<p style={{textAlign:"justify"}}><span>5) audit results (internal and external)</span></p>
<p style={{textAlign:"justify"}}><span>6) inspections (e.g. regulatory, customer)</span></p>
<p style={{textAlign:"justify"}}><span>7) the performance of external provider</span></p>
<p style={{textAlign:"justify"}}><span>8) the review of risks and opportunities and of the effectiveness of actions taken to address them&nbsp;</span></p>
<p style={{textAlign:"justify"}}><span>9) the extent to which objectives of the FSMS have been met</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>d) the adequacy of resources</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>e) any emergency situation, incident or withdrawal/recall that occurred</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>f) relevant information obtained through external (see 7.4.2) and internal (see 7.4.3) communication, including requests and complaints from interested parties</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>g) opportunities for continual improvement. The data shall be presented in a manner that enables top management to relate the information to stated objectives of the FSMS.&nbsp;</span></p>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>9.3.3 Management review output&nbsp;</span></strong></p>
<p></p>
<p style={{textAlign:"justify"}}><span>The outputs of the management review shall include</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>a) decisions and actions related to continual improvement opportunities</span></p>
<p></p>
<p style={{textAlign:"justify"}}><span>b) any need for updates and changes to the FSMS, including resource needs and revision of the food safety policy and objectives of the FSMS.&nbsp;</span></p>
<p></p>
<p></p>
<p style={{textAlign:"center"}}><strong><span>One more clause to go&hellip;</span></strong></p>
<p style={{textAlign:"center"}}><strong><span>Keep moving&hellip;.</span></strong></p>        
       <div className="col-12 d-flex justify-content-center align-items-center" ><Button onClick={()=>{
            window.location.assign('/guide');
        }}>Back</Button></div>
    </div>
    <div className="col-2 d-flex justify-content-center" style={{backgroundColor:"#6BA8F3", boxShadow: '0 0px 26px 0 rgba(0,0,0,0.2), 0 0px 28px 0 rgba(0,0,0,0.19)'}}><ToRight leftLink={rightLink} title={right}/></div>
    </div>);
    
}