import './App.css';
import Flights from "./Components/Flights";
import MyTrips from "./Components/MyTrips";
import Hotels from "./Components/Hotels";
import Meals from "./Components/Meals";
import Diary from "./Components/Diary";
import Restaurants from "./Components/Restaurants";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Cart from './Components/Cart';
import LocalAttractions from './Components/localAttractions';
import LandingPage from './Components/LandingPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from './Components/login';
import SignUpPage from './Components/SignUp';
import ForgetPasswordPage from './Components/ForgotPassword';

export default function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavBar /> */}
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/Flights' element={<Flights/>} />
          <Route path='/Restaurants' element={<Restaurants/>} />
          <Route path='/Diary' element={<Diary/>} />
          <Route path='/Meals' element={<Meals/>} />
          <Route path='/MyTrips' element={<MyTrips/>} />
          <Route path='/Hotels' element={<Hotels/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/LocalAttractions' element={<LocalAttractions/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/signin' element={<SignInPage/>} />
          <Route path='/signup' element={<SignUpPage/>} />
          <Route path='/forgotpassword' element={<ForgetPasswordPage/>} />
        </Routes>
      </div>
    </Router>
  );
}
  
