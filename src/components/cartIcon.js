import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./cartIcon.css";

class CartIcon extends Component {

  render(){
  return (
    <div className="carticon">
        <NavLink to="/cart" >
            <i className="fas fa-shopping-cart"></i>
            <span className="badge badge-danger">{this.props.totalQuantity}</span>
       </NavLink>
    </div>
  );
  }
}

const mapStateToProps =(state) =>{
  return {
    totalQuantity: state.cart.reduce((total, item) => total + parseInt(item.quantity), 0)
  }
}

export default connect(mapStateToProps)(CartIcon);
