import React from 'react';
import {categories} from "../../mockData/categories";
import {products} from "../../mockData/products";


class CategoryRenderer extends React.Component{


    state={
        category:'',
        products:[],
        platformchek:false,
        typecheck:false,
        productitem:false
    }


    handleChange=name=>event=>{
        this.setState({[name]: event.target.value});
        const fproducts=products.filter((product)=> product.category=this.state.category);
        this.setState({products:fproducts})

        if(this.state.category===1)
            this.setState({productitem:true})
        else if(this.state.category===2)
            this.setState({platformcheck:true})
        else
            this.setState({typecheck:true})
    }

    render() {
        return (
            <div>
                <select onChange={this.handleChange('category')}>
                    {categories.map((cat)=>(<option value={cat.id}>{cat.name}</option>))}
                </select>
            </div>
        {this.state.platformchek && <playfromrenderer/>}
        );
    }
}

export default CategoryRenderer;