import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useEffect, useRef} from "react";

import './style.css'
import BackgroundImage from '../images/francesca-saraco.jpg'


const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    // background: `https://images.unsplash.com/photo-1637739306321-a6702e60fd51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGF2ZSUyMGFuZCUyMGJ1c3RlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

export default function SignUpPage() {
    const name=useRef()
   const email=useRef()
   const password=useRef()
   //const [showHome,setShowHome]=useState(false)
   //const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")
    const handleSubmit=()=>{
        if(name.current.value&&email.current.value&&password.current.value)
       {
         localStorage.setItem("name",name.current.value)
         localStorage.setItem("email",email.current.value)
         localStorage.setItem("password",password.current.value)
         localStorage.setItem("signUp",email.current.value)
         alert("Account created successfully!!")
         window.location.reload()
       }
    }
    
    return (
        <div style={ HeaderStyle } className="text-center m-5-auto">
            <h2>Join TripPlanner</h2>
            <h5>Create an Account</h5>
            <form action="/home">
                <p>
                    <label style={{color: "black"}}>Username</label><br/>
                    <input type="text" name="first_name"ref={name} required />
                </p>
                <p>
                    <label style={{color: "black"}}>Email address</label><br/>
                    <input type="email" name="email" ref={email} required />
                </p>
                <p>
                    <label style={{color: "black"}}>Password</label><br/>
                    <input type="password" name="password" ref={password} requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree to all statements in the <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" onClick = {handleSubmit} type="submit">Sign Up</button>
                </p>
                <footer>
                    <p><Link to="/">Back to Homepage</Link>.</p>
                </footer>
            </form>
        </div>
    )
}