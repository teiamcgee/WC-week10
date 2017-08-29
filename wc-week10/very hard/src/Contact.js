import React from "react";


function Contact(props){
  const status = props.isCompleted ? "Done" : "Pending"
  var color = props.isCompleted ? "green" : "orange"
    return (
     <div>
      <div className="theStatus"  style={{'background-color': color}}>
      </div>
      <div>
        <h3>You need to contact {props.fname} {props.lname} at {props.pnumber}<button onClick={() =>props.changeStatus(props.id, true)}>CALL</button> {status}</h3>
      </div>
    </div>
)
};



export default Contact;
