import React, { Component } from 'react';
import {platforms} from '../../mockData/platforms';
import ProductItem from "./ProductItem";


class PlatformRenderer extends Component {
    state = {
        products:[]
     };

    handleChange = name => event => {
        const fproducts = this.props.products.filter((product) => product.platform == event.target.value);
      this.setState({products:fproducts})
    };



    render() {
        return (
            <div>
              <div>
            <select  onChange={this.handleChange('Platform') }>
                <option selected hidden >نوع پلتفرم</option>
                {platforms.map((plat)=>(<option value={plat.id}>{plat.name}</option>))}
            </select>
                  {this.state.products.length > 0 && <ProductItem data={this.state.products}/>}
                </div>
        </div>


         );
    }
}

export default PlatformRenderer;