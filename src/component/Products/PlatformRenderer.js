import React, { Component } from 'react';
import {platforms} from '../../mockData/platforms';
import '../../products.css';
import {products} from "../../mockData/products";
import ShowTable from "./ShowTable";
class PlatformRenderer extends Component {
    state = {
        products:this.props.products
     };

    handleChange = name => event => {
        if(event.target.value == 0) {
            const fproducts = products.filter((product) => product.category == 2);
            this.setState({products:fproducts})
        }else {
            const fproducts = this.props.products.filter((product) => product.platform == event.target.value);
            this.setState({products: fproducts})
        }
    };



    render() {
        return (
            <div>
              <div>
            <select  className='select-show-renderer font-iran-sans'  onChange={this.handleChange('Platform') }>
                <option value={0} >همه محصولات</option>
                {platforms.map((plat)=>(<option value={plat.id}>{plat.name}</option>))}
            </select>
                  <ShowTable products={this.state.products}/>
                </div>
        </div>


         );
    }
}

export default PlatformRenderer;