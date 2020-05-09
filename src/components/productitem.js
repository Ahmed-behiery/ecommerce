import React, { Component } from 'react';
import {NavLink} from "react-router-dom";




class ProductItem extends Component {

  render(){
      const  {product}  = this.props;
  return (
    <div className="productitem">

            <div className="card">
            <img src={product.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}$</p>
                <NavLink to= {"/products/" + product.id} className="btn btn-primary">Details</NavLink>
            </div>
            </div>

    </div>
  );
  }
}

export default ProductItem;
