import React, {useContext, useState} from 'react';
import {GlobalState} from '../../../GlobalState';
import Carousel from "react-elastic-carousel";
import ProductItem from '../utils/productItem/ProductItem';
import Loading from '../utils/loading/Loading';
import axios from 'axios';
import Header from "../../headers/Header";
import Footer from "../../footers/footer";

//Assets
import StudyMatStarredTexts from "../../../assets/Pics/Home/3-Study Materials/Starred Texts.png";
import StudyMatStarredTextsMobile from "../../../assets/Pics/Home/3-Study Materials/Starred Texts--mobile.png";
import WhyAchStarredTexts from "../../../assets/Pics/Home/6-Why Achievers/Starred Texts.png";
import WhyAchStarredTextsMobile from "../../../assets/Pics/Home/6-Why Achievers/Starred Texts--mobile.png";
import TopperMoreInfo from "../../../assets/Pics/Home/7-Topper Fav/Topper & More info.png";

const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 6 },
  ];
  const breakPointsYoutubeVids = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
function Products() {
    const state = useContext(GlobalState);
    const [products, setProducts] = state.HomeProductsAPI.products;
    const [isAdmin] = state.userAPI.isAdmin;
    const [token] = state.token;
    const [callback, setCallback] = state.productsAPI.callback;
    const [loading, setLoading] = useState(false);
    const [isCheck, setIsCheck] = useState(false);

    const handleCheck = (id) =>{
        products.forEach(product => {
            if(product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }

    const deleteProduct = async(id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('https://achievers-backend.herokuapp.com/api/destroy', {public_id},{
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`https://achievers-backend.herokuapp.com/api/products/${id}`, {
                headers: {Authorization: token}
            })

            await destroyImg
            await deleteProduct
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const checkAll = () =>{
        products.forEach(product => {
            product.checked = !isCheck
        })
        setProducts([...products])
        setIsCheck(!isCheck)
    }

    const deleteAll = () =>{
        products.forEach(product => {
            if(product.checked) deleteProduct(product._id, product.images.public_id)
        })
    }

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('https://achievers-backend.herokuapp.com/api/', {firstName: firstName, lastName: lastName, email: email, phone: phone})
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
    }
    
    const categoryIds = [];
    products.map((product) => 
        categoryIds.push(product.category)
    )
    
    function checkStudyMatCatId(cat) {
        return (cat === process.env.REACT_APP_STUDYMAT_CAT_ID);
    }

    function checkPopularEntranceCatId(cat) {
        return (cat === process.env.REACT_APP_POP_ENTRANCE_CAT_ID);
    }

    const checkProductinStudyMatCat = (categoryIds.some(checkStudyMatCatId));
    const checkProductinPopularEntranceCat = (categoryIds.some(checkPopularEntranceCatId));

    if(loading) return <div><Loading /></div>
    return (
        <>
        <Header />
        <video autoPlay loop muted className="hero__vid">
            <source src={"https://res.cloudinary.com/achievers-cloud/video/upload/v1627015069/test/HeroVid_bjawe3.mp4"} type="video/mp4" alt="Hero Banner"/>
        </video>
        <span className="hero__card1">
            <p className="hero__card1--heading">ACHIEVERS SCHOOL PROGRAM</p>
            <hr className="hero__card1--underline"></hr>
            <a href="https://achieverscircle.ml/school" className="hero__card--btn hero__card3-font">Class 4</a>
            <a href="https://achieverscircle.ml/school" className="hero__card--btn hero__card3-font">Class 5</a>
            <a href="https://achieverscircle.ml/school" className="hero__card--btn hero__card3-font">Class 6</a>
            <a href="https://achieverscircle.ml/school" className="hero__card--btn hero__card3-font">Class 7</a>
            <a href="https://achieverscircle.ml/school" className="hero__card--btn hero__card3-font">Class 8</a>
            <a href="https://achieverscircle.ml/school" className="hero__card--btn hero__card3-font">Class 9</a>
            <a href="https://achieverscircle.ml/school" className="hero__card--btn hero__card3-font">Class 10</a>
            <a href="https://achieverscircle.ml/school" className="hero__card--btn hero__card3-font">Class 11</a>
            <a href="https://achieverscircle.ml/school" className="hero__card--btn hero__card3-font">Class 12</a>
        </span>
        <span className="hero__card2">
            <p className="hero__card1--heading">ACHIEVERS GRADUATION PROGRAM</p>
            <hr className="hero__card1--underline"></hr>
            <a href="https://achieverscircle.ml/graduation" className="hero__card--btn hero__card3-font1">Chemistry</a>
            <a href="https://achieverscircle.ml/graduation" className="hero__card--btn hero__card3-font1">Maths</a>
            <a href="https://achieverscircle.ml/graduation" className="hero__card--btn hero__card3-font1">Physics</a>
            <a href="https://achieverscircle.ml/graduation" className="hero__card--btn hero__card3-font1">Statistics</a>
            <a href="https://achieverscircle.ml/graduation" className="hero__card--btn hero__card3-font1">Comp Sc.</a>
            <a href="https://achieverscircle.ml/graduation" className="hero__card--btn hero__card3-font1">Economics</a>
            <a href="https://achieverscircle.ml/graduation" className="hero__card--btn hero__card3-font1">Bio Sc.</a>
            <a href="https://achieverscircle.ml/graduation" className="hero__card--btn hero__card3-font1">Literature</a>
            <a href="https://achieverscircle.ml/graduation" className="hero__card--btn hero__card3-font1">Others</a>
        </span>
        <span className="hero__card3">
            <p className="hero__card1--heading">ACHIEVERS ENTRANCE PROGRAM</p>
            <hr className="hero__card1--underline"></hr>
            <a href="https://achieverscircle.ml/entrance" className="hero__card--btn hero__card3-font2">IIT-JEE (Main & Adv)</a>
            <a href="https://achieverscircle.ml/entrance" className="hero__card--btn hero__card3-font1">NEET</a>
            <a href="https://achieverscircle.ml/entrance" className="hero__card--btn hero__card3-font2">KVPY & Olympiad</a>
            <a href="https://achieverscircle.ml/entrance" className="hero__card--btn hero__card3-font1">IIT-JAM</a>
            <a href="https://achieverscircle.ml/entrance" className="hero__card--btn hero__card3-font1">BL-BT</a>
            <a href="https://achieverscircle.ml/entrance" className="hero__card--btn hero__card3-font2">Other MSc entrances</a>
            <a href="https://achieverscircle.ml/entrance" className="hero__card--btn hero__card3-font1">CSIR-NET</a>
            <a href="https://achieverscircle.ml/entrance" className="hero__card--btn hero__card3-font1">CSIR + Gate</a>
            <a href="https://achieverscircle.ml/entrance" className="hero__card--btn hero__card3-font1">Others</a>
        </span>

        {/* Achievers Study Materials  */}
            <h1 className="ach__studyMat--heading">ACHIEVERS STUDY MATERIALS</h1>
            <hr className="ach__studyMat--underline"></hr>
            <a className="ach__studyMat--exploreBtn" href="/our_courses#searchProducts">EXPLORE</a>
            
            <span>
                <span className="ach__studyMat--innovativeStudyMat">Innovative</span>
                <span className="ach__studyMat--innovativeStudyMat ach__studyMat--studyMat"> Study Materials</span>
                <img className="ach__studyMat--starredTexts" src={StudyMatStarredTexts} alt="Benefits" />
                <img className="ach__studyMat--starredTexts--mobile" src={StudyMatStarredTextsMobile} alt="Benefits" />
            </span>
            <p className="ach__stdyMat--carefully">Carefully prepared by the experts at Achievers</p>

        {
            isAdmin && 
            <div className="delete-all">
                <span>Select all</span>
                <input type="checkbox" checked={isCheck} onChange={checkAll} />
                <button onClick={deleteAll}>DELETE ALL</button>
            </div>
        }

        <div className="ach__studyMat--products">
        <Carousel className="ach__studyMat--productsCarousel" breakPoints={breakPoints}>
        
            {
                checkProductinStudyMatCat ?
                products.map(product => {
                    // console.log((categoryIds.some(checkCatId)));
                    return (product.category === process.env.REACT_APP_STUDYMAT_CAT_ID)
                        ? <ProductItem key={product._id} product={product} isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} /> 
                        : null
                })
                : <p className="ach__cat--noProducts">Stay tuned! More study materials coming soon...</p>
            }
            </Carousel>
        </div>

        {products.length === 0 && <Loading />}
        
        <div className="ach__allIndiaPart">
            <iframe className="ach__allIndiaVid" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAchieversCirclePrivateLimited%2Fvideos%2F1415833671799794%2F&show_text=false&width=560&t=0" scrolling="no" frameBorder="0" allowFullScreen={true} allow="clipboard-write; encrypted-media; picture-in-picture; web-share" title="Nikita Chirpal Interview"></iframe>
            <div className="ach__allIndiaEntranceTest">
                <p className="ach__allIndiaEntranceTest--heading">ACHIEVERS ALL INDIA ENTRANCE TEST SERIES</p>
                <hr className="ach__allIndiaEntranceTest--underline"></hr>
                <p className="ach__allIndiaEntranceTest--description">Our integrated teaching approach not only makes you shine in your school / board exams but also ensures that you are listed as a top Achiever in All India Entrance exams</p>
                
                <a className="ach__allIndiacard--btn ach__allIndiacard--btnNeet" href="https://achieverscircle.ml/test">NEET
                    <svg className="ach__allIndiaArrow" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0148 12.7583L14.2417 7.98525C13.9118 7.65534 13.3777 7.65534 13.0486 7.98525C12.7187 8.31516 12.7187 8.84925 13.0486 9.17832L16.5257 12.6562H7.59375C7.128 12.6562 6.75 13.0343 6.75 13.5C6.75 13.9658 7.128 14.3438 7.59375 14.3438H16.5257L13.0486 17.8208C12.7187 18.1508 12.7187 18.6848 13.0486 19.0139C13.3785 19.3438 13.9126 19.3438 14.2416 19.0139L19.0147 14.2408C19.2172 14.0383 19.2796 13.7616 19.2341 13.4992C19.2797 13.2384 19.2164 12.9608 19.0148 12.7583ZM13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9562 27 27 20.9554 27 13.5C27 6.04465 20.9562 0 13.5 0ZM13.5 25.3125C6.9761 25.3125 1.6875 20.0239 1.6875 13.5C1.6875 6.9761 6.9761 1.6875 13.5 1.6875C20.0239 1.6875 25.3125 6.9761 25.3125 13.5C25.3125 20.0239 20.0239 25.3125 13.5 25.3125Z" fill="white"/>
                    </svg>
                </a>
                <a className="ach__allIndiacard--btn ach__allIndiacard--btnKVPY" href="https://achieverscircle.ml/test">KVPY
                    <svg className="ach__allIndiaArrow" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0148 12.7583L14.2417 7.98525C13.9118 7.65534 13.3777 7.65534 13.0486 7.98525C12.7187 8.31516 12.7187 8.84925 13.0486 9.17832L16.5257 12.6562H7.59375C7.128 12.6562 6.75 13.0343 6.75 13.5C6.75 13.9658 7.128 14.3438 7.59375 14.3438H16.5257L13.0486 17.8208C12.7187 18.1508 12.7187 18.6848 13.0486 19.0139C13.3785 19.3438 13.9126 19.3438 14.2416 19.0139L19.0147 14.2408C19.2172 14.0383 19.2796 13.7616 19.2341 13.4992C19.2797 13.2384 19.2164 12.9608 19.0148 12.7583ZM13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9562 27 27 20.9554 27 13.5C27 6.04465 20.9562 0 13.5 0ZM13.5 25.3125C6.9761 25.3125 1.6875 20.0239 1.6875 13.5C1.6875 6.9761 6.9761 1.6875 13.5 1.6875C20.0239 1.6875 25.3125 6.9761 25.3125 13.5C25.3125 20.0239 20.0239 25.3125 13.5 25.3125Z" fill="white"/>
                    </svg>
                </a>
                <a className="ach__allIndiacard--btn" href="https://achieverscircle.ml/test">
                    IIT-JEE
                    <p className="ach__allIndiaIITJEEMainAdv">MAIN & ADV.</p>
                    <svg className="ach__allIndiaArrow" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0148 12.7583L14.2417 7.98525C13.9118 7.65534 13.3777 7.65534 13.0486 7.98525C12.7187 8.31516 12.7187 8.84925 13.0486 9.17832L16.5257 12.6562H7.59375C7.128 12.6562 6.75 13.0343 6.75 13.5C6.75 13.9658 7.128 14.3438 7.59375 14.3438H16.5257L13.0486 17.8208C12.7187 18.1508 12.7187 18.6848 13.0486 19.0139C13.3785 19.3438 13.9126 19.3438 14.2416 19.0139L19.0147 14.2408C19.2172 14.0383 19.2796 13.7616 19.2341 13.4992C19.2797 13.2384 19.2164 12.9608 19.0148 12.7583ZM13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9562 27 27 20.9554 27 13.5C27 6.04465 20.9562 0 13.5 0ZM13.5 25.3125C6.9761 25.3125 1.6875 20.0239 1.6875 13.5C1.6875 6.9761 6.9761 1.6875 13.5 1.6875C20.0239 1.6875 25.3125 6.9761 25.3125 13.5C25.3125 20.0239 20.0239 25.3125 13.5 25.3125Z" fill="white"/>
                    </svg>
                </a>
                <a className="ach__allIndiacard--btn" href="https://achieverscircle.ml/test">
                    IIT-JAM 
                    <p className="ach__allIndiaIITJAMCrash">CRASH COURSE</p>
                    <svg className="ach__allIndiaArrow" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0148 12.7583L14.2417 7.98525C13.9118 7.65534 13.3777 7.65534 13.0486 7.98525C12.7187 8.31516 12.7187 8.84925 13.0486 9.17832L16.5257 12.6562H7.59375C7.128 12.6562 6.75 13.0343 6.75 13.5C6.75 13.9658 7.128 14.3438 7.59375 14.3438H16.5257L13.0486 17.8208C12.7187 18.1508 12.7187 18.6848 13.0486 19.0139C13.3785 19.3438 13.9126 19.3438 14.2416 19.0139L19.0147 14.2408C19.2172 14.0383 19.2796 13.7616 19.2341 13.4992C19.2797 13.2384 19.2164 12.9608 19.0148 12.7583ZM13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9562 27 27 20.9554 27 13.5C27 6.04465 20.9562 0 13.5 0ZM13.5 25.3125C6.9761 25.3125 1.6875 20.0239 1.6875 13.5C1.6875 6.9761 6.9761 1.6875 13.5 1.6875C20.0239 1.6875 25.3125 6.9761 25.3125 13.5C25.3125 20.0239 20.0239 25.3125 13.5 25.3125Z" fill="white"/>
                    </svg>
                </a>
                <a className="ach__allIndiacard--btn" href="https://achieverscircle.ml/test">
                    CU & DU
                    <p className="ach__allIndiaCuDu">ENTR. EXAMS</p>
                    <svg className="ach__allIndiaArrow" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0148 12.7583L14.2417 7.98525C13.9118 7.65534 13.3777 7.65534 13.0486 7.98525C12.7187 8.31516 12.7187 8.84925 13.0486 9.17832L16.5257 12.6562H7.59375C7.128 12.6562 6.75 13.0343 6.75 13.5C6.75 13.9658 7.128 14.3438 7.59375 14.3438H16.5257L13.0486 17.8208C12.7187 18.1508 12.7187 18.6848 13.0486 19.0139C13.3785 19.3438 13.9126 19.3438 14.2416 19.0139L19.0147 14.2408C19.2172 14.0383 19.2796 13.7616 19.2341 13.4992C19.2797 13.2384 19.2164 12.9608 19.0148 12.7583ZM13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9562 27 27 20.9554 27 13.5C27 6.04465 20.9562 0 13.5 0ZM13.5 25.3125C6.9761 25.3125 1.6875 20.0239 1.6875 13.5C1.6875 6.9761 6.9761 1.6875 13.5 1.6875C20.0239 1.6875 25.3125 6.9761 25.3125 13.5C25.3125 20.0239 20.0239 25.3125 13.5 25.3125Z" fill="white"/>
                    </svg>    
                </a>
                <a className="ach__allIndiacard--btn ach__allIndiacard--btnCSIR" href="https://achieverscircle.ml/test">
                    CSIR-NET &nbsp; + GATE
                    <svg className="ach__allIndiaArrow" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0148 12.7583L14.2417 7.98525C13.9118 7.65534 13.3777 7.65534 13.0486 7.98525C12.7187 8.31516 12.7187 8.84925 13.0486 9.17832L16.5257 12.6562H7.59375C7.128 12.6562 6.75 13.0343 6.75 13.5C6.75 13.9658 7.128 14.3438 7.59375 14.3438H16.5257L13.0486 17.8208C12.7187 18.1508 12.7187 18.6848 13.0486 19.0139C13.3785 19.3438 13.9126 19.3438 14.2416 19.0139L19.0147 14.2408C19.2172 14.0383 19.2796 13.7616 19.2341 13.4992C19.2797 13.2384 19.2164 12.9608 19.0148 12.7583ZM13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9562 27 27 20.9554 27 13.5C27 6.04465 20.9562 0 13.5 0ZM13.5 25.3125C6.9761 25.3125 1.6875 20.0239 1.6875 13.5C1.6875 6.9761 6.9761 1.6875 13.5 1.6875C20.0239 1.6875 25.3125 6.9761 25.3125 13.5C25.3125 20.0239 20.0239 25.3125 13.5 25.3125Z" fill="white"/>
                    </svg>
                </a>
                <a className="ach__allIndiacard--btn" href="https://achieverscircle.ml/test">
                    TIFR
                    <p className="ach__allIndiaTIRFEntr">ENTR. TEST</p>
                    <svg className="ach__allIndiaArrow" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0148 12.7583L14.2417 7.98525C13.9118 7.65534 13.3777 7.65534 13.0486 7.98525C12.7187 8.31516 12.7187 8.84925 13.0486 9.17832L16.5257 12.6562H7.59375C7.128 12.6562 6.75 13.0343 6.75 13.5C6.75 13.9658 7.128 14.3438 7.59375 14.3438H16.5257L13.0486 17.8208C12.7187 18.1508 12.7187 18.6848 13.0486 19.0139C13.3785 19.3438 13.9126 19.3438 14.2416 19.0139L19.0147 14.2408C19.2172 14.0383 19.2796 13.7616 19.2341 13.4992C19.2797 13.2384 19.2164 12.9608 19.0148 12.7583ZM13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9562 27 27 20.9554 27 13.5C27 6.04465 20.9562 0 13.5 0ZM13.5 25.3125C6.9761 25.3125 1.6875 20.0239 1.6875 13.5C1.6875 6.9761 6.9761 1.6875 13.5 1.6875C20.0239 1.6875 25.3125 6.9761 25.3125 13.5C25.3125 20.0239 20.0239 25.3125 13.5 25.3125Z" fill="white"/>
                    </svg>
                </a>
                <a className="ach__allIndiacard--btn ach__allIndiacard--btnBHU" href="https://achieverscircle.ml/test">
                    BHU & IISER
                    <svg className="ach__allIndiaArrow" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0148 12.7583L14.2417 7.98525C13.9118 7.65534 13.3777 7.65534 13.0486 7.98525C12.7187 8.31516 12.7187 8.84925 13.0486 9.17832L16.5257 12.6562H7.59375C7.128 12.6562 6.75 13.0343 6.75 13.5C6.75 13.9658 7.128 14.3438 7.59375 14.3438H16.5257L13.0486 17.8208C12.7187 18.1508 12.7187 18.6848 13.0486 19.0139C13.3785 19.3438 13.9126 19.3438 14.2416 19.0139L19.0147 14.2408C19.2172 14.0383 19.2796 13.7616 19.2341 13.4992C19.2797 13.2384 19.2164 12.9608 19.0148 12.7583ZM13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9562 27 27 20.9554 27 13.5C27 6.04465 20.9562 0 13.5 0ZM13.5 25.3125C6.9761 25.3125 1.6875 20.0239 1.6875 13.5C1.6875 6.9761 6.9761 1.6875 13.5 1.6875C20.0239 1.6875 25.3125 6.9761 25.3125 13.5C25.3125 20.0239 20.0239 25.3125 13.5 25.3125Z" fill="white"/>
                    </svg>
                </a>
                <a className="ach__allIndiacard--btn ach__allIndiacard--btnViewAll" href="https://achieverscircle.ml/test">
                    View All
                    <svg className="ach__allIndiaArrow" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0148 12.7583L14.2417 7.98525C13.9118 7.65534 13.3777 7.65534 13.0486 7.98525C12.7187 8.31516 12.7187 8.84925 13.0486 9.17832L16.5257 12.6562H7.59375C7.128 12.6562 6.75 13.0343 6.75 13.5C6.75 13.9658 7.128 14.3438 7.59375 14.3438H16.5257L13.0486 17.8208C12.7187 18.1508 12.7187 18.6848 13.0486 19.0139C13.3785 19.3438 13.9126 19.3438 14.2416 19.0139L19.0147 14.2408C19.2172 14.0383 19.2796 13.7616 19.2341 13.4992C19.2797 13.2384 19.2164 12.9608 19.0148 12.7583ZM13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9562 27 27 20.9554 27 13.5C27 6.04465 20.9562 0 13.5 0ZM13.5 25.3125C6.9761 25.3125 1.6875 20.0239 1.6875 13.5C1.6875 6.9761 6.9761 1.6875 13.5 1.6875C20.0239 1.6875 25.3125 6.9761 25.3125 13.5C25.3125 20.0239 20.0239 25.3125 13.5 25.3125Z" fill="white"/>
                    </svg>
                </a>
            </div>
        </div>

        {/* Achievers Popular Entrance Courses */}
        <div>
            <h1 className="ach__popularEntranceCourses--heading">ACHIEVERS POPULAR ENTRANCE COURSES</h1>
            <hr className="ach__popularEntranceCourses--underline"></hr>
            <a className="ach__popularEntranceCourses--viewAllBtn" href="https://achieverscircle.ml/entrance">VIEW ALL</a>

            <p className="ach__popularEntranceCourses--description">
            Achievers provides comprehensive test preparatory services for students preparing for medical, engineering and various All-India entrance examinations for Class 11, 12 as well as college students.
            </p>

            {
            isAdmin && 
                <div className="delete-all--popularEntranceCourses">
                    <span>Select all</span>
                    <input type="checkbox" checked={isCheck} onChange={checkAll} />
                    <button onClick={deleteAll}>Delete ALL</button>
                </div>
             }

            <div className="popularEntranceProducts">
            <Carousel breakPoints={breakPoints}>
            {   
             checkProductinPopularEntranceCat ?
                products.map(product => {
                    // console.log(product);
                    return product.category === process.env.REACT_APP_POP_ENTRANCE_CAT_ID
                        ? <ProductItem key={product._id} product={product} isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} /> 
                        : null
                })
                : <p className="ach__cat--noProducts">Stay tuned! More courses coming soon...</p>
            }
            </Carousel>
        </div>

        {products.length === 0 && <Loading />}

        <video autoPlay loop muted className="ach__popularEntranceCourses--vid">
            <source src={"https://res.cloudinary.com/achievers-cloud/video/upload/v1627028321/test/BottomHomeVid_y42lij.mp4"} type="video/mp4" alt="Hero Banner"/>
        </video>
        </div>

        {/* Achievers Hall of Fame */}
        <div className="ach__hallOfFame">
            <h1 className="ach__hallOfFame--heading">ACHIEVER'S HALL OF FAME</h1>
            <hr className="ach__hallOfFame--underline"></hr>

            <div className="ach__hallOfFame--vidCards">
            <Carousel breakPoints={breakPointsYoutubeVids}>
                <span className="ach__hallOfFame--vidCard">
                    <p className="ach__hallOfFame--vidCardHeading">ACHIEVERS CIRCLE | AN INTERVIEW OF TUHINA KHAN</p>
                    <iframe className="ach__hallOfFame--vidCardLink" src="https://www.youtube.com/embed/CxmobDo4Nc4" title="Interview of Tuhina Khan"></iframe>
                </span>
                <span className="ach__hallOfFame--vidCard">
                    <p className="ach__hallOfFame--vidCardHeading">ACHIEVERS CIRCLE | AN INTERVIEW OF SAMPREETI BHATTACHARYA</p>
                    <iframe className="ach__hallOfFame--vidCardLink" src="https://www.youtube.com/embed/urW2bvemf6w" title="Interview of Sampreeti Bhattacharya"></iframe>
                </span>
                <span className="ach__hallOfFame--vidCard">
                    <p className="ach__hallOfFame--vidCardHeading">ACHIEVERS CIRCLE | MOTIVATIONAL SPEECH BY DR. RICKDEV SEN</p>
                    <iframe className="ach__hallOfFame--vidCardLink" src="https://www.youtube.com/embed/WvhujNlaETU" title="Motivational Speech by Dr. Rickdev Sen"></iframe>
                </span>
                <span className="ach__hallOfFame--vidCard">
                    <p className="ach__hallOfFame--vidCardHeading">ACHIEVERS CIRCLE | AN INTERVIEW OF UDIT CHAKRABORTY</p>
                    <iframe className="ach__hallOfFame--vidCardLink" src="https://www.youtube.com/embed/TSPqbBqcSdg" title="Interview of Udit Chakraborty"></iframe>
                </span>
                <span className="ach__hallOfFame--vidCard">
                    <p className="ach__hallOfFame--vidCardHeading">ACHIEVERS CIRCLE | AN INTERVIEW OF ANIRUDDHA NAG</p>
                    <iframe className="ach__hallOfFame--vidCardLink" src="https://www.youtube.com/embed/l_O6ZdZ0wBo" title="An Interview of Aniruddha Nag"></iframe>
                </span>
                <span className="ach__hallOfFame--vidCard">
                    <p className="ach__hallOfFame--vidCardHeading">ACHIEVERS CIRCLE | AN INTERVIEW OF KUNTAL CHATTERJEE</p>
                    <iframe className="ach__hallOfFame--vidCardLink" src="https://www.youtube.com/embed/z2SUEIB-FJY" title="Interview of Kuntal Chatterjee"></iframe>
                </span>
                <span className="ach__hallOfFame--vidCard">
                    <p className="ach__hallOfFame--vidCardHeading">ACHIEVERS CIRCLE | SPEECH FROM ACPL CMD</p>
                    <iframe className="ach__hallOfFame--vidCardLink" src="https://www.youtube.com/embed/COu-2HTsJQU" title="Speech from ACPL CMD"></iframe>
                </span>
                </Carousel>
            </div>    
        </div>
        
        {/* Why Achievers */}
        <div className="ach_whyAch-generalEnq">
        <span className="ach__whyAch">
            <h1 className="ach__whyAch--heading">WHY ACHIEVERS?</h1>
            <hr className="ach__whyAch--underline"></hr>
            <img className="ach__whyAch--starredTexts" src={WhyAchStarredTexts} alt="Benefits" />
            <img className="ach__whyAch--starredTexts--mobile" src={WhyAchStarredTextsMobile} alt="Benefits" />
        </span>

        {/* General Enquiry */}
        <span className="ach__generalEnquiry">
            <h1 className="ach__generalEnquiry--heading">GENERAL ENQUIRY</h1>
            <hr className="ach__generalEnquiry--underline"></hr>

            <form className="ach__generalEnquiry--form" onSubmit={handleSubmit}>
            <input value={firstName} onChange = {(e) => {setFirstName(e.target.value); console.log(firstName);}} className="ach__generalEnquiry--firstName" type="text" placeholder="Enter First Name"/>
            <input value={lastName} onChange = {(e) => {setLastName(e.target.value); console.log(lastName);}} className="ach__generalEnquiry--lastName" type="text" placeholder="Enter Last Name"/>
            <input value={email} onChange = {(e) => {setEmail(e.target.value); console.log(email);}}  className="ach__generalEnquiry--email" type="email" placeholder="Enter Email"/>
            <input value={phone} onChange = {(e) => {setPhone(e.target.value); console.log(phone);}} className="ach__generalEnquiry--phone" type="text" placeholder="Enter Phone No."/>
            
            <button className="ach__generalEnquiry--submit" type="submit" value="Submit">Submit</button>
            </form>
            <a className="ach__generalEnquiry--faq" href="/">FAQs</a>
        </span>
        </div>

        <img className="ach__topperFavPic" src={TopperMoreInfo} alt="Topper's Favorite"/>

        <Footer />
        </>
    )
}

export default Products;
