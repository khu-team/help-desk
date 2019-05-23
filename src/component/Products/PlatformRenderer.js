import React, { Component } from 'react';
import {platforms} from '../../mockData/platforms';
import {products} from "../../mockData/products";


class PlatformRenderer extends Component {
    state = {
        Platform :0,
        products:[]
     };

    handleChange = name => event => {
        event.persist()
        this.setState(() => ({[name]: event.target.value}),
            this.setState((state) => {
                    const fproducts = this.props.products.filter((product) => product.platform == state.platform);
                    return ({products: fproducts});
                },
                () => console.log(this.state.products)
            )
        );
    }

    render() {
        return (
            <div>
              <div>
            <select onChange={this.handleChange('Platform')}>
                <option selected hidden >نوع پلتفرم</option>
                {platforms.map((plat)=>(<option value={plat.id}>{plat.name}</option>))}
            </select>
                  {this.state.products.length > 0 && <p>sahlam</p>}
                </div>
        </div>


         );
    }
}

export default PlatformRenderer;