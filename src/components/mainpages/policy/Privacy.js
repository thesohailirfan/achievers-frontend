import React from "react";
import Header from "../../headers/Header";
import Footer from "../../footers/footer";
import PrivacyBannerPic from "../../../assets/Pics/Policy/security & privacy.png";
// CSS same as About.js (some are in About.css)

export default function Privacy() {
    return (
        <>
        <Header />
        <img className="policy__banner policy__banner--privacy" src={PrivacyBannerPic} alt="Terms of Use Banner Pic"/>
        <div className="ach__about">
            <p style={{marginTop: '4vw'}} className="ach__about--aboutAch--p">This privacy statement explains how Achievers Circle Private Limited (“ACPL”) uses and safeguards any information you provide to Achievers Circle Private Limited when using this website. Achievers Circle Private Limited (“ACPL”) is committed to protecting your privacy. If we ask you to give information that may be used to identify you while using this website, you can be certain that it will only be used in line with this privacy policy. Achievers Circle Private Limited (“ACPL”) reserves the right to alter this policy at any time by updating this website. You should revisit this page on a regular basis to confirm that you are satisfied with any changes.</p> 
            
            <p className="ach__about--aboutAch--p">We gather the following information:</p>

            <span>
                <li className="ach__about--aboutAch--p">name and residential /permanent address of students/users</li>
                <li className="ach__about--aboutAch--p">query related to students’ enrollment/registration</li>
                <li className="ach__about--aboutAch--p">contact information including email address</li>
                <li className="ach__about--aboutAch--p">demographic information such as postcode, preferences and interests</li>
                <li className="ach__about--aboutAch--p">other information relevant to user and/or offers</li>
            </span> 
        
            <p className="ach__about--aboutAch--p">This information is required in order for us to better understand your needs and offer you with better service, and in particular for the following reasons:</p>

            <span>
                <li className="ach__about--aboutAch--p">Keeping internal records.</li>
                <li className="ach__about--aboutAch--p">We may use this information to better our student/user services</li>
                <li className="ach__about--aboutAch--p">Using the email address you've given, we may send you promotional emails about new courses or other material we think you'll find interesting on a regular basis.</li>
                <li style={{marginBottom: '2vw'}} className="ach__about--aboutAch--p">We may use your information to contact you for research reasons involving students from time to time. We may communicate with you through email, phone, fax, or mail, as well as SMS messaging. We may use the information to tailor the website to your preferences.</li>
            </span>

            <h3 className="ach__about--subHeading--corporateEstablishment">DATA PROTECTION</h3>
            <p className="ach__about--aboutAch--p">We are dedicated to keeping your information safe. To prevent unauthorized access or disclosure, we have put in place appropriate physical, technological, and
            administrative processes to protect and secure the information we collect online. We employ adequate security measures to prevent unauthorized access to, or
            modification, disclosure, or destruction of, data. These include internal audits of our data collecting, storage, and processing methods, as well as security
            measures such as adequate encryption and physical protection measures to prevent unauthorized access to systems where we keep personal data. We limit
            access to personal information to employees and agents who need to know that information in order to handle it on our behalf. These persons are bound by
            confidentiality requirements and may face discipline, including termination and criminal prosecution, if they fail to satisfy these responsibilities.</p>
            
            <p style={{marginBottom: '4vw'}} className="ach__about--aboutAch--p">We will not sell or transfer your personal information to other parties unless you give us permission or unless the law requires it. If you tell us that you want us to,
            we may use your personal information to send you promotional material about our services that we believe you will find interesting.
            If you feel that any information we have on file for you is wrong or incomplete, please contact us as soon as possible at the above address. We will quickly rectify
            any inaccurate information discovered.</p>
        </div>
        <Footer />
        </>
    )
}