import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact';

class Mypage extends Component {
  render() {
      const users = [{
          fname:"Dave",
          lname:"everyman",
          pnumber:"555-333-2642"
        },
        {
          fname:"Shawn",
          lname:"bighead",
          pnumber: "555-333-2222"
        },
        {
          fname:"Ursula",
          lname:"Mcgee",
          pnumber: "555-333-2672"
        }
      ];

    const contactsComponents = users.map(function(user){
      return <Contact fname={user.fname}  lname= {user.lname} pnumber={user.pnumber} />
    })
    return (
      <div>
      {contactsComponents}
      </div>
    );
  }
}

// HARD: Using an array of contacts, loop through each one and create a new Contact component for each

export default Mypage;
