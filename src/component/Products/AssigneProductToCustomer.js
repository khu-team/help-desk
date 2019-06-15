import React, { Component } from 'react';
import {products} from '../../mockData/products';
class AssigneProductToCustomer extends Component {
    state = { 
        products:[],
        product:"سایت وردپرس",
        custumer:''

     }

     handelProductChange = (e)=>{
        const product = e.target.value;
        this.setState({product})
     }


    render() { 
        return ( 
<div>
<form>
    
<div className="">       
            <select value={this.state.product} onChange={this.handelProductChange}>
                {products.map((products=>(<option key={products.id} value={products.name} >{products.name}</option>)))}
            </select>
            <label>محصول</label>
            </div>


<button className="">Add</button>

</form>

</div>
         );
    }
}
 
export default AssigneProductToCustomer;