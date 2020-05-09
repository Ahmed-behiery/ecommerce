import React, { Component } from 'react';
import {removeFromCart} from "../store/actions/actions"
import {connect} from "react-redux";




class CartItem extends Component {

  render(){
      const  {item, index }  = this.props;
      const {product} = item;
  return (
    <div className="cartItem">

            <div className="card">
            <img src={product.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}$</p>
                 <p>Quantity: {item.quantity}</p>
                <p>Totlal: {product.price * item.quantity}$</p>
                <button onClick={ () => this.props.removeFromCart(index) } className="btn btn-danger">
                    <i className="fa fa-trash"></i>{"  "}
                     Delete
                </button>
            </div>
            </div>

    </div>
  );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (index) => dispatch(removeFromCart(index))
  }
}

export default connect(null, mapDispatchToProps) (CartItem);
