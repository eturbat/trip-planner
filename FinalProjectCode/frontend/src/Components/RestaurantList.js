import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


function addRestaurant(restaurantId) {
    const confirmBox = window.confirm(
      "Are you sure you want to add this Restaurant reservation?"
      )
      if (confirmBox === true) {
        axios(`http://127.0.0.1:5000/resturant/addresturant?restaurantId=${restaurantId}`).then(res => {
          console.log(res.data);
        });
      }
      else {

      }  
    };

  

  
  
function RestaurantList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = () => {
    axios("http://127.0.0.1:5000/restaurants/allrestaurants")
    .then((response) => {
      setData(response.data);
      setError(null);
    })
    .catch(setError);
  }
  
  useEffect(() => 
    fetchData()
    , []);
  
  // useEffect(() => {
  //   axios("http://127.0.0.1:5000/restaurants/allrestaurants")
  //     .then((response) => {
  //       setData(response.data);
  //       setError(null);
  //     })
  //     .catch(setError);
  //   }, []);


  if (error) return <p>An error occurred</p>
 
  return (
    <div className="App">
      <p>
        {data.map((e) => {
          return <Card key={e.restaurantid} style={{display: 'flex', flexDirection: 'row', width: '90%', margin: "50px"}}>
                       <Card.Img style={{width: "40%", height: "15vw", objectFit: "cover"}} variant="top" src={e.image} />
                      <Card.Body style={{flex: 1, marginRight: "100px"}}>
                      <Card.Title>{e.name}</Card.Title>
                       <Card.Text>
                       {e.description}
                       <br />
                       Price: ${e.price}
                      </Card.Text>
                       {/* <Link to="/cart">  */}
                           <Button variant = "primary" onClick={() => {addRestaurant(e.restaurantId); window.location.reload(); }} style={{position: "absolute", right: "0", marginRight: "20px"}}>
                           Book Restaurant!
                           </Button>
                       {/* </Link>   */}
                      
                     </Card.Body>                      
                       </Card>;
        })}
      </p>
    </div>
  );

}

export default RestaurantList;