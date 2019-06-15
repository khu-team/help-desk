import React, { Component } from 'react';
import {platforms} from '../../mockData/platforms';
import '../../products.css';
import ProductItem from "./ProductItem";
class PlatformRenderer extends Component {
    state = {
        products:this.props.products
     };

    handleChange = name => event => {
        const fproducts = this.props.products.filter((product) => product.platform == event.target.value);
      this.setState({products:fproducts})
    };



    render() {
        return (
            <div>
              <div>
            <select  className='select-show-renderer font-iran-sans'  onChange={this.handleChange('Platform') }>
                <option selected hidden >نوع پلتفرم</option>
                {platforms.map((plat)=>(<option value={plat.id}>{plat.name}</option>))}
            </select>
                  <ProductItem products={this.state.products}/>
                </div>
        </div>


         );
    }
}

export default PlatformRenderer;