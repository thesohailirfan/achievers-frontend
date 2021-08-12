import React from 'react';
import "./about.css";
import Header from "../../headers/Header";
import Footer from "../../footers/footer";

//Assets
import PresidentPic from "../../../assets/Pics/About/President.png";
import Banner from "../../../assets/Pics/About/study/Banner.png";
import Study1 from "../../../assets/Pics/About/study/study1.png";
import Study2 from "../../../assets/Pics/About/study/study2.png";
import Study3 from "../../../assets/Pics/About/study/study3.png";
import Study4 from "../../../assets/Pics/About/study/study4.png";
import Study5 from "../../../assets/Pics/About/study/study5.png";
import Study6 from "../../../assets/Pics/About/study/study6.png";
import VP1Pic from "../../../assets/Pics/About/VP/VP1.png";
import VP2Pic from "../../../assets/Pics/About/VP/VP2.png";
import VP3Pic from "../../../assets/Pics/About/VP/VP3.png";
import AcademicCoordinator1 from "../../../assets/Pics/About/Team/Indranil Dalui.png";
import AcademicCoordinator2 from "../../../assets/Pics/About/Team/Rashbehari Choudhury.png";
import AdministrativeDept1 from "../../../assets/Pics/About/Team/Anandarup Das.png";
import AdministrativeDept2 from "../../../assets/Pics/About/Team/Simantini Debnath.png";
import ExecutiveOfficer1 from "../../../assets/Pics/About/Team/Amir Mollah.png";
import ExecutiveOfficer2 from "../../../assets/Pics/About/Team/Swapan Ghosh.png";

export default function About() {
    return (
        <>
        <Header />
        <img className="ach__about--banner" src={Banner} alt="Banner"/>
        <div className="ach__about">
            <h1 className="ach__about--heading--aboutAch">About 
            <span className="ach__about--heading--A"> A</span>
            <span className="ach__about--heading--CHIEVERS">CHIEVERS</span>
            </h1>

            <h3 className="ach__about--subHeading--corporateEstablishment">Corporate Establishment as a Private Limited Company</h3>
            <p className="ach__about--aboutAch--p">Since 1999, Achievers has been operating as a student-serving institution. It began operations in Jadavpur, Kolkata, with just one faculty member, Dr. Sujoy Roy Chowdhury (SRC), and three students in its first batch.</p>
            <p className="ach__about--aboutAch--p">It continued on its way, and year after year, more and more excellent teachers began to join us. We soon climbed to the pinnacle of our field of higher education. Today, we have approximately 3000 students (more than most large schools/colleges in Kolkata and related institutes).</p>
            <p className="ach__about--aboutAch--p">We decided to incorporate this as a private limited company in 2013, giving it a new name, and in 2014 we established: Achievers Circle Private Limited (ACPL) under the Companies Act, 1956 (No.1 of 1956), Government of West Bengal, India, and our corporate identity number is U80901WB2014PTC201663.</p>

            <h3 className="ach__about--subHeading--achSoFar">Achievements so far</h3>
            <p className="ach__about--aboutAch--p">We are very proud of what we have accomplished in the 15 years since the inception of these courses.  We are an institute that has consistently achieved outstanding results. We have been producing for several years in a row.</p>
            <span>
                <li className="ach__about--aboutAch--li">University Toppers (1st class First, Gold medalist from different West Bengal Universities)</li>
                <li className="ach__about--aboutAch--li">Entrance Test Toppers (IIT-JAM, IISER, ISM DHANBAD, HYDERABAD UNIVERSITY, INDIAN ASSOCIATION FOR THE CULTURE OF SCIENCE, and several other top Indian Universities) have always been on our side on various occasions.</li>
                <li className="ach__about--aboutAch--li">International Accomplishments: Many of our alumni are now working as Research Associates/University Faculty/Industrial Sectors in the United Kingdom, Germany, Japan, and the United States.</li>
            </span>

            <h3 className="ach__about--subHeading--achSoFar">Our work principle</h3>
            <p className="ach__about--aboutAch--pLeft">We at ACHIEVERS want to create outstanding educationalists, scientists, and technologists of the highest quality who will participate in research, design, and growth for a better India.</p>
            <p className="ach__about--aboutAch--pLeft">Our goal is not to become India's No. 1 Coaching Institute, but to assist India in achieving No. 1 status in several fields through our tiny contributions. In LIFE, we've shown that small but important contributions will make a big difference. We want to make such small contributions to help create a prosperous India.</p>
            <p className="ach__about--aboutAch--pLeft">Our mission is also to assist our country's economically deprived sectors by providing quality education and scholarships to assist them in completing their studies. We are proud to say that we have fulfilled a small portion of our vision, but we must continue to work tirelessly to become a leading organization.</p>
            <img className="ach__about--study1" src={Study1} alt="StudyPic"/>
            <p className="ach__about--aboutAch--p">We have very dynamic teachers who are capable of providing high-quality education and research. For the last five years, we have been implementing initiatives to retain the best faculty while still upgrading the teaching infrastructure. We also created an environment in which our teachers and students will achieve their full potential.</p>
            <p className="ach__about--aboutAch--p">At Achievers, we conclude that “I never teach my students; I just try to create environments in which they can learn.” : Albert Einstein said it best</p>
            <p className="ach__about--aboutAch--p">That is ACHIEVERS for you – an Institution with a Purpose!</p>
            <p className="ach__about--aboutAch--p">I am sure that with the active involvement of the entire ACHIEVERS family – students, teachers, staff, and alumni – and the help of the government, the Institute will achieve greater levels of excellence.</p>
        
            {/* Why Achievers */}
            <h1 className="ach__about--heading--aboutAch">Why 
            <span className="ach__about--heading--A"> A</span>
            <span className="ach__about--heading--CHIEVERS">CHIEVERS</span>
            </h1>

            <p className="ach__about--whyAch--p">Competition is all around us and it is getting tougher with each passing day. Often students who dream to be a doctor or engineer or want to specialize in other lucrative fields of science, fail to see their dreams come into action due to a lack of focused learning and proper guidance. To Achieve one’s dreams, a student needs to be mentored in the right direction for competitive exams, and combined with his/her hard work,
            <span className="ach__about--heading--CHIEVERS"> NOTHING IS IMPOSSIBLE!</span></p>
            
            <div className="ach__about--whyAch--flexDiv">
                <img className="ach__about--study2" src={Study2} alt="StudyPic"/>
                <div className="ach__about--whyAch--flexDiv--writing">
                    <p className="ach__about--whyAch--p"><span className="ach__about--heading--A">A</span><span className="ach__about--heading--CHIEVERS">CHIEVERS</span>  provides comprehensive test preparatory services for students preparing for various All-India Entrance Examinations for our school and college students. We provide our services through classroom-based coaching and digital and distance learning, which supplement our classroom courses and allow students to engage in self-paced learning, which supplements our classroom courses and allows students in self-paced learning. We also offer short-term classroom courses to prepare students for their upcoming school examinations.</p>
                    <p className="ach__about--whyAch--p">The comprehensively designed study material has been prepared after extensive and exhaustive research carried out by the expert faculty at <span className="ach__about--heading--A">A</span><span className="ach__about--heading--CHIEVERS">CHIEVERS</span>. Enrolling in our courses is a sure-shot way to success as it builds student’s aptitude for the exam. Innumerable students have cracked the tough nuts like IIT-JAM, TIFR, CSIR-NET & GATE, BHU, IISER, NEET, KVPY JEE MAINS & ADVANCED, etc. due to our comprehensive course material.</p>
                </div>
            </div>

            <h3 className="ach__about--subHeading--achSoFar">Achievers Edge</h3>
            <p className="ach__about--whyAch--p">We agree that the consistency of our curriculum design and the efficacy of our teaching methodologies have made us one of the top options for students who want to apply for different entrance and competitive courses, as shown by the number of selections made by our students.</p>
            <h3 className="ach__about--subHeading--achSoFar">Why <span className="ach__about--heading--A">A</span><span className="ach__about--heading--CHIEVERS">chievers</span>?</h3>
            <ul className="ach__about--whyAch--ul">
                <li className="ach__about--whyAch--li">&#9733; Disciplined and Focused</li>
                <li className="ach__about--whyAch--li">&#9733; Learning Environment</li>
                <li className="ach__about--whyAch--li">&#9733; Digital Learning Programs</li>
                <li className="ach__about--whyAch--li">&#9733; Interactive Teaching Approach</li>
                <li className="ach__about--whyAch--li">&#9733; Excellent Faculty</li>
                <li className="ach__about--whyAch--li">&#9733; Tests and Assessments</li>
                <li className="ach__about--whyAch--li">&#9733; Comprehensive Study Materials</li>
                <li className="ach__about--whyAch--li">&#9733; Motivational Sessions</li>
                <li className="ach__about--whyAch--li">&#9733; Pan India Network</li>
                <li className="ach__about--whyAch--li">&#9733; Parent-Teacher Meetings</li>
                <li className="ach__about--whyAch--li">&#9733; Competitive Atmosphere with Personalized Attention</li>
                <li className="ach__about--whyAch--li">&#9733; Doubt Clearance</li>
                <li className="ach__about--whyAch--li">&#9733; Strong Selection Track Record</li>
            </ul>

            {/* Innovative Study Materials */}
            <h1 className="ach__about--heading--aboutAch">Innovative 
            <span className="ach__about--heading--StudyMat"> Study Materials</span>
            </h1>
            
            <h3 className="ach__about--subHeading--achSoFar">Carefully prepared by the experts at Achievers School</h3>
            <ul className="ach__about--studyMat--ul">
                <li className="ach__about--studyMat--li">&#9679; Innovative Study Material</li>
                <li className="ach__about--studyMat--li">&#9679; Incorporates easy-to-use Tips & Tricks</li>
                <li className="ach__about--studyMat--li">&#9679; Covers latest Syllabus of the Boards</li>
                <li className="ach__about--studyMat--li">&#9679; Follows exact Pattern of the Exams</li>
                <li className="ach__about--studyMat--li">&#9679; Exam Oriented Assignments </li>
            </ul>

            <div className="ach__about--whyAch--flexDiv">
                <div className="ach__about--whyAch--flexDiv--writing">
                    <p className="ach__about--whyAch--p">Our research material is an<span className="ach__about--heading--CHIEVERS"> ideal blend of information, analysis, and targeted inputs</span>. Our study tool contains <span className="ach__about--heading--CHIEVERS">Quick Recap, Try Yourself, Formula Table, Fact Sheet,</span> explaining fascinating facts and helping to remember rapidly. <span className="ach__about--heading--A">A</span><span className="ach__about--heading--CHIEVERS">CHIEVERS</span> research content is well recognized and respected for its finest standard in the entire coaching fraternity. When the research material is packed, the utmost caution is taken. The research content that is revised, reviewed, and edited annually according to the evolving exam trends not only fits the school syllabus very well but also much of the syllabus and patterns of the competitive exams.</p>
                
                    <h3 className="ach__about--subHeading--achSoFar">Graphical Presentations</h3>
                </div>
                <img className="ach__about--study3" src={Study3} alt="StudyPic"/>
            </div>
            <p className="ach__about--whyAch--p">We put focus on accurate representation, as intricate topics can be best interpreted with the assistance of correct visual aids. To solve difficult problems quickly, our study content provides easy-to-use tips & tricks. It also contains relevant graphs and diagrams based on the principles developed by our experts using the new software packages.</p>

            <h3 className="ach__about--subHeading--achSoFar">Make difficult challenges simpler</h3>
            <p className="ach__about--whyAch--p">Achievers' research content is well recognized and respected for its finest standard in the entire coaching fraternity. When the research material is packed, the utmost caution is taken. The research content that is revised, reviewed, and edited annually according to the evolving exam trends not only fits the school and university syllabus very well but also much of the syllabus and patterns of the competitive exams.</p>

            <div className="ach__about--whyAch--flexDiv">
                <img className="ach__about--study4" src={Study4} alt="StudyPic"/>
                <div className="ach__about--whyAch--flexDiv--writing">
                <h3 className="ach__about--subHeading--achSoFar">Enhanced Solved Examples</h3>
                <p className="ach__about--whyAch--p">A good number of solved examples are included in our study sets, organized in a series of increasing complexity levels. These are achieved by support questions using related principles but distinct implementations. This is precisely what is needed for medical and other entrance examinations</p>

                <h3 className="ach__about--subHeading--achSoFar">Achievers Tests and Exams</h3>
                <p className="ach__about--whyAch--p">To develop our students' strengths, they are subject to multiple types of test segments like:</p>
                <p className="ach__about--whyAch--p" style={{margin: '0.3vw 0'}}>1. Practice commission review test papers</p>
                <p className="ach__about--whyAch--p" style={{margin: '0.3vw 0'}}>2. Online Mock assessments for different Competitive Exams</p>
                </div>
            </div>

            {/* Our Core Values */}
            <h3 className="ach__about--subHeading--achSoFar">Our Core Values</h3>
            
            <div className="ach__about--coreValuesflexDiv">
                <span className="ach__about--coreValues--meanings"><span className="ach__about--heading--A"> A</span><span className="ach__about--heading--CHIEVERS">ssertive</span></span>
                <span className="ach__about--coreValues--meanings"><span className="ach__about--heading--A"> C</span><span className="ach__about--heading--CHIEVERS">redibility</span></span>
                <span className="ach__about--coreValues--meanings"><span className="ach__about--heading--A"> H</span><span className="ach__about--heading--CHIEVERS">ard Work</span></span>
                <span className="ach__about--coreValues--meanings"><span className="ach__about--heading--A"> I</span><span className="ach__about--heading--CHIEVERS">ntegrity</span></span>
                <span className="ach__about--coreValues--meanings"><span className="ach__about--heading--A"> E</span><span className="ach__about--heading--CHIEVERS">xcellence</span></span>
                <span className="ach__about--coreValues--meanings"><span className="ach__about--heading--A"> V</span><span className="ach__about--heading--CHIEVERS">ision</span></span>
            </div>
            <div className="ach__about--coreValuesflexDiv2">
                <span className="ach__about--coreValues--meanings"><span className="ach__about--heading--A"> E</span><span className="ach__about--heading--CHIEVERS">ncouragement</span></span>
                <span className="ach__about--coreValues--meanings"><span className="ach__about--heading--A"> R</span><span className="ach__about--heading--CHIEVERS">esilience</span></span>
                <span className="ach__about--coreValues--meanings"><span className="ach__about--heading--A"> S</span><span className="ach__about--heading--CHIEVERS">tudent-first</span></span>
            </div>

            <h3 className="ach__about--subHeading--achSoFar">Our Vision</h3>
            <p className="ach__about--whyAch--p">Our vision is to become one of the most respected brands in the education field and empower young students to make their dreams come true through quality teaching, technology-enabled programs, and dedication. And with consistent and sincere hard work, we will become a leading global technology university that provides a transformative education to create leaders and innovators, and generates new knowledge for society and industry.</p>

            <h3 className="ach__about--subHeading--achSoFar">Our Mission</h3>
            <p className="ach__about--whyAch--p">Our mission is to build an atmosphere of academic excellence for the import of quality education by modern pedagogy & technology. We focus on practical aspects of the course material to make learning a meaningful and interesting experience in our intellectually stimulating campus.</p>

            {/* CMD's Speech */}
            <h1 className="ach__about--heading--aboutAch">CMD's Speech</h1>
            <p className="ach__about--whyAch--p">It is an honor and satisfaction for me to invite the future ambassadors of India to the world of <span className="ach__about--heading--A">A</span><span className="ach__about--heading--CHIEVERS">CHIEVERS</span>, where I believe that possibilities are infinite and prospects are limitless. I'd like to reveal a mystery of why so many parents and students prefer <span className="ach__about--heading--A">A</span><span className="ach__about--heading--CHIEVERS">CHIEVERS</span>. I BELIEVE IT IS Mostly DUE TO OUR Ideology AND OUR Commitment TO OUR STUDENTS. We at <span className="ach__about--heading--A">A</span><span className="ach__about--heading--CHIEVERS">CHIEVERS</span> believe that "education is the great driver of personal growth." Education is what allows a peasant's daughter to become a doctor, a mineworker's son to become mine manager, and a farm worker's boy to become President of a great country. What distinguishes one human from another is what we make of what we have rather than what we are offered.</p>
        
            <h3 className="ach__about--subHeading--achSoFar">What are the objectives of education?</h3>
            <p className="ach__about--whyAch--p">Sad to say, for many parents and students, this goal is extremely limited; education is intended to provide a well-paying career. The majority of parents seem to believe that “if my daughter/son studies Chemistry, Physics, Mathematics, or Biological sciences, others would think she/he is not intelligent enough to study medicine/engineering.” There seems to be more misunderstanding here- in their fascination with 'technical' education, the parents themselves may have overlooked the fact that post-graduate/research in the field of general sciences may often contribute to a high-paying career.</p>
            <p className="ach__about--whyAch--p">It is a disturbing trend that skilled experts are becoming increasingly scarce in these fields, and as a result, they are in high demand right now. Consequently, it is becoming a better career opportunity by the day. This further leads to a more profound misunderstanding of the terms "profession" and "education." A career aims to have a way to make a living. In terms of education, I believe most of us will accept that it is intended to make one cultured and civilized.</p>
            
            <div className="ach__about--whyAch--flexDiv">
                <div className="ach__about--whyAch--flexDiv--writing">
                    <p className="ach__about--whyAch--p">My questions are: Can a teacher at the high school or college level continue to disregard this fundamental goal of education? Is he or she capable of saying, "I must teach Chemistry/Biology/English, etc."? If an instructor has this mentality, I believe he or she should inevitably switch jobs; there must be something more in the world that is more suitable for him or her. He or she is simply not providing the students with what they want. I assume that a teacher's instruction would be inadequate if they do not contribute to the personal growth of their students in any way. A tutor, in my opinion, is not a paying person who does a particular job under a specific period.</p>
                </div>
                <img className="ach__about--study5" src={Study5} alt="StudyPic"/>
            </div>
            <p className="ach__about--whyAch--p">A teacher's goal should not be to just help his or her students pass exams. Teaching, in my view, should be organized in such a manner that what is given is viewed as a beneficial gift rather than a burdensome obligation. “O Goddess of Learning, Your treasure is unusual; the more it is expended, the more it increases: if one store it, it becomes extinct,” an ancient Sanskrit verse says. ACHIEVERS sincerely believe in the aforementioned educational theory, which is why we are special. At ACHIEVERS, we mold students to be academically sound while also teaching them critical life skills needed to face the demands of a dynamic environment.</p>
            <p className="ach__about--whyAch--p">We are a group of highly trained, experienced educators and practitioners devoted to delivering high-quality education. Whether it's a secondary or higher secondary school, ACHIEVERS believes that enriching our learners as active, knowledge-creating representatives of our nation will ultimately contribute to the development of responsible global citizens. I'd also like to emphasize that, as the Director, I understand the value of having a high-quality, low-cost education that provides a solid base for students to continue their studies while also making new friends.</p>
            
            <div className="ach__about--whyAch--flexDiv">
                <img className="ach__about--study6" src={Study6} alt="StudyPic"/>
                <div className="ach__about--whyAch--flexDiv--writing">
                    <p className="ach__about--whyAch--p">This is also our goal here, and I can assure you that we will go to great lengths to achieve it. ACHIEVERS was built on the belief that education should be readily available to skill, ambitious, goal-oriented, hardworking, and serious students. We can achieve our goal by providing high-quality education at a reasonable price. Looking back, it has been a rewarding 22-year ride. The early years were tough, but we remained faithful to our vision. Every minute of the ride has been worthwhile, and I wouldn't have it any other way. My aim for the next 15 years is to provide groundbreaking, inspiring and significant scholars in our time and to produce a multitude of even more winners who will follow us in contributing to society.</p>
                </div>
            </div>
            <p className="ach__about--whyAch--p">My vision for the next 15 years is to provide academics that are innovative, engaging, and relevant in today’s time and create many more winners who will join us in giving back to society.</p>
            <p className="ach__about--whyAch--p">God bless all of us.</p>

            {/* Board of Directors */}
            <h1 className="ach__about--heading--boardOfDirectors">Board of Directors</h1>
                <img className="ach__about--president" src={PresidentPic} alt="President"/>
                <p className="ach__about--presidentName">Dr. Sujoy Roy Chowdhury (SRC)</p>
                <p className="ach__about--presidentDesignation">President, Founder and CEO</p>
                <p className="ach__about--presidentContact">9830287574 | e-mail: src@achieverscircle.org</p>

            {/* VPs */}
            <div className="careers__welcomeToAch--vicePresidents">
                <div className="careers__welcomeToAch--vicePresidentCard">
                    <img className="careers__welcomeToAch--vicePresidentCardImg" src={VP1Pic} alt="Vice President"/>
                    <p className="careers__welcomeToAch--vicePresidentCardName" style={{color: '#1d85ff'}}>Prof.Anindya Das (AD)</p>
                    <p className="careers__welcomeToAch--vicePresidentCardDesignation">Vice President (Academic) and Controller of Examination</p>
                    <p className="careers__welcomeToAch--vicePresidentCardDesignation" style={{color: '#f92b32'}}>8697025317 | e-mail: anindyadas3@gmail.com</p>
                </div>
                <div className="careers__welcomeToAch--vicePresidentCard">
                    <img className="careers__welcomeToAch--vicePresidentCardImg" src={VP2Pic} alt="Vice President"/>
                    <p className="careers__welcomeToAch--vicePresidentCardName" style={{color: '#1d85ff'}}>Mr. Debdut Gangopadhyay</p>
                    <p className="careers__welcomeToAch--vicePresidentCardDesignation">Vice President (Administration) and Operations Head</p>
                    <p className="careers__welcomeToAch--vicePresidentCardDesignation" style={{color: '#f92b32'}}>9831083937 | e-mail: debdut.g@gmail.com</p>
                </div>
                <div className="careers__welcomeToAch--vicePresidentCard">
                    <img className="careers__welcomeToAch--vicePresidentCardImg" src={VP3Pic} alt="Vice President"/>
                    <p className="careers__welcomeToAch--vicePresidentCardName" style={{color: '#1d85ff'}}>Dr. Sayan Roy Chowdhury</p>
                    <p className="careers__welcomeToAch--vicePresidentCardDesignation">Vice President (Academic) and Dean of Science</p>
                    <p className="careers__welcomeToAch--vicePresidentCardDesignation" style={{color: '#f92b32'}}>9836862824 | e-mail: roychowdhury.romee@gmail.com</p>
                </div>
            </div>

            {/* Administrative Body */}
            <p className="ach__about__ourTeam--Heading">Administrative Body</p>
                <div className="ach__about__ourTeam--TeamCards">
                    {/* Academic Coordinators */}
                    <div className="ach__about__ourTeam--academicCoordinators">
                        <div className="ach__about__ourTeam--academicCoordinatorsCard">
                            <img className="ach__about__ourTeam--academicCoordinatorsCardImg" src={AcademicCoordinator1} alt="Academic Coordinators"/>
                            <span className="ach__about__ourTeam--academicCoordinatorsCardName">Mr. Indranil Dalui</span>
                            <span className="ach__about__ourTeam--academicCoordinatorsCardDesignation">Academic Coordinator and Faculty</span>
                            <span className="ach__about__ourTeam--academicCoordinatorsCardContact">8420435780 | e-mail: indranil.dalui@achieverscircle.org</span>
                        </div>

                        <div className="ach__about__ourTeam--academicCoordinatorsCard">
                            <img className="ach__about__ourTeam--academicCoordinatorsCardImg" src={AcademicCoordinator2} alt="Academic Coordinators"/>
                            <span className="ach__about__ourTeam--academicCoordinatorsCardName">Mr. Rashbehari Choudhury</span>
                            <span className="ach__about__ourTeam--academicCoordinatorsCardDesignation--Rashbehari">Administrative Associate</span>
                            <span className="ach__about__ourTeam--academicCoordinatorsCardContact--edit">7384905704 | e-mail: rashuu.chaudhari056@gmail.com</span>
                        </div>
                    </div>

                    {/* Administrative Department */}
                    <div className="ach__about__ourTeam--academicCoordinators">
                        <div className="ach__about__ourTeam--academicCoordinatorsCard">
                            <img className="ach__about__ourTeam--academicCoordinatorsCardImg" src={AdministrativeDept1} alt="Administrative Department"/>
                            <span className="ach__about__ourTeam--academicCoordinatorsCardName">Mr. Anandarup Das</span>
                            <span className="ach__about__ourTeam--academicCoordinatorsCardDesignation">Administrative Service Officer</span>
                            <span className="ach__about__ourTeam--academicCoordinatorsCardContact">9830668808 | e-mail: anandarup.das@achieverscircle.org</span>
                        </div>

                        <div className="ach__about__ourTeam--academicCoordinatorsCard">
                            <img className="ach__about__ourTeam--academicCoordinatorsCardImg" src={AdministrativeDept2} alt="Administrative Department"/>
                            <span className="ach__about__ourTeam--academicCoordinatorsCardName">Ms. Simantini Debnath</span>
                            <span className="ach__about__ourTeam--academicCoordinatorsCardDesignation--Simantini">Academic and Administrative Coordinator</span>
                            <span className="ach__about__ourTeam--academicCoordinatorsCardContact">9007871854 | e-mail: achieversbackoffice0303@gmail.com</span>
                        </div>
                    </div>

                    {/* Executive Officers */}
                    <div className="ach__about__ourTeam--academicCoordinators">
                        <div className="ach__about__ourTeam--academicCoordinatorsCard">
                            <img className="ach__about__ourTeam--academicCoordinatorsCardImg" src={ExecutiveOfficer1} alt="Executive Officers"/>
                            <span className="ach__about__ourTeam--academicCoordinatorsCardName">Mr. Amir Hossai Molla</span>
                            <span className="ach__about__ourTeam--academicCoordinatorsCardDesignation">Senior Office Executive</span>
                            <span className="ach__about__ourTeam--academicCoordinatorsCardContact--edit">9831721417</span>
                        </div>

                        <div className="ach__about__ourTeam--academicCoordinatorsCard">
                            <img className="ach__about__ourTeam--academicCoordinatorsCardImg" src={ExecutiveOfficer2} alt="Executive Officers"/>
                            <span className="ach__about__ourTeam--academicCoordinatorsCardName">Mr. Swapan Ghosh</span>
                            <span className="ach__about__ourTeam--academicCoordinatorsCardDesignation">Senior Office Executive</span>
                            <span className="ach__about__ourTeam--academicCoordinatorsCardContact--edit">9830634812</span>
                        </div>
                    </div>
                </div>

                {/* Contact Us */}
                <div className="ach__about__contactUs" id="ach__about__contactUs">
                    <h1 className="ach__about__contactUs--heading">Contact Us</h1>
                    <p className="ach__about__contactUs--corporate">Corporate Head Office</p>
                    <p className="ach__about__contactUs--p">Rashbehari Avenue (Head Office)</p>
                    <p className="ach__about__contactUs--p">162, S.P. Mukherjee Road, Near Rashbehari Crossing, Landmark Kalighat Metro, Kolkata 700 026, WB, India.</p>
                    <p className="ach__about__contactUs--p"><span className="ach__about__contactUs--p--Mobile">Mobile</span>: 9830287574/ 9830668808</p>
                </div>
                <iframe className="ach__about--map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.6968075786313!2d88.34359781479097!3d22.515555985212245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270cad6279779%3A0x75e981a9bff8fd2b!2s162%2C%20Shyama%20Prasad%20Mukherjee%20Rd%2C%20Sahanagar%2C%20Kalighat%2C%20Kolkata%2C%20West%20Bengal%20700026!5e0!3m2!1sen!2sin!4v1618663419696!5m2!1sen!2sin" title="GMap location"></iframe>
        </div>
        <Footer />
        </>
    )
}