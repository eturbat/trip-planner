import React from 'react'
import { Link } from 'react-router-dom';
import {useState, useEffect, useRef} from "react";
import './style.css'
import BackgroundImage from '../images/francesca-saraco.jpg'
import { Navigate } from 'react-router-dom';

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  // background: `https://images.unsplash.com/photo-1637739306321-a6702e60fd51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGF2ZSUyMGFuZCUyMGJ1c3RlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}


export default function SignInPage() {
    const name=useRef()
    const email=useRef()
    const password=useRef()
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")
    var url = 'http://localhost:3000/home';

    
    const handleSignIn=()=>{
        if(email.current.value===localEmail && password.current.value===localPassword){
            localStorage.setItem("signUp", email.current.value)
            console.log("This got here1!")
            window.location.href = "http://localhost:3000/home"
            console.log("This got here2!")
        }
        else
        {
            alert("Please Enter valid credentials")
        }
    }    
        return (
            <div style={ HeaderStyle }className="text-center m-5-auto">
                <h2>Sign in to Trip Planner</h2>
                <form style={{color: "white"}}>
                    <p>
                        <label style={{color: "black"}}>Email address*</label><br/>
                        <input type="text" name="first_name" ref={email} required />
                    </p>
                    <p>
                        <label style={{color: "black"}}>Password*</label>
                        <Link to="/forgotpassword"><label className="right-label" style={{color: "black"}}>Forget password?</label></Link>
                        <br/>
                        <input type="password" name="password" ref={password} required />
                    </p>
                    <p>
                    <button type="button" onClick={handleSignIn} id="sub_btn">Login</button> 
                    </p>
                    <footer>
                        <p style={{color: "black"}}>New here? <Link to="/signup">Create an account</Link>.</p>
                        <p><Link to="/">Back to Homepage</Link>.</p>
                    </footer>
                </form>            
            </div>
        )
}