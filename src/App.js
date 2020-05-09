import React, { Component } from 'react';
import {BrowserRouter, Route, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/home";
import Products from "./pages/products";
import Product from "./pages/product";
import Cart from "./pages/cart";
import CartIcon from "./components/cartIcon";





class App extends Component {

  render(){
  return (
    <BrowserRouter>
        <div className="App">
        
            <div className="container">
            
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <NavLink className="navbar-brand" to="/">CatsStore</NavLink>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                         <li className="nav-item ">
                             <NavLink className="nav-link" to="/">Home</NavLink>
                         </li>
                         <li className="nav-item">
                             <NavLink className="nav-link" to="/products">Products</NavLink>
                         </li>
                         <li className="nav-item">
                             <NavLink className="nav-link" to="/cart">Cart</NavLink>
                         </li>
                     </ul>
                  
                  </div>
                  <CartIcon />
                </nav>
                <br />

            <Route path="/" exact component={Home} />
            <Route path="/products" exact  component={Products} />
            <Route path="/products/:id"  component={Product} />
            <Route path="/cart"    component={Cart} />

            </div>
            
            
            
        
        </div>
    </BrowserRouter>
  );
  }
}

function AppWithStore(){
    return <Provider store={store}>
        <App />
    </Provider>
}

export default AppWithStore;
