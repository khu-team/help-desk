import React from 'react';
import {categories} from "../../mockData/categories";
import {products} from "../../mockData/products";
import PlatformRenderer from './PlatformRenderer';
import TypeRenderer from "./TypeRenderer";

class CategoryRenderer extends React.Component{


    state={
        category:0,
        products:[],
    };


    handleChange=name=>event=>{
        this.setState({[name]: event.target.value});
        const fproducts=products.filter((product)=> product.category=this.state.category);
        this.setState({products:fproducts});
    };

    render() {
        return (
            <div>
                <select onChange={this.handleChange('category')}>
                    {categories.map((cat)=>(<option value={cat.id}>{cat.name}</option>))}
                </select>
                {this.state.category==2 && <PlatformRenderer/>}
                {this.state.category==3 && <TypeRenderer/>}
            </div>

        );
    }
}

export default CategoryRenderer;