import React, { Component } from 'react';
// import ProductItem from "../components/productitem";
import { connect } from "react-redux";
// import ProductsApi from "../api/products";
import CartItem from '../components/cartItem';
import { clearCart } from '../store/actions/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




class Cart extends Component {

  

  payCart = () => {
    
    this.props.clearCart();
    toast.success("we recieved your order, and we are working on it... ", {

    })

  }

  render(){

   const ProductList = this.props.cartItems.map((item, index) => 

            <div className="col-lg-3 col-sm-6 col-12" key={index}>
                  <CartItem item={item} index={index} /><br />

            </div>
    )
       
       
       
   

  return (
    <div className="products">
        <h1> Cart </h1>

            <div className="row">

                  
                 {ProductList}
                  
                  
                  <h3>Total: {this.props.Total}$</h3>
                  <br /><br />
                  <button className="btn btn-primary btn-block" onClick={this.payCart}>Pay</button>
                  <ToastContainer position="top-center" autoClose={6000} />



            </div>

    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
    Total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart())
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Cart);
