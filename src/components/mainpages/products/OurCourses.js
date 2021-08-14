import React, {useContext, useState} from "react";
import {GlobalState} from '../../../GlobalState';
import ProductItem from '../utils/productItem/ProductItem';
import Loading from '../utils/loading/Loading';
import axios from 'axios';
import LoadMore from './LoadMore';
import Header from "../../headers/Header";
import Footer from "../../footers/footer";
import StudentCards from "./StudentCards";
import students from "./students";

//Assets
import TopBanner from "../../../assets/Pics/Our Courses/Top Banner.png";
import TickIcon from "../../../assets/Pics/Our Courses/tick icon.png";
import SmallBanner1 from "../../../assets/Pics/Our Courses/Everything you need Section/small banner 1.png";
import SmallBanner2 from "../../../assets/Pics/Our Courses/Everything you need Section/small banner 2.png";
import SmallBanner3 from "../../../assets/Pics/Our Courses/Everything you need Section/small banner 3.png";
import SmallBanner4 from "../../../assets/Pics/Our Courses/Everything you need Section/small banner 4.png";
import SmallBanner5 from "../../../assets/Pics/Our Courses/Everything you need Section/small banner 5.png";
import SmallBanner6 from "../../../assets/Pics/Our Courses/Everything you need Section/small banner 6.png";
import ExpTeachers from "../../../assets/Pics/Our Courses/Experience the Best Section/Experienced teachers Pic.png";
import TopQualityQuestions from "../../../assets/Pics/Our Courses/Experience the Best Section/Top quality questions.png";
import PersonalizedDetailedAnalysis from "../../../assets/Pics/Our Courses/Experience the Best Section/Personalized detailed analysis.png";
import LiveTest from "../../../assets/Pics/Our Courses/Experience the Best Section/Live test.png";
import CommunityForLearning from "../../../assets/Pics/Our Courses/Experience the Best Section/Community for learning.png";
import GraphicPresentation from "../../../assets/Pics/Our Courses/Experience the Best Section/Graphic presentation.png";
import BoyLeft from "../../../assets/Pics/Our Courses/Hear it directly Section/Boy Left.png";
import GirlRight from "../../../assets/Pics/Our Courses/Hear it directly Section/Girl Right.png";


function OurCourses() {

    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.productsAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    const handleCheck = (id) =>{
        products.forEach(product => {
            if(product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }

    const deleteProduct = async(id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('https://achieverscircle.herokuapp.com/api/destroy', {public_id},{
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`https://achieverscircle.herokuapp.com/api/products/${id}`, {
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

    if(loading) return <div><Loading /></div>


    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    // StudentCards
    function createEntry(students) {
        return (
          <StudentCards
            key={students.id}
            pic={students.pic}
            name={students.name}
            achievements={students.achievements}
            review={students.review}
          />
        );
      }

    return (
        <>
        <Header />

        <div>
            <div className="courses__goBackLink">
                <a className="courses__goBackLink--a" href="/our_courses">Our Courses /</a>
                <a className="courses__goBackLink--a courses__goBackLink--a--ourCourses" href="#searchProducts"> Achievers Products</a>
            </div>
            <img className="courses__topBanner" src={TopBanner} alt="Top Banner"/>

            <div className="courses__joinCommunity">
                <img className="courses__joinCommunity--tickIcon" src={TickIcon} alt="Tick icon"/>
                <p className="courses__joinCommunity--trustedBy">Trusted by</p>
                <p className="courses__joinCommunity--sixThousandStudents">6,000+ students</p>
                <hr className="courses__joinCommunity--verticalLine"></hr>
                <p className="courses__joinCommunity--joinCommunity">Join our community</p>
                <a className="courses__joinCommunity--contact" href="about#ach__about__contactUs">Contact Us</a>
                <a className="courses__joinCommunity--downloadApp" href="https://play.google.com/store/apps/details?id=co.jarvis.achi" target="_blank" rel="noopener noreferrer">Download our App</a>
            </div>

            <div className="courses__everythingYouNeed">
                <p className="courses__everythingYouNeed--heading">Everything You Need For Your Entrance Exam Preparation</p>
                <p className="courses__everythingYouNeed--description">Online Courses, Practice Question Bank, Mock Test Series, Rankers' Test Series, Study Materials. Doubt Clearing Sessions and more....</p>

                <div className="courses__everythingYouNeed--RowPics">
                    <img className="courses__everythingYouNeed--RowPics--smallBanners" src={SmallBanner1} alt="Card"/>
                    <img className="courses__everythingYouNeed--RowPics--smallBanners" src={SmallBanner2} alt="Card"/>
                    <img className="courses__everythingYouNeed--RowPics--smallBanners" src={SmallBanner3} alt="Card"/>
                </div>
                <div className="courses__everythingYouNeed--RowPics">
                    <img className="courses__everythingYouNeed--RowPics--smallBanners" src={SmallBanner4} alt="Card"/>
                    <img className="courses__everythingYouNeed--RowPics--smallBanners" src={SmallBanner5} alt="Card"/>
                    <img className="courses__everythingYouNeed--RowPics--smallBanners" src={SmallBanner6} alt="Card"/>
                </div>
            </div>

            {/* Achievers Products */}
            <div className="courses__achProducts" id="searchProducts">
                <p className="courses__achProducts--heading">Achievers Products: All-India Entrance Exams</p>
                <p className="courses__achProducts--description">Some Selected Study Material and products for various popular All India Entrance Exams like - JEE, NEET, CSIR-UGC NET (Chemical Sciences), IIT-JAM, BHU, DU, CU, HSC, IISER, IACS, PU, etc</p>
                <div className="courses__filters">
                    <span className="courses__filters--categoryRow">
                        <span>Filters: </span>
                        <select className="courses__filters--categoryRow--dropdown" name="category" value={category} onChange={handleCategory} >
                            <option className="courses__filters--categoryRow--dropdown--AllProds" value=''>All Products</option>
                            {
                                categories.map(category => (
                                    <option value={"category=" + category._id} key={category._id}>
                                        {category.name}
                                    </option>
                                ))
                            }
                        </select>
                    </span>
                    <input className="courses__filters--searchBar" type="text" value={search} placeholder="Search products..."
                    onChange={e => setSearch(e.target.value.toLowerCase())} />
                    <span className="courses__filters--sortRow">
                        <span>Sort By: </span>
                        <select className="courses__filters--sortRow--dropdown" value={sort} onChange={e => setSort(e.target.value)} >
                            <option value=''>Newest</option>
                            <option value='sort=oldest'>Oldest</option>
                            <option value='sort=-sold'>Bestselling</option>
                            <option value='sort=-price'>Price: High-Low</option>
                            <option value='sort=price'>Price: Low-High</option>
                        </select>
                    </span>
                </div>    
        
                {
                    isAdmin && 
                    <div className="courses__delete-all">
                        <span>Select all</span>
                        <input type="checkbox" checked={isCheck} onChange={checkAll} />
                        <button onClick={deleteAll}>Delete ALL</button>
                    </div>
                }

                <div className="products courses__products">
                    {
                        products.map(product => {
                            return <ProductItem key={product._id} product={product}
                            isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                        })
                    } 
                </div>
                
                <LoadMore />
                {products.length === 0 && <Loading />}
            </div>
            
            {/* Experience the Best */}
            <div className="courses__experienceTheBest">
                    <span className="courses__experienceTheBest--heading">Experience the Best at </span>
                    <span className="courses__experienceTheBest--heading courses__experienceTheBest--heading--A">A</span>
                    <span className="courses__experienceTheBest--heading courses__experienceTheBest--heading--CHIEVERS">CHIEVERS</span>
                    

                <div className="courses__experienceTheBest--Row">    
                    <div className="courses__experienceTheBest--Row1Card">
                        <img className="courses__experienceTheBest--Pic" src={ExpTeachers} alt="Icon"/>
                        <p className="courses__experienceTheBest--Heading">Experienced Teachers</p>
                        <p className="courses__experienceTheBest--description">Learn with India's Best Faculty with a total experience of more than 20 years, having taught more than 5000+ students.</p>
                    </div>
                    <div className="courses__experienceTheBest--Row1Card">
                        <img className="courses__experienceTheBest--Pic" src={TopQualityQuestions} alt="Icon"/>
                        <p className="courses__experienceTheBest--Heading">Top Quality Questions</p>
                        <p className="courses__experienceTheBest--description">All questions and solutions, designed by top exam experts, based on latest patterns and actual exam level</p>
                    </div>
                    <div className="courses__experienceTheBest--Row1Card">
                        <img className="courses__experienceTheBest--Pic" src={PersonalizedDetailedAnalysis} alt="Icon"/>
                        <p className="courses__experienceTheBest--Heading">Personalized, detailed Analysis</p>
                        <p className="courses__experienceTheBest--description courses__experienceTheBest--description--mobile">Know your weaknesses, strengths and everything else that you need to know to improve your score and rank.</p>
                    </div>
                </div>

                <div className="courses__experienceTheBest--Row">    
                    <div className="courses__experienceTheBest--Row2Card">
                        <img className="courses__experienceTheBest--Pic" src={LiveTest} alt="Icon"/>
                        <p className="courses__experienceTheBest--Heading">Live Tests for Real Exam Experience</p>
                        <p className="courses__experienceTheBest--description courses__experienceTheBest--description--mobile">Get your All-India Rank and feel the thrill of a real-exam. Groom your pressure handling and time management skills</p>
                    </div>
                    <div className="courses__experienceTheBest--Row2Card">
                        <img className="courses__experienceTheBest--Pic" src={CommunityForLearning} alt="Icon"/>
                        <p className="courses__experienceTheBest--Heading">Community for Learning</p>
                        <p className="courses__experienceTheBest--description courses__experienceTheBest--description--mobile">Clear all your queries and doubts on our discussion platform. Directly interact with experts, teachers and your peers.</p>
                    </div>
                    <div className="courses__experienceTheBest--Row2Card">
                        <img className="courses__experienceTheBest--Pic" src={GraphicPresentation} alt="Icon"/>
                        <p className="courses__experienceTheBest--Heading">Graphic Presentations</p>
                        <p className="courses__experienceTheBest--description">We put focus on accurate representation, as intricate topics can be best interpreted with the assistance of correct visual aids.</p>
                    </div>
                </div>
            </div>

            {/* Hear it directly from our Students */}
            <div className="courses__hearFromStudents">
                <div className="courses__hearFromStudents--headingPart">
                    <img  className="courses__hearFromStudents--headingPic"src={BoyLeft} alt="Boy"/>
                    <span className="courses__hearFromStudents--heading">Hear it directly from our Students</span>
                    <img className="courses__hearFromStudents--headingPic courses__hearFromStudents--headingPicGirl" src={GirlRight} alt="Girl"/>
                </div>
                <div className="courses__hearFromStudents--studentCards">{students.map(createEntry)}</div>
            </div>
        </div>

        <Footer />
        </>
    )
}

export default OurCourses;