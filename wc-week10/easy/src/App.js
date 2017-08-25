import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Mypage extends Component {
  render() {
    return (
      <div>
      <Name name="Teia" />
      <Contact fname="Teia" lname="McGee" pnumber="919-454-7716" />
      </div>
    );
  }
}

function Name(props){
  return <h1>Hello World {props.name}</h1>
};


function Contact(props){
  return <h2>You need to contact {props.fname} {props.lname} at {props.pnumber}</h2>
};



export default Mypage;
