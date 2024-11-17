import React, { Component } from 'react';
import {useState, useEffect} from "react";
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import Recipe from './Recipe'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { border, borderRadius, fontSize, textAlign } from '@mui/system';



function deleteflights(flightsId) {
  const confirmBox = window.confirm(
    "Do you really want to cancel flight reservation?"
    )
    if (confirmBox === true) { 
      axios(`http://127.0.0.1:5000//flights/deleteflights?flightsId=${flightsId}`).then(res => {
        console.log(res.data);
      });
    }
    else {

    }
};

function Cart3() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axios("http://127.0.0.1:5000/allcart3")
        .then((response) => {
          setData(response.data);
          setError(null);
        })
        .catch(setError);
      }, []);
  
  
    if (error) return <p>An error occurred</p>
   
    return (
      <div className="App" style={{width: "380px",background: "Beige", borderRadius: "25px", border: "2px solid BurlyWood", marginRight: "2%"}}>
        <p style={{margin: "10px", textAlign: "center", fontSize: "20px"}}>
          Flight Reservation:
          {data.map((e) => {
            return (
                <li className="collection-item avatar" key={e.id}>
                    <Card style={{ width: '50%', margin: "0 auto", marginTop: "4%"}}> 
                        <img style={{ width: '100%'}} src={e.image} alt={e.image} className=""/>
                    <h5 className="title" style={{ margin: '10px'}}>Reservation Summary:</h5>
                        <span className="title" style={{margin: "10px"}}>{e.name}</span>
                        <p style={{ margin: '10px'}}>{e.description}</p>
                    <p style={{ margin: '10px'}}><b>Price: {e.price}$</b></p> 
                    <p style={{ margin: '10px'}}></p>
                    <div style={{ margin: '10px', display: "flex"}} >
                        <Button onClick={() => {deleteflights(e.flightsId); window.location.reload()}} style={{margin: "0 auto"}}>
                            Cancel Reservation
                            </Button> 
                    </div>      
                    </Card>
                </li>);
          })}
        </p>
      </div>
    );
  
  }
  
  export default Cart3;