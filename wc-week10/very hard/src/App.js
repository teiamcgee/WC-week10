import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact';

class Mypage extends Component {

  constructor(){
    super();
    this.state = {
      users : [
        {
          id:1,
          fname:"Dave",
          lname:"Everyman",
          pnumber:"555-333-2642",
          isCompleted: false
        },
        {
          id:2,
          fname:"Shawn",
          lname:"Bighead",
          pnumber: "555-333-2222",
          isCompleted: false
        },
        {
          id:3,
          fname:"Ursula",
          lname:"Mcgee",
          pnumber: "555-333-2672",
          isCompleted: false
        }
      ]
    };
  }
  changeStatus = (id,isCompleted = true) => {
    const users = this.state.users.slice()
    const index = this.state.users.findIndex(function(user){
      return user.id === id
    })
    users[index].isCompleted = isCompleted
    this.setState({users})
  }

    render() {

    const contactsComponents = this.state.users.map((user) => {
      return <Contact
      fname={user.fname}
      lname= {user.lname}
      pnumber={user.pnumber}
      isCompleted={user.isCompleted}
      changeStatus= {this.changeStatus}
      id= {user.id}
      />
    })
    return (
      <div>
      {contactsComponents}
      </div>
    );
  }
}



// VERY HARD: In your list of Contacts, have a status icon by each one that starts as orange "Pending" status.
// Then have a call button that when clicked, changes the state to a green "Done" status.

export default Mypage;
