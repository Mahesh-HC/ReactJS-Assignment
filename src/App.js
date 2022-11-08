/* 
//problem 01 and 03
import React from "react"
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Gallery from "./Problem03/Gallery";
import BMICalculator from './Problem01/BMICalculator';

function App() {
  return (
    <div>
      <nav>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/BMI">BMICalculator</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/Gallery">Gallery</Link>
      </nav>
      <Routes>
        <Route path="/BMI" element={<BMICalculator></BMICalculator>}></Route>
        <Route path="/Gallery" element={<Gallery></Gallery>}></Route>
      </Routes>
    </div>
  );
}

export default App;
*/


/**/
// problem02
import './App.css';
import Navbar from './Problem02/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './Problem02/Products';
import Cart from './Problem02/Cart';
import Product from './Problem02/Product';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
      <Route path="/" element={<Products></Products>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/products/:id" element={<Product></Product>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>

    </div>
  );
}
export default App;


/*
// for normal view

import React from "react"
import './App.css'

import Gallery from "./Problem03/Gallery";
import BMICalculator from './Problem01/BMICalculator';

function App() {
  return (
    <div>
      <BMICalculator></BMICalculator>
      <Gallery></Gallery> 
    </div>
  );
}

export default App;

*/