import React, { Component } from 'react';
import {getById} from "../api/products"; 
import { connect } from "react-redux";
import {addToCart} from "../store/actions/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





class Product extends Component {

  state = {
    product : {},
    quantity: 0
  }

    componentDidMount(){
        const id = this.props.match.params.id;

        getById(parseInt(id)).then(product =>
          {
          this.setState({ product }) 
          console.log(this.state.product);
          
          
          })
          
    }

    handleChange = (e) => {
        if(e.target.value < 0)
        return false;
        this.setState({
          quantity: e.target.value
        })
    }

    addToCart =(product) => {
      if(this.state.quantity === 0){
        toast.warning("You Must Choose a Certain Quantity ...")
        return false;
      }
      this.props.addToCart(product, this.state.quantity)
    }
  

  render(){
    const product = this.state.product;

  return (
    <div className="product">
          <div className="row">
              <div className="col-lg-6 col-12">
                 <img src={product.img} className="img-thumbnail"  width={`100%`} />
              </div>

              <div className="col-lg-6 col-12">
                 <h2>{product.name}</h2> 
                 <p>Price: {product.price}$</p>
                 <br /> 
                 <p>{product.desc}</p>
                 <input type="number" className="form-control" onChange={this.handleChange}  value={this.state.quantity} />
                 <br />
                 <p>Total Price: {product.price * this.state.quantity}$</p>
                 <button className="btn btn-primary" onClick={() => this.addToCart(product)}>Add To Cart</button>
                 <ToastContainer position="top-center" autoClose={6000} />

              </div>


          </div>


      </div>
  );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      addToCart: (productInfo, quantity) => dispatch(addToCart(productInfo, quantity))
  }
}

export default connect(null, mapDispatchToProps)(Product);
