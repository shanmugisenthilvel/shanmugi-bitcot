import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'

//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Product from "./components/ProductDetailComponent";
import ProductsList from "./components/ProductListComponent";
import Login from "./components/login";


class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
            <li className="nav-item">
          <Link to={"/productlistcomponent"} className="navbar-brand">
          ProductsList
          </Link>
          </li>
          </div>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/products"} className="nav-link">
                Product
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
        <Routes>
            <Route exact path="/" element={<Login/>} /> 
            {/* <Route exact path="/products" element={<ProductsList/>} />
            <Route path="/products/:id" element={<Product/>} /> */}
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;