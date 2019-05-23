import React, { Component } from 'react';
import {products} from '../../mockData/products';
import {platforms} from '../../mockData/platforms';


class PlatformRenderer extends Component {
    state = { 
        Platform :0,
        products:[]
     };
     handleChange =name=>event =>{
         this.setState({[name]:event.target.value});
         const nproducts=products.filter((product) => product.platform= this.state.Platform);
         this.setState({products:nproducts});

     }
    render() { 
        return ( 
            <div>
              <div>  
            <select onChange={this.handleChange('Platform')}>
                {platforms.map((plat)=>(<option value={plat.id}>{plat.name}</option>))}
                
            </select>
                </div>
        </div>


         );
    }
}
 
export default PlatformRenderer;