import React from "react";

function StudentCards(props) {
  return (
    <div className="courses__studentCards">
        <img className="courses__studentPics" src={props.pic} alt="Student Pic"/>
        <span className="courses__studentNames" >{props.name}</span>
      <span className="courses__studentAch">{props.achievements}</span>
      <p className="courses__studentReview">{props.review}</p>
    </div>
  );
}

export default StudentCards;