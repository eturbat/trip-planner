import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import DateTimePicker from 'react-datetime-picker'
import DatePicker from 'react-datepicker'
import { Dropdown } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";
import SubNavBar  from "./SubNavBar.js";
import HotelList from './HotelList.js';
import {Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import hotels from '../hotels.json';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import CardImg from 'react-bootstrap/esm/CardImg';
import NavBar from './NavBar.js';


// const whiteHeart = '\u2661';
// const blackHeart = '\u2665';
// const button = document.querySelector('button');
// button.addEventListener('click', toggle);

// function toggle() {
//   const like = button.textContent;
//   if(like==whiteHeart) {
//     button.textContent = blackHeart;
//   } else {
//     button.textContent = whiteHeart;
//   }
// }
// class localAttractions extends Component{
    
// }

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

var clicks = 0;
   function onClickLike() {
        clicks = clicks + 1;
        document.getElementById("clicks").innerHTML = clicks;
      };

const selection2 =localStorage.getItem("selection2")

function LocalAttractions() {
    // const handleChange = (date) => {
    //     localStorage.setItem(startDateKey, JSON.stringify(date));
    //     setStartDate(date);
    //   };
    

    return (
        <div className = "inner">
            <NavBar/>
            <header style={ HeaderStyle }>
            </header> 
            <div style= {{margin: "auto", display: "flex", alignItems: "center", alignSelf: "center", justifyContent: "center", justifySelf: "center"}}>
                <h1 style = {{marginTop: "5px"}}>Explore local attractions in {selection2} with Trip Planner!</h1>
            </div>
            <Link to="/MyTrips">
                <button style = {{marginLeft: '46%', marginBottom: "1%", marginTop: "2%"}} className="primary-button" id="reg_btn"><span>Back to Trips!</span></button>
            </Link>
            {
                hotels && hotels.map (hotel => {
                    return(
                        <Card style={{width: "80%", height: "50%", marginBottom: "4%", marginLeft: "5%"}} key = {hotel.id}>
                            <CardImg style={{width: "100%", height: "500px"}} src= {hotel.picture}  />
                            <Card.Body>
                            <Card.Title>{hotel.name}</Card.Title>
                            <Card.Text>
                                {hotel.about}
                            </Card.Text>
                            <Button>Favorite Post</Button>
                            </Card.Body>
                         </Card>  
                    )
                })
            }
        </div>
    )
}

export default LocalAttractions;



//export default localAttractions;