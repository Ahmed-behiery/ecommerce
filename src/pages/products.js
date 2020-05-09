import React, { Component } from 'react';
import ProductItem from "../components/productitem";
import ProductsApi from "../api/products";



class Products extends Component {

    state= {
        products: []
    }


    componentDidMount(){
      ProductsApi.getAll().then( data => {
          this.setState({ products: data })        
      })
    }

  render(){

   const products = this.state.products;
   const ProductList = products.map((product, index) => 

            <div className="col-lg-4 col-sm-6 col-12" key={index}>
                  <ProductItem product={product} /><br />

            </div>
    )
       
       
       
   

  return (
    <div className="products">
        <h1> Products </h1>

            <div className="row">

                  {ProductList}

            </div>

    </div>
  );
  }
}

export default Products;
