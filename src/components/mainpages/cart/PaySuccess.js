import React from "react";
import Logo from "../../../assets/Pics/Success/successPgLogo.png";

function PaySuccess() {
    return(
        <>
        <div className="ach__successPg">
        <div className="ach__success">
            <h1 className="ach__success--heading">Your Payment was successful <span role="img" aria-label="Confetti">🎉</span></h1>
            <p className="ach__success--thankYou">Thanks for buying from us. Hope to see you soon!</p>
            <a href="/">
                <button className="ach__success--redirect">Back to Home Page</button>
            </a>
        </div>
        <img className="ach__successPg--logo" src={Logo} alt="Logo"/>
        
        <span>
            <svg className="ach__success--phoneIcon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.2632 14.4853C18.9061 14.4853 17.5769 14.2734 16.317 13.8577C15.7022 13.6458 15.004 13.809 14.5999 14.2213L12.1023 16.1075C9.23653 14.5779 7.40243 12.745 5.89371 9.90001L7.72895 7.46148C8.19095 6.99948 8.35655 6.32325 8.15855 5.6899C7.73937 4.422 7.52634 3.09158 7.52634 1.73684C7.52634 0.779246 6.74709 0 5.7895 0H1.73684C0.779246 0 0 0.779246 0 1.73684C0 12.9094 9.09064 22 20.2632 22C21.2208 22 22 21.2208 22 20.2632V16.2221C22 15.2645 21.2208 14.4853 20.2632 14.4853Z" fill="#0f6cd6"/>
            </svg>
            <p className="ach__success--helpLine">Help Line: 9007871854 / 9830668808 / 86970 38764 / 7384905704 </p>
        </span>

        <span>
            <svg className="ach__success--emailIcon" width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.542739 1.58214C4.11114 4.60418 10.3726 9.92088 12.2129 11.5786C12.4599 11.8024 12.7249 11.9161 13 11.9161C13.2745 11.9161 13.539 11.8034 13.7855 11.5808C15.6274 9.92139 21.8888 4.60418 25.4573 1.58214C25.6795 1.39435 25.7133 1.06427 25.5335 0.834691C25.1177 0.30418 24.4977 0 23.8333 0H2.16667C1.5023 0 0.882313 0.30418 0.466567 0.834742C0.2867 1.06427 0.320571 1.39435 0.542739 1.58214Z" fill="#0f6cd6"/>
                <path d="M25.6858 3.21984C25.4938 3.13047 25.2679 3.16165 25.1082 3.29815C21.1509 6.65286 16.1003 10.9529 14.5113 12.3848C13.6194 13.1899 12.3816 13.1899 11.4876 12.3837C9.79387 10.8576 4.12222 6.03607 0.89182 3.2981C0.730996 3.1616 0.504613 3.13148 0.314184 3.21979C0.122738 3.30871 0 3.5002 0 3.71125V17.3333C0 18.5283 0.971699 19.5 2.16668 19.5H23.8334C25.0283 19.5 26 18.5283 26 17.3333V3.71125C26 3.5002 25.8773 3.3082 25.6858 3.21984Z" fill="#0f6cd6"/>
            </svg>
            <p className="ach__success--email">Email: drsrcphd@gmail.com</p>
        </span>
        </div>
        </>
    )
}

export default PaySuccess;