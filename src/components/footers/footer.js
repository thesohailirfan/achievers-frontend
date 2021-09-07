import React from "react";
import "./footer.css";
import Logo from "../../assets/Pics/Home/1-Navbar/Logo.png";

function Footer() {

    return (
        <div className="ach__footer">
            <span className="ach__footer--aboutPart">
                <ul>
                <li className="ach__footer--aboutPart--li"><p className="ach__footer--aboutPart--heading">ABOUT</p></li>
                <li className="ach__footer--aboutPart--li"><a className="ach__footer--aboutPart--links" href="/about#ach__about__contactUs">Contact Us</a></li>
                <li className="ach__footer--aboutPart--li"><a className="ach__footer--aboutPart--links" href="/about">About Us</a></li>
                <li className="ach__footer--aboutPart--li"><a className="ach__footer--aboutPart--links" href="/careers">Careers</a></li>
                <br />
                <br />
                </ul>
            </span>

            <span className="ach__footer--policyPart">
                <ul className="ach__footer--ul">
                <li className="ach__footer--policyPart--li"><p className="ach__footer--policyPart--heading">POLICY</p></li>
                <li className="ach__footer--policyPart--li"><a className="ach__footer--policyPart--links" href="/refund-policy">Refund Policy</a></li>
                <li className="ach__footer--policyPart--li"><a className="ach__footer--policyPart--links" href="/terms-of-use">Terms of Use</a></li>
                <li className="ach__footer--policyPart--li"><a className="ach__footer--policyPart--links" href="/security&privacy">Security & Privacy</a></li>
                </ul>
            </span>

            <hr className="ach__footer--verticalLine"></hr>

            <iframe className="ach__footer--map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.6968075786313!2d88.34359781479097!3d22.515555985212245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270cad6279779%3A0x75e981a9bff8fd2b!2s162%2C%20Shyama%20Prasad%20Mukherjee%20Rd%2C%20Sahanagar%2C%20Kalighat%2C%20Kolkata%2C%20West%20Bengal%20700026!5e0!3m2!1sen!2sin!4v1618663419696!5m2!1sen!2sin" title="GMap location"></iframe>

            <span className="ach__footer--addressPart">
                <p className="ach__footer--addressPart--heading">Address</p>
                <p className="ach__footer--addressPart--campus">Main Campus (Kolkata)</p>
                <p className="ach__footer--addressPart--campusAddress">Rashbehari Branch Office: 162, S.P. Mukherjee Road, Rashbehari Avenue (Ground Floor), Kolkata - 700026</p>
            </span>

            <hr className="ach__footer--horizontalLine"></hr>

            <img className="ach__footer--logo" src={Logo} alt="Logo"/>

            
            <p className="ach__footer--social--heading">Social</p>

            <span className="ach__footer--social--icons">
            <a href="https://www.youtube.com/channel/UCFqFDEVER1E2mRskxGIfeeQ" target="_blank" rel="noopener noreferrer">
                <svg className="ach__footer--social--icons-yt" viewBox="0 0 682 682" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M647.18 181.191C639.812 153.8 618.216 132.208 590.829 124.832C540.796 111.143 340.659 111.143 340.659 111.143C340.659 111.143 140.531 111.143 90.4975 124.313C63.637 131.681 41.5141 153.804 34.1463 181.191C20.9795 231.221 20.9795 334.975 20.9795 334.975C20.9795 334.975 20.9795 439.252 34.1463 488.758C41.5219 516.145 63.1102 537.737 90.5014 545.113C141.057 558.807 340.667 558.807 340.667 558.807C340.667 558.807 540.796 558.807 590.829 545.636C618.22 538.264 639.812 516.672 647.188 489.285C660.351 439.252 660.351 335.501 660.351 335.501C660.351 335.501 660.877 231.221 647.18 181.191V181.191ZM276.94 430.826V239.123L443.363 334.975L276.94 430.826Z" fill="white"/>
                </svg>
            </a>

            <a href="https://play.google.com/store/apps/details?id=co.jarvis.achi" target="_blank" rel="noopener noreferrer">
                <svg className="ach__footer--social--icons-Play" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                <path d="M387.584 337.877L326.443 277.76L101.995 499.093L387.584 337.877Z" fill="white"/>
                <path d="M387.584 174.229L101.995 13.0132L326.443 234.347L387.584 174.229Z" fill="white"/>
                <path d="M477.077 286.442C495.381 272.149 495.381 239.936 475.861 225.642L415.957 191.552L349.12 256.064L415.957 320.576L477.077 286.442Z" fill="white"/>
                <path d="M43.3919 512L304.384 255.957L43.3919 0.0213333V0C30.1866 6.80533 21.3333 19.2 21.3333 35.3067V476.693C21.3333 492.8 30.1866 505.195 43.3919 512V512Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="512" height="512" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </a>

            <a href="https://t.me/joinchat/KhMenI4hH-4wNjJl" target="_blank" rel="noopener noreferrer">
                <svg className="ach__footer--social--icons-telegram" viewBox="0 0 511 511" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M255.5 511C114.975 511 0 396.025 0 255.5C0 114.975 114.975 0 255.5 0C396.025 0 511 114.975 511 255.5C511 396.025 396.025 511 255.5 511ZM255.5 25.55C129.028 25.55 25.55 129.028 25.55 255.5C25.55 381.972 129.028 485.45 255.5 485.45C381.972 485.45 485.45 381.972 485.45 255.5C485.45 129.028 381.972 25.55 255.5 25.55Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M213.344 307.875L332.152 200.565C337.262 195.455 330.874 194.177 324.487 198.01L178.852 289.99L116.254 270.827C102.202 266.995 102.202 256.775 118.809 250.387L365.367 155.852C376.864 150.742 387.084 158.407 383.252 176.292L341.094 374.305C338.539 388.357 329.597 392.19 318.099 385.802L254.224 338.535L223.564 367.917C219.732 371.75 214.622 371.75 214.622 367.917L213.344 307.875Z" fill="white"/>
                </svg>
            </a>

            <a href="https://touch.facebook.com/841418292574671/" target="_blank" rel="noopener noreferrer">
                <svg className="ach__footer--social--icons-fb" viewBox="0 0 511 511" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M255.502 1.06396C114.393 1.06396 0 115.457 0 256.565C0 383.123 92.1133 487.934 212.889 508.23V309.87H151.255V238.488H212.889V185.854C212.889 124.784 250.189 91.504 304.676 91.504C330.772 91.504 353.199 93.4485 359.709 94.305V158.14L321.918 158.158C292.293 158.158 286.581 172.233 286.581 192.895V238.452H357.271L348.051 309.833H286.581V509.937C412.995 494.551 511 387.07 511 256.492C511 115.457 396.607 1.06396 255.502 1.06396Z" fill="white"/>
                </svg>
            </a>
            </span>
            
            <span>
            <p className="ach__success--helpLine ach__footer--contact">Help Line: 9007871854 / 9830668808 / 86970 38764 / 7384905704 </p>
        </span>

        <span>
            <p className="ach__success--email ach__footer--contact">Email: drsrcphd@gmail.com</p>
        </span>

        <div style={{
            color: "#fff",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
        }}>Made With <span role="img" aria-label="heart">❤️</span> By Starway Web Digital</div>
        </div>
    )
}

export default Footer;