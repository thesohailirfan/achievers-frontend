import React from "react";
import axios from 'axios';

function JobCards(props) {
      
      

      const deleteProduct = async(id) => {
        try {  
            const deleteProduct = axios.delete(`https://achieverscircle.herokuapp.com/api/careers/${id}`, {
                headers: {Authorization: props.token}
            })

            await deleteProduct
            window.location.href = "/careers";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const rolesAndResponsibilities = props.rolesAndResponsibilities.split(";").map((roles, index) => 
        <li className="careers__jobCards-bulletPoints" key={index}>{roles}</li>  
        );

    const editLink = "/edit_career/" + props.link

    return (
      <div className="careers__jobCards">
          <div className="careers__jobCards--leftSide">
            <p className="careers__jobCards--jobTitle">{props.jobTitle}</p>
            <p className="careers__jobCards--jobHighlightsHeading">Job Highlights</p>
            <p className="careers__jobCards--jobRequirements">{props.jobRequirements}</p>
            <div className="careers__jobCards--mobile">
              <p className="careers__jobCards--jobDescription">Job Description</p>
              <p className="careers__jobCards--rolesAndResponsibilitiesHeading">Roles And Responsibilities</p>
              {rolesAndResponsibilities}
            </div>
            <a href="http://achieverscircle.ml/career" className="careers__jobCards--applyBtn">Apply Now</a>
            {
              props.isAdmin &&
              <>
              <a href={editLink} className="careers__jobCards--applyBtn">Edit</a>
              <button className="careers__jobCards--applyBtn" style={{height: 60}} onClick={() => deleteProduct(props.link)}>Delete</button>
              </>
            }
          </div>

          <div className="careers__jobCards--RightSide">
            <p className="careers__jobCards--jobDescription">Job Description</p>
            <p className="careers__jobCards--rolesAndResponsibilitiesHeading">Roles And Responsibilities</p>
            {rolesAndResponsibilities}
          </div>
          <a href="http://achieverscircle.ml/career" className="careers__jobCards--applyBtn--mobile">Apply Now</a>
          {
            props.isAdmin &&
            <a href={editLink} className="careers__jobCards--applyBtn--mobile">Edit</a>
          }
         
      </div>
    );
  }
  
  export default JobCards;