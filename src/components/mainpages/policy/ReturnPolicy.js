import React from "react";
import Header from "../../headers/Header";
import Footer from "../../footers/footer";
import ReturnPolicyPic from "../../../assets/Pics/Policy/return policy.png";
// CSS same as About.js (some are in About.css) 

export default function ReturnPolicy() {
    return (
        <>
        <Header />
        <img className="policy__banner" src={ReturnPolicyPic} alt="Return Policy Pic"/>
        <div className="ach__about"> 
            <p style={{marginTop: '4vw'}} className="ach__about--aboutAch--p">At Achievers, the refund process is translucently clear. Our refund policy guarantees that all returns are handled fairly. If a student decides not to attend the institute and withdraws his or her enrolment:</p>
        
            <span>
                <ol>
                    <li className="ach__about--aboutAch--p">1. During offline classes: He or she must go to the branch/centre in person and submit an application in writing indicating the reason for the refund.</li>
                    <li className="ach__about--aboutAch--p">2. During online classes: He or she must talk to the respective batch coordinator and submit an application in writing indicating the reason for the refund.</li>
                </ol>
            </span>

            <p style={{marginTop: '4vw'}} className="ach__about--aboutAch--p">For the purpose of calculating the refund amount, the date of filing of a written application for refund at the branch/centre will be taken into account.</p>
        
            <span>
                <ol>
                    <li className="ach__about--aboutAch--p">1. There are no refunds for admission fees to the Classroom Coaching and Online Class programmes.</li>
                    <li className="ach__about--aboutAch--p">2. An admission price paid for one subject will not be transferred to another.</li>
                    <li className="ach__about--aboutAch--p">3. In the event of excess fee payment, a refund will be issued within 10 working days of receiving the request, otherwise, in most circumstances, the excess amount will be adjusted with the tuition fees for the following month with the permission of the student.</li>
                    <li className="ach__about--aboutAch--p">4. For Postal/Distance Learning/Booklet/Study Materials/Online Test Series/Recorded Video Lectures courses, there is no fee refund policy.</li>
                    <li className="ach__about--aboutAch--p">5. If you believe the service/product information supplied to you fall short of your expectations, please notify our administrator at</li>
                    </ol>
            </span>

            <span>
                <li className="ach__about--aboutAch--p">email at <span className="ach__about--heading--A">mailusatachievers@gmail.com</span> or</li>
                <li style={{marginBottom: '3.5vw'}} className="ach__about--aboutAch--p">Call/Whatsapp at +91 - <span className="ach__about--heading--CHIEVERS">8420435780 (ID) / 9007871854 (SD) / 9830668808 (ARD) / 7384905704 (RC) / 9830287574 (SRC) / 86970 25317 (AD)</span></li>
            </span>
        </div>
        <Footer />
        </>
    )
}