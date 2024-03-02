import React from "react";
import GuideFlow from "./Guide/GuideFlow";
class Guide extends React.Component {
    render() {
        return (
          <>
            <div>
              <div className="row p-5">
                <h2 className="text-center">From now on, we will begin your<h1 style={{fontFamily:"fantasy"}}>ISO Tour</h1></h2>
                <p>We will guide you through implementing ISO 22000:2018 in your organization. At the end of this tour, you will get a better understanding and practical knowledge of ISO 22000:2018 implementation.
</p>
                <p>Getting ISO 22000:2018 Food Safety Management System (FSMS) is a strategic decision for your business whether you are on any business scale (micro/small/medium/large). We believe you have made this decision, realizing the hamper of benefits you may attain after the standardization.  
</p>
                <h1 className="text-center" style={{fontFamily:'sans-serif'}}><b>Let's start</b></h1>
                <img src="img/start.png" style={{scale:'0.8'}}></img>

              </div>
              <div name="flow"><GuideFlow /></div>
              <hr></hr>
              <div className="row p-5">
                <p>ISO 22000:2018 standard comes with three major concepts.</p>
                <ol>
                  <li>
                    <b>Process approach</b> - You plan all the processes that take place in your organization and their interactions.
                  </li>
                  <li>
                  <b>PDCA cycle</b> - You need to make sure that all these processes have enough resources to sustain and also they are well managed.
                  </li>
                  <li>
                    <b>Risk-based thinking</b> - You need to identify the factors that will cause deviations in processes from planned FSMS objectives. Also, you need to place control measures for such possible deviations. 

                  </li>
                </ol>
                <h3 className="text-center">Bit confusing? Don't worry, we got you covered!</h3>
                <p className="text-center">ISO 22000:2018 standard describes the Food Safety Management System requirements for any organization through ten clauses. </p>
                <p className="text-center">We will guide you through every clause and provide you with enough information including relevant examples. Also, we will let you know what are the documents you need to prepare and maintain in each step.
</p>
                <h3 className="text-center">Let's travel from clause 01 to clause 10</h3>
                <p className="text-center">(During this tour, we strongly recommend you read and understand the information carefully and follow the instructions in the given order)
</p>
              </div>
              <div className="row p-5">
                <h3 className="text-center" style={{fontWeight:"600"}}>We have completed the first three clauses!</h3>
                <p className="text-center">
                Its just a beginning for our “ISO Tour”.  <br />
                Remember, we discussed ISO 22000:2018 with PDCA cycle? It starts from the clause No. 04. <br />
                Carefully observe the image below and try to understand this scenario. <br />
                You will see that PDCA cycle can be applied to both organizational and operational planning and control as well.
                </p>
                <p className="text-center">From now on we will let you know all the required documents and detailed explanations for each clause and sub clause. <br />
                You need to prepare a document called, <b>‘Food Safety Manual’</b> referring the ISO 22000:2018 standard. 
                It is the main document which contain all the details of your organization including products, processes, process interactions, external and internal parties, competemncies, etc. 

                We will describe you how to prepare this document and related other documents providing adequate sample documents. 
                Lets move on!
                </p>
              </div>
              
            </div>
          </>
        );
    }
}
export default Guide;