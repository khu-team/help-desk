import React from 'react';
import CategoryRenderer from './CategoryRenderer';
import '../../products.css';
import {products} from "../../mockData/products";
import ProductItem from "./ProductItem";
import '../../products.css';

class ProductsList extends React.Component{
    state={
     
     fproducts:products ,
     show:true ,
     showcat:false
    };

    show =()=>{
      this.setState({show:false , showcat:true})
    }
 
    render() {
        return (
            <div>
                <div >

                    <button  className='filter font-iran-sans' onClick={this.show}>فیلتر</button>
                    {this.state.show && <ProductItem products={this.state.fproducts}/>}
                    {this.state.showcat && <CategoryRenderer/> }


                </div>
           
                

            </div>
        );
    }
}

export default ProductsList;