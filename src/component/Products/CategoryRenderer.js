import React from 'react';
import {categories} from "../../mockData/categories";
import {products} from "../../mockData/products";
import PlatformRenderer from './PlatformRenderer';
import TypeRenderer from "./TypeRenderer";
import ProductItem from "./ProductItem";

import '../../products.css';

class CategoryRenderer extends React.Component{


    state={
        category:0,
        products:[],
    };


    handleChange = name => event => {
        this.setState({[name]:event.target.value});
        const fproducts = products.filter((product) => product.category == event.target.value);
        this.setState({products:fproducts})
    };

    render() {
        return (
            <div>
                <select value={this.state.category} onChange={this.handleChange('category')} className='select-show font-iran-sans'>
                    <option className='center-text' key={5} selected hidden >محصولات </option>
                    {categories.map((cat)=>(<option key={cat.id} value={cat.id}>{cat.name}</option>))}
                </select>
                {this.state.category==1 && this.state.products.length > 0 && <ProductItem data={this.state.products}/>}
                {this.state.category==2 && this.state.products.length > 0 && <PlatformRenderer products={this.state.products}/>}
                {this.state.category==3 && this.state.products.length > 0 && <TypeRenderer products={this.state.products}/>}
            </div>

        );
    }
}

export default CategoryRenderer;