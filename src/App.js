import './style.css';
import React, {useState} from "react";
import Home from "./Navigare/home";
import Frappucino from "./Navigare/Drinks/Frappucino";
import Espresso from "./Navigare/Drinks/Espresso";
import Fresh from "./Navigare/Drinks/Fresh";
import {Route, Routes} from "react-router-dom"
import Navbar from "./Navigare/navbar";
import Signup from "./Navigare/Signup";
import Signin from "./Navigare/Signin";
import ShoppingCart from "./Navigare/ShoppingCart";


function App() {
    const [cart, setCart] = useState([]);

    return (
        <>
            <Navbar/>
            <ShoppingCart cart={cart}/>
            <div className="container">
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/Frappucino" element={<Frappucino cart={cart} setCart={setCart}/>}/>
                    <Route path="/Espresso" element={<Espresso cart={cart} setCart={setCart}/>}/>
                    <Route path="/Fresh" element={<Fresh cart={cart} setCart={setCart}/>}/>
                    <Route path="/Signup" element={<Signup/>}/>
                    <Route path="/Signin" element={<Signin/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
