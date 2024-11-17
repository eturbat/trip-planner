import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import DateTimePicker from 'react-datetime-picker'
import DatePicker from 'react-datepicker'
import { Dropdown } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";
import SubNavBar  from "./SubNavBar.js";
import RestaurantList from './RestaurantList.js';
import axios from 'axios'
import {Link } from "react-router-dom";
import hotels from '../hotels.json';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import Cart2 from './Cart2.js';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./NavBar.js";
import Cart from './Cart.js';
import Cart3 from './Cart3.js';

import BackgroundImage from '../images/francesca-saraco.jpg'

const HeaderStyle = {
    width: "100%",
    height: "40vh",
    background: `url(${BackgroundImage})`,
    // background: `https://images.unsplash.com/photo-1637739306321-a6702e60fd51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGF2ZSUyMGFuZCUyMGJ1c3RlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const selection2 =localStorage.getItem("selection2")
const startDate = localStorage.getItem("MyStartDateValue")
let endDate = localStorage.getItem("MyEndDateValue");
// import Login from "./login";
export default function MyTrips() {
  return ( <div>
    <NavBar/>
    <header style={ HeaderStyle }>
    </header>  
    <div style= {{margin: "auto", display: "flex", alignItems: "center", alignSelf: "center", justifyContent: "center", justifySelf: "center"}}>
      <h1 style = {{marginTop: "5px"}}>Thank You for booking your trip to {selection2} with Trip Planner!</h1>
    </div>
    <div style= {{margin: "auto", display: "flex", alignItems: "center", alignSelf: "center", justifyContent: "center", justifySelf: "center"}}>
      <h5 style = {{margin: "0 auto", marginTop: "0.5%"}}>Here is your reservation summary from {startDate} to {endDate} </h5>
    </div>
    <div style = {{display: "flex", marginTop: '3%', marginBottom: "3%", margin: "auto", display: "flex", alignItems: "center", alignSelf: "center", justifyContent: "center", justifySelf: "center"}}>
      <Link to="/home">
        <button style = {{marginLeft: '40%', marginBottom: "5%", marginTop: "5%"}} className="primary-button" id="reg_btn"><span>Add more Trips!</span></button>
      </Link>
      <Link to="/LocalAttractions">
        <button style = {{marginLeft: '40%', marginBottom: "5%", marginTop: "5%", width: '110%'}} className="primary-button" id="reg_btn"><span>View Local Attractions</span></button>
      </Link>
    </div>

    
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", marginLeft: "40px"}}>
    
    <Cart/>
    <Cart2/>
    <Cart3/>
    
    </div>
    
    </div>
  );
}
