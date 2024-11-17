import React from "react";
import Button from 'react-bootstrap/Button'
import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// export default function Nav() {

//   return(
//         <div className="navbar">
//           <div className="logo">Trip Planner Logo</div>
//            <ul className="nav-links">
//               <Link to="/Home">Home</Link>
//               <Link to="/MyTrips">MyTrips</Link>
//               <Link to="/"><button className="primary-button">Log Out</button></Link>
//               {/* <Link to="/Flights">Flights</Link>
//               <Link to="/Restaurants">Restaurants</Link>
//               <Link to="/Meals">Meals</Link>
//               <Link to="/Diary">Diary</Link>
//               <Link to="/Hotels">Hotels</Link>
//               <Link to="/Cart">Cart</Link>
//               <Link to="/LocalAttractions">LocalAttractions</Link> */}
//            </ul>
//         </div>
//   );

// }
import BackgroundImage from '../images/loo.png'

import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavBar = () => {
    let name = localStorage.getItem("name");
    return(
        <div>
    <Navbar className="text-wrap" variant="dark">
    <Container>
      <ReactBootStrap.Navbar.Brand href="/home"><img
                  src= {BackgroundImage}
                  width="50"
                  height="80%"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                /></ReactBootStrap.Navbar.Brand>
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/mytrips">MyTrips</Nav.Link>  
      </Nav>
    <Nav.Item className="me-auto" style ={{marginLeft: "67.5%"}}> Welcome, {name}!</Nav.Item>
    <Nav.Link className="text-wrap" style ={{marginRight: "10px"}} href="/">
      <button className = "primary-button" style ={{width: "100%", fontSize: "12px", maxHeight: "50px", marginTop: "2px", marginRight: "2px"}}>
      Log me out</button>
    </Nav.Link>  
  </Container>           
</Navbar>
        </div>
    )
}

export default NavBar;