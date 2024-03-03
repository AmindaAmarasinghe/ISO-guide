import ToLeft from "./ToLeft";
import ToRight from "./ToRight";
import Button from 'react-bootstrap/Button';

export default function TAC({left, leftLink, right, rightLink}){
    return(<div className="row"
    >
    <div className="col-2 d-flex justify-content-center" style={{minHeight:"100vh", backgroundColor:"#6BA8F3", boxShadow: '0 0px 26px 0 rgba(0,0,0,0.2), 0 0px 28px 0 rgba(0,0,0,0.19)'}}><ToLeft leftLink={leftLink} title={left}/></div>
    <div className="col-8 p-5">
        <h1 className="text-center p-2 bg-info m-1">Terms and Definitions</h1>
        <p style={{textAlign:"justify"}}><span>Before you move to the actual beginning of our consultation, we will make you aware of some important terms and definitions which will help you to understand some sections in the upcoming documents we prepare. (All these definitions are prepared referring ISO 22000:2018 standard)</span></p>
<p></p>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Acceptable level</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>Level of a food safety hazard which should not exceed in the end product.&nbsp;</span></p>
    </li>
    <li>
        <p style={{textAlign:"justify"}}><span>This level is provided by the organization.</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Audit</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>The object of an audit is to determine the extent to which the audit criteria are fulfilled.&nbsp;</span></p>
    </li>
    <li>
        <p style={{textAlign:"justify"}}><span>It is a systematic, independent (No one in the organization can interfere the auditor) and documented process for obtaining audit evidence and evaluating it.&nbsp;</span></p>
    </li>
    <li>
        <p style={{textAlign:"justify"}}><span>An audit can be an internal audit (first party) or an external audit (second party or third party),</span></p>
    </li>
    <li>
        <p style={{textAlign:"justify"}}><span>and it can be a combined audit (combining two or more disciplines).</span></p>
    </li>
    <li>
        <p style={{textAlign:"justify"}}><span>An internal audit is conducted by the organization itself, or by an external party on its behalf.</span></p>
    </li>
    <li>
        <p style={{textAlign:"justify"}}><span>An external audit is conducted by a certification body which is an outside organization.</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Competence</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>Ability to apply knowledge and skills to achieve intended results.</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Conformity</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>Fulfillment of a requirement</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Nonconformity</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>Non-fulfilment of a requirement.</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Contamination</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>Introduction or occurrence of a contaminant including a food safety hazard in a product or processing environment.</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Control measure</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>Action or activity that is essential to prevent a significant food safety hazard or reduce it to an acceptable level.</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Correction</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>An action to eliminate a detected nonconformity.</span></p>
    </li>
    <li>
        <p style={{textAlign:"justify"}}><span>It includes the handling of potentially unsafe products followed by a corrective action.</span></p>
    </li>
</ul>
<p style={{textAlign:"justify"}}><span>﻿</span></p>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Corrective action</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>An action to eliminate the cause of a nonconformity and to prevent recurrence.</span></p>
    </li>
    <li>
        <p style={{textAlign:"justify"}}><span>It is conducted through a root cause analysis.</span></p>
    </li>
</ul>
<p></p>
<p></p>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Critical Control Point (CCP)</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>This is a step in a particular production process.&nbsp;</span></p>
    </li>
    <li>
        <p style={{textAlign:"justify"}}><span>Control measures are applied in that step to prevent or reduce a significant food safety hazard to an acceptable level.</span></p>
    </li>
    <li>
        <p style={{textAlign:"justify"}}><span>The critical limit and measurement should be defined.&nbsp;</span></p>
    </li>
    <li>
        <p style={{textAlign:"justify"}}><span>Application of corrections should be enabled for that step.</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Critical limit</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>A measurable value which separates acceptability from unacceptability.</span></p>
    </li>
    <li>
        <p style={{textAlign:"justify"}}><span>Critical limits are established to determine whether a CCP remains in control or not.&nbsp;</span></p>
    </li>
    <li>
        <p style={{textAlign:"justify"}}><span>If a critical limit is exceeded or not met, the affected products are considered as potentially unsafe products.&nbsp;</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Documented information</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>All the information required to be controlled and maintained by the organization.&nbsp;</span></p>
    </li>
    <li>
        <p style={{textAlign:"justify"}}><span>Documented information can be in any format and media, and from any source.</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>End product</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>Product that will undergo no further processing or transformation by the organization.</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Flow diagram</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>Schematic and systematic presentation of the sequence and interactions of steps in the process.</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Food chain</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>sequence of the stages in the production, processing, distribution, storage and handling of a food and its ingredients, from primary production to consumption</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Food safety</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>Food will not cause an adverse health effect for the consumer when it is prepared and/or consumed in accordance with its intended use.</span></p>
    </li>
    <li>
        <p style={{textAlign:"justify"}}><span>This only applies to the safety hazards occur in the final product.</span></p>
    </li>
</ul>
<p style={{textAlign:"justify"}}><span>﻿</span></p>
<p style={{textAlign:"justify"}}><strong><span>Food safety hazard</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>Biological, chemical or physical agent in food with the potential to cause an adverse health effect.</span></p>
    </li>
    <li>
        <p style={{textAlign:"justify"}}><span>Food safety hazards include allergens and radiological substances as well.</span></p>
    </li>
</ul>
<p style={{textAlign:"justify"}}><strong><span>Interested party (preferred term)/Stakeholder (admitted term)</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>Person or organization that can affect, be affected by, or perceive itself to be affected by a decision or activity.</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Lot/Batch</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>A defined quantity of a product produced and/or processed and/or packaged essentially under the same conditions.</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Management system</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>A set of interrelated or interacting elements of an organization to establish policies and objectives and, processes to achieve those objectives.</span></p>
    </li>
</ul>
<p style={{textAlign:"justify"}}><span>﻿</span></p>
<p style={{textAlign:"justify"}}><strong><span>Operational Pre-Requisite Programme (OPRP)</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>A control measure or combination of control measures applied to prevent or reduce a significant food safety hazard to an acceptable level.</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Pre-Requisite Programme (PRP)</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>Basic conditions and activities that are necessary within the organization and throughout the food chain to maintain food safety.</span></p>
    </li>
    <li>
        <p style={{textAlign:"justify"}}><span>Examples of equivalent terms are: good agricultural practice (GAP), good veterinary</span></p>
    </li>
</ul>
<p style={{textAlign:"justify"}}><span>practice (GVP), good manufacturing practice (GMP), good hygiene practice (GHP), good production practice(GPP), good distribution practice (GDP) and good trading practice (GTP).</span></p>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Outsource</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>Make an arrangement where an external organization performs part of an organization&rsquo;s function or process.</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Policy</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>Intentions and direction of an organization as formally expressed by its top management.</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Process</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>A set of interrelated or interacting activities which transforms inputs to outputs</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Product</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>An output that is a result of a process.</span></p>
    </li>
    <li>
        <p style={{textAlign:"justify"}}><span>It can also be a service.</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Requirement</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>A need or expectation that is stated, generally implied or obligatory.</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Risk</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>The effect of uncertainty and it can be positive or negative.</span></p>
    </li>
</ul>
<p style={{textAlign:"justify"}}><span>﻿</span></p>
<p style={{textAlign:"justify"}}><strong><span>Significant food safety hazard</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>A food safety hazard, identified through the hazard assessment, which needs to be controlled by control measures.</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Traceability</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>Ability to follow the history, application, movement and location of an object through specified stage(s) of production, processing and distribution</span></p>
    </li>
</ul>
<p></p>
<p style={{textAlign:"justify"}}><strong><span>Verification</span></strong></p>
<ul>
    <li>
        <p style={{textAlign:"justify"}}><span>Confirmation, through the provision of objective evidence, that specified requirements have been fulfilled.</span></p>
    </li>
</ul>
<p></p>
<p></p>
<p style={{textAlign:"center"}}><strong><span>Your knowledge is our priority!</span></strong></p>
<p></p>
<p><span>Please rate your satisfaction on the scale below, in understanding the content so far.</span></p>
        <div className="col-12 d-flex justify-content-center align-items-center" ><Button onClick={()=>{
            window.location.assign('/guide');
        }}>Back</Button></div>
    </div>
    <div className="col-2 d-flex justify-content-center" style={{backgroundColor:"#6BA8F3", boxShadow: '0 0px 26px 0 rgba(0,0,0,0.2), 0 0px 28px 0 rgba(0,0,0,0.19)'}}><ToRight leftLink={rightLink} title={right}/></div>
    </div>);
    
}