// import React from "react";

// export default function Flights() {
//   return <div>Home page</div>;
// }
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import { Dropdown } from 'semantic-ui-react'
import 'react-datepicker/dist/react-datepicker.css';

import './style.css'
import BackgroundImage from '../images/yacht.jpg'

const HeaderStyle = {
    width: "100%",
    height: "30vh",
    background: `url(${BackgroundImage})`,
    // background: `https://images.unsplash.com/photo-1637739306321-a6702e60fd51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGF2ZSUyMGFuZCUyMGJ1c3RlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const destinationsTo = [
    {
        key: 'Cleveland',
        text: 'Cleveland',
        value: 'Cleveland',
      },
      {
        key: 'San Francisco',
        text: 'San Francisco',
        value: 'San Francisco',
      },
      {
        key: 'Boston',
        text: 'Boston',
        value: 'Boston',
      },
      {
        key: 'Miami',
        text: 'Miami',
        value: 'Miami',
      },
      {
        key: 'New York City',
        text: 'New York City',
        value: 'New York City',
      },
      {
      key: 'New Jersey',
      text: 'New Jersey',
      value: 'New Jersey',
      },
      {
      key: 'Houston',
      text: 'Houston',
      value: 'Houston',
      }, 
  ]

  const destinationsFrom = [
    {
      key: 'Cleveland',
      text: 'Cleveland',
      value: 'Cleveland',
    },
    {
      key: 'San Francisco',
      text: 'San Francisco',
      value: 'San Francisco',
    },
    {
      key: 'Boston',
      text: 'Boston',
      value: 'Boston',
    },
    {
      key: 'Miami',
      text: 'Miami',
      value: 'Miami',
    },
    {
      key: 'New York City',
      text: 'New York City',
      value: 'New York City',
    },
    {
    key: 'New Jersey',
    text: 'New Jersey',
    value: 'New Jersey',
    },
    {
    key: 'Houston',
    text: 'Houston',
    value: 'Houston',
    }, 
  ]




export default function Home() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date()); 

    const getSelection1 = (event, {value}) => {
      let selection1 = event.target.textContent;
      console.log(selection1);
      localStorage.setItem("selection1", selection1);
    }
  
    const validateDestination = () => {
      if (localStorage.getItem("selection2") === '') { 
        alert("Please select a destination!")
        window.location.href = '/home';
      }
      else {
        window.location.href = '/flights';
      }
    }
  
    const getSelection2 = (event, {value}) => {
        let selection2 = event.target.textContent;
        console.log(selection2);
        localStorage.setItem("selection2", selection2);
    }
    
    return (     
        <div>
            <NavBar/>
            <header style={ HeaderStyle }>
              <div className="home-title2 text-center">Travel around using TripPlanner</div>
            </header>
            <h1 style={{margin: "20px"}}> Select Destination</h1>   
            <div style={{display:"flex"}}> 
              <Dropdown
              clearable selection options={destinationsTo}
              placeholder='Select City From:'
              //fluid selection options={destinationsTo}
              style={{width: "20%", margin: "50px"}}
              onChange = {getSelection1}
              />
              <h1 style={{marginTop: "40px"}}> - </h1>
              <Dropdown
              placeholder='Select City To:'
              clearable selection options={destinationsFrom}
              style={{width: "20%", margin: "50px"}}
              onChange = {getSelection2}
              />     
            </div> 
            <h1 style={{margin: "20px"}}> Select Duration of Travel</h1> 
            <div style={{display:"flex"}}>
                <h6 style ={{marginLeft: "40px", marginTop: "0.45%"}}>From: </h6>
                <div style={{ background: "black"}}>
                <DatePicker selected={startDate} 
                onChange={(date) => setStartDate(date)}
                    dateFormat="dd MMM yyyy"
                    /> 
                </div>         
                <h6 style ={{marginLeft: "40px", marginTop: "0.45%"}}>To:</h6>
                <div style={{ background: "black"}}>
                <DatePicker selected={endDate}
                onChange={(date) => setEndDate(date)} 
                    dateFormat="dd MMM yyyy"
                    minDate = {startDate}
                    //maxDate={addDays(new Date(), 5)} 
                />
                </div>
            </div>
            <div style = {{marginLeft: "45%", marginBottom: "5%",justifyContent: "center", position: "absolute", alignItems: "center"}}>
            {/* <Link to="/flights"> */}
                <button style = {{marginBottom: "20px"}} onClick={() => {validateDestination()}} className="primary-button">Let's Plan!</button>
            {/* </Link> */}
            </div>
        </div>
    )
}