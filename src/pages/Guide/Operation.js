import ToLeft from "./ToLeft";
import ToRight from "./ToRight";
import Button from 'react-bootstrap/Button';

export default function Operation({left, leftLink, right, rightLink}){
    return(<div className="row"
    >
    <div className="col-2 d-flex justify-content-center" style={{minHeight:"100vh", backgroundColor:"#6BA8F3", boxShadow: '0 0px 26px 0 rgba(0,0,0,0.2), 0 0px 28px 0 rgba(0,0,0,0.19)'}}><ToLeft leftLink={leftLink} title={left}/></div>
    <div className="col-8 p-5">
        <h1 className="text-center p-2 bg-info m-1">Operation</h1>
        <div className="d-flex p-5" style={{justifyContent:'center'}}><img src="img/Images/operation.jpg" style={{scale:'1.0'}}></img></div>

        <p style={{textAlign:"center"}}><strong><span>This is one of the most important clauses that cover most of the FSMS requirements. So, please go through this carefully!</span></strong></p>
<p  style={{textAlign:"justify"}}><strong><h3>8.1 Operational planning and control</h3></strong></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>The organization shall plan, implement, control, maintain and update the processes needed to meet requirements for the realization of safe products, and to implement the actions determined in 6.1, by</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>a) establishing criteria for the processes</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>b) implementing control of the processes in accordance with the criteria</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>c) keeping documented information to the extent necessary to have the confidence to demonstrate that the processes have been carried out as planned.</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>The organization shall control planned changes and review the consequences of unintended changes, taking action to mitigate any adverse effects, as necessary.</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>The organization shall ensure that outsourced processes are controlled&nbsp;</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><strong><h3>8.2 Prerequisite programmes (PRPs)</h3></strong></p>
<p></p>
<p  style={{textAlign:"justify"}}><strong><span><h4>8.2.1</h4></span></strong><span>&nbsp;The organization shall establish, implement, maintain and update PRP(s) to facilitate the prevention and reduction of contaminants (including food safety hazards) in the products, product processing and work environment.</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><strong><span><h4>8.2.2</h4></span></strong><span>&nbsp;The PRP(s) shall be:</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>a) appropriate to the organization and its context with regard to food safety</span></p>
<p  style={{textAlign:"justify"}}><span>﻿</span></p>
<p  style={{textAlign:"justify"}}><span>b) appropriate to the size and type of the operation and the nature of the products being manufactured and handled</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>c) implemented across the entire production system, either as programmes applicable in general or as programmes applicable to a particular product or process</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>d) approved by the food safety team.</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><strong><span><h4>8.2.3</h4></span></strong><span>&nbsp;When selecting and establishing PRP(s), the organization shall ensure that applicable statutory, regulatory and mutually agreed customer requirements are identified.&nbsp;</span></p>
<p  style={{textAlign:"justify"}}><span>The organization should consider</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>a) the applicable part of the&nbsp;</span><strong><span>ISO/TS 22002</span></strong><span>&nbsp;series</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>b) applicable standards, codes of practice and guidelines.</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><strong><span><h4>8.2.4</h4>&nbsp;</span></strong><span>When establishing PRP(s) the organization shall consider</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>a) construction, lay-out of buildings and associated utilities</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>b) lay-out of premises, including zoning, workspace and employee facilities</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>c) supplies of air, water, energy and other utilities</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>d) pest control, waste and sewage disposal and supporting services</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>e) the suitability of equipment and its accessibility for cleaning and maintenance</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>f) supplier approval and assurance processes (e.g. raw materials, ingredients, chemicals and packaging)</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>g) reception of incoming materials, storage, dispatch, transportation and handling of products</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>h) measures for the prevention of cross contamination</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>i) cleaning and disinfecting</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>j) personal hygiene</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>k) product information/consumer awareness</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>l) others, as appropriate.</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>Documented information shall specify the selection, establishment, applicable monitoring and verification of the PRP(s).</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><strong><span><h3>8.3 Traceability system</h3></span></strong></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>The traceability system shall be able to uniquely identify incoming material from the suppliers and the first stage of the distribution route of the end product. When establishing and implementing the traceability system, the following shall be considered as a minimum</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>a) relation of lots of received materials, ingredients and intermediate products to the end products</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>b) reworking of materials/products</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>c) distribution of the end product.</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>The organization shall ensure that applicable statutory, regulatory and customer requirements are identified.</span></p>
<p  style={{textAlign:"justify"}}><span>﻿</span></p>
<p  style={{textAlign:"justify"}}><span>Documented information as evidence of the traceability system shall be retained for a defined period to include, as a minimum, the shelf life of the product. The organization shall verify and test the effectiveness of the traceability system.</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><strong><span><h3>8.4 Emergency preparedness and response</h3></span></strong></p>
<p></p>
<p  style={{textAlign:"justify"}}><strong><span><h4>8.4.1 General</h4></span></strong></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>Top management shall ensure procedures are in place to respond to potential emergency situations or incidents (</span><em><span>natural disasters, environmental accidents, bioterrorism, workplace accidents, public health emergencies and other accidents, interruption of essential services such as water, electricity or refrigeration supply etc.</span></em><span>) that can have an impact on food safety which are relevant to the role of the organization in the food chain.</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><strong><span><h4>8.4.2 Handling of emergencies and incidents</h4></span></strong></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>The organization shall</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>a) respond to actual emergency situations and incidents by,</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>1) ensuring applicable statutory and regulatory requirements are identified;</span></p>
<p  style={{textAlign:"justify"}}><span>2) communicating internally;</span></p>
<p  style={{textAlign:"justify"}}><span>3) communicating externally (e.g. suppliers, customers, appropriate authorities, media)</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>b) take action to reduce the consequences of the emergency situation, appropriate to the magnitude of the emergency or incident and the potential food safety impact</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>c) periodically test procedures where practical</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>d) review and, where necessary, update the documented information after the occurrence of any incident, emergency situation or tests.</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><strong><span><h3>8.5 Hazard control</h3></span></strong></p>
<p></p>
<p  style={{textAlign:"justify"}}><strong><span><h4>8.5.1 Preliminary steps to enable hazard analysis</h4></span></strong></p>
<p></p>
<p  style={{textAlign:"justify"}}><strong><span>8.5.1.1 General</span></strong></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>To carry out the hazard analysis, preliminary documented information shall be collected, maintained and updated by the food safety team. This shall include, but not be limited to</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>a) applicable statutory, regulatory and customer requirements</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>b) the organization&rsquo;s products, processes and equipment</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>c) food safety hazards relevant to the FSMS.</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><strong><span>8.5.1.2 Characteristics of raw materials, ingredients and product contact materials</span></strong></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>The organization shall ensure that all applicable statutory and regulatory food safety requirements are identified for all raw materials, ingredients and product contact materials.</span></p>
<p  style={{textAlign:"justify"}}><span>﻿</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>The organization shall maintain documented information concerning all raw materials, ingredients and product contact materials to the extent needed to conduct the hazard analysis, including the following, as appropriate</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>a) biological, chemical and physical characteristics</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>b) composition of formulated ingredients, including additives and processing aids</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>c) source (e.g. animal, mineral or vegetable)</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>d) place of origin (provenance)</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>e) method of production</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>f) method of packaging and delivery</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>g) storage conditions and shelf life</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>h) preparation and/or handling before use or processing</span></p>
<p></p>
<p  style={{textAlign:"justify"}}><span>i) acceptance criteria related to food safety or specifications of purchased materials and ingredients appropriate to their intended use.</span></p>
        <div className="col-12 d-flex justify-content-center align-items-center" ><Button onClick={()=>{
            window.location.assign('/guide');
        }}>Back</Button></div>
    </div>
    <div className="col-2 d-flex justify-content-center" style={{backgroundColor:"#6BA8F3", boxShadow: '0 0px 26px 0 rgba(0,0,0,0.2), 0 0px 28px 0 rgba(0,0,0,0.19)'}}><ToRight leftLink={rightLink} title={right}/></div>
    </div>);
    
}