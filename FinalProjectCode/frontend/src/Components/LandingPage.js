import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'
import BackgroundImage from '../images/francesca-saraco.jpg'

export default function LandingPage() {
    return (
        <header style={HeaderStyle}>
            <div style={{background: "white"}}>
            <h3 className="main-title text-center">Welcome to Trip Planner</h3>
            <h5 className="text-center">
            Get your trip planned the right way. Our way. 
            </h5>
                <div className="buttons text-center">
                    <Link to="/signin">
                        <button className="primary-button">Log in</button>
                    </Link>
                    <Link to="/signup">
                        <button className="primary-button" id="reg_btn" style={{marginBottom: "4%"}}><span>Sign Up</span></button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    // background: `https://images.unsplash.com/photo-1637739306321-a6702e60fd51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGF2ZSUyMGFuZCUyMGJ1c3RlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}