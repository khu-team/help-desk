import React from 'react';
import CategoryRenderer from './CategoryRenderer';
import '../../products.css';
import {products} from "../../mockData/products";
import ProductItem from "./ProductItem";
import '../../products.css';
import SortByPrice from './SortByPrice'

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
                    {this.state.show && <ProductItem data={this.state.fproducts}/>}
                    {this.state.showcat && <CategoryRenderer/> }
                    {this.state.showcat && <SortByPrice products={products}/> }

                </div>
           
                

            </div>
        );
    }
}

export default ProductsList;