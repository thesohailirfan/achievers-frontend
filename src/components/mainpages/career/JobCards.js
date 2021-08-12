import React from "react";

function JobCards(props) {

    const rolesAndResponsibilities = props.rolesAndResponsibilities.map((roles) => 
        <li className="careers__jobCards-bulletPoints">{roles}</li>  
        );

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
            <a href={props.link} className="careers__jobCards--applyBtn">Apply Now</a>
          </div>

          <div className="careers__jobCards--RightSide">
            <p className="careers__jobCards--jobDescription">Job Description</p>
            <p className="careers__jobCards--rolesAndResponsibilitiesHeading">Roles And Responsibilities</p>
            {rolesAndResponsibilities}
          </div>
          <a href={props.link} className="careers__jobCards--applyBtn--mobile">Apply Now</a>
         
      </div>
    );
  }
  
  export default JobCards;