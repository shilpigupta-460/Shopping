import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from "./components/NavBar/Navbar.js"
import './App.css';
import Products from "./components/Products/Products.js"
import Cart from "./components/Cart/Cart.js"
import SingleItem from "./components/SingleItem/SingleItem"
import { connect } from "react-redux";
function App({ current }) {
  return (
<>
    <div className="App">
    <Navbar/>
     

      <Routes>
 
        <Route path="/" element={ <Products /> } />
        <Route path="/home" element={ <Products /> } />
        <Route path="/cart" element={ <Cart /> } />
        { !current ?
          <Route Navigate to="/" />

          :
          <Route exact path="/product/:id" element={ <SingleItem /> } />
        }
        {/* <Route exact path="/product/:id" element={ <SingleItem /> } /> */ }
        <Route path="*" element={ <p>There's nothing here: 404!</p> } />
      </Routes>

    </div >
    </>
  )

}
const mapStateToProps = (state) => {
  return {
    current: state.currentItem
  }
}

export default connect(mapStateToProps)(App)
