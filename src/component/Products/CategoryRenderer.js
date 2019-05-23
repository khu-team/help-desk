import React from 'react';
import {categories} from "../../mockData/categories";
import {products} from "../../mockData/products";
import PlatformRenderer from './PlatformRenderer';

class CategoryRenderer extends React.Component{


    state={
        category:0,
        products:[],
        platformchek:false,
        typecheck:false,
        productitem:false
    };


    handleChange=name=>event=>{
        this.setState({[name]: event.target.value});
        const fproducts=products.filter((product)=> product.category=this.state.category);
        this.setState({products:fproducts});

        if(this.state.category===1) {
            this.setState({productitem: true});
            this.setState({typecheck: false});
            this.setState({platfromitem: false})
        }
        else if(this.state.category===2) {
            this.setState({platformcheck: true});
            this.setState({typecheck: false});
            this.setState({productitem: false})
        }
        else {
            this.setState({typecheck: true});
            this.setState({platformcheck: false});
            this.setState({productitem: false});
        }
    };

    render() {
        return (
            <div>
                <select onChange={this.handleChange('category')}>
                    {categories.map((cat)=>(<option value={cat.id}>{cat.name}</option>))}
                </select>
                {this.state.category==2 && <PlatformRenderer/>}
            </div>

        );
    }
}

export default CategoryRenderer;