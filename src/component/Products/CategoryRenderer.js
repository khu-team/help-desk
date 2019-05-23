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


    handleChange = name => event => {
        event.persist()
        this.setState(() => ({ [name]: event.target.value }),
            this.setState((state) => {
                    const fproducts = products.filter((product) => product.category == state.category);
                    return ({ products: fproducts });
                },
                () => console.log(this.state.products)
            )
        );

    };

    render() {
        return (
            <div>
                <select value={this.state.category} onChange={this.handleChange('category')}>
                    <option key={5} selected hidden >نوع محصول</option>
                    {categories.map((cat)=>(<option key={cat.id} value={cat.id}>{cat.name}</option>))}
                </select>
                {this.state.category==2 && <PlatformRenderer products={this.state.products}/>}
                {this.state.category==3 && <TypeRenderer products={this.state.products}/>}
            </div>

        );
    }
}

export default CategoryRenderer;