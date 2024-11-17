import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import DateTimePicker from 'react-datetime-picker'
import DatePicker from 'react-datepicker'
import { Dropdown } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";
import SubNavBar  from "./SubNavBar.js";
// import RestaurantList from './RestaurantList.js';
import NavBar from './NavBar.js';
import FlightList from './FlightList.js';
import axios from 'axios'
import {Link } from "react-router-dom";
import hotels from '../hotels.json';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import Cart3 from './Cart3.js';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomSeparator from './BreadCrumb.js';
import BackgroundImage from '../images/paplane.jpg'

const HeaderStyle = {
    width: "100%",
    height: "40vh",
    background: `url(${BackgroundImage})`,
    // background: `https://images.unsplash.com/photo-1637739306321-a6702e60fd51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGF2ZSUyMGFuZCUyMGJ1c3RlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}


const adultOptions = [
  {
    key: '1',
    text: 1,
    value: '1',
  },
  {
    key: '2',
    text: '2',
    value: '2',
  },
  {
    key: '3',
    text: '3',
    value: '3',
  },
  {
    key: '4',
    text: '4',
    value: '4',
  },
  {
    key: 'Maximum Number of Tickets: 5',
    text: 'Maximum Number of Tickets: 5',
    value: 'Maximum Number of Tickets: 5',
  },
]
const roomTypes = [
  {
    key: 'King',
    text: 'King',
    value: 'King',
  },
  {
    key: 'Double',
    text: 'Double',
    value: 'Double',
  },
  {
    key: 'Queen',
    text: 'Queen',
    value: 'Queen',
  },
  {
    key: 'Presidential',
    text: 'Presidential',
    value: 'Presidential',
  },
  
]
const confirmBooking = () => {
  const confirmBox = window.confirm (
    "Please confirm finalization of your reservation"
    )
    if (confirmBox === true) { 
           window.location = "/mytrips"
    }
    else  {
      //alert("oops!");
      window.location = "/flights"
    }
  }   


function Flights() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date()); 
  const startDateKey = "MyStartDateValue";
  const endDateKey = "MyEndDateValue";

  const handleClick = (id)=>{
    this.props.addToCart(id); 
  }
  useEffect(() => { 
    localStorage.setItem("StartDate",JSON.stringify(startDate))
    });

    const handleChange = (date) => {
      localStorage.setItem(startDateKey, (date));
      setStartDate(date);
    };

    const handleChangeTwo = (date) => {
      localStorage.setItem(endDateKey, (date));
      setEndDate(date);
    };

    
  let startDateValue = localStorage.getItem("MyStartDateValue");
  let endDateValue = localStorage.getItem("MyEndDateValue");
  const selection2 =localStorage.getItem("selection2")
  return(
    <div>
      <NavBar/>
      <header style={ HeaderStyle }> 
            {/* <h6 className="home-title text-center"></h6> */}
            <div className="home-title2 text-center" >Explore Flights with our Partner Airlines in {selection2}!</div>
      </header>
      <div style={{ position: "relative", marginTop: "1%", right: "-750px"}}><CustomSeparator /></div>

      <div> 
        {/* <i class="fa-solid fa-arrow-left"></i> */}
        <Link to="/home"> 
            <Button variant="primary" style={{marginTop: "1%", position: "absolute", left: "0", marginLeft: "40px"}}>
              Back To Home
            </Button>
        </Link>
        <Link to="/hotels"> 
            <Button variant="primary" style={{marginTop: "1%", position: "absolute", right: "0", marginRight: "40px"}}>
              Move on to Hotels!
            </Button>
        </Link>  

        {/* <Link to="/mytrips">  */}
            <Button variant="primary" onClick={() => {confirmBooking()}} style={{ position: "relative", marginTop: "1%", right: "-800px"}}>
              Finalize Trip
            </Button>
        {/* </Link>     */}

    </div>
      <div style={{display:"flex", marginTop: "1%"}}>
        <Dropdown
          placeholder='Select Number of Tickets: '
          fluid selection options={adultOptions}
          style={{width: "250px", marginLeft: "40px", marginTop: "2%"}}
        />
         
      </div> 
     
    
      {/* <div style={{ marginTop: "40px"}} className="home-title text-center" >Explore Flights with our Partner Airlines!</div> */}
      <div style={{display:"flex"}}>  
        <FlightList/>
        <Cart3/>
      </div>

      
    </div>
  );
}
const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}
const mapDispatchToProps= (dispatch)=>{
  
  return{
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default Flights;