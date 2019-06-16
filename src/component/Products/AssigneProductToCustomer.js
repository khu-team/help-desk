import React, { Component } from 'react';
import {products} from '../../mockData/products';
import ProductsInAssigne from './ProductsInAssigne'
class AssigneProductToCustomer extends Component {
    state = { 
        products:[],
        product:"سایت وردپرس",
        custumer:''

     }

     handelProductChange = (e)=>{
        const product = e.target.value;
        this.setState({product});
     }

     handleAddProduct=(e)=>{
         e.preventDefault();
         const stateproduct = this.state.product;
         const tempproducts = this.state.products;
         const temp_check_duplicated = tempproducts.filter(p =>p.name==stateproduct);
         if(temp_check_duplicated.length===1){
            alert("There is a product with this name!")
         }
         else{
            const newproduct = products.filter(p=>p.name===stateproduct)[0];
            tempproducts.push(newproduct);
            this.setState({products:tempproducts})
           }
     }
    
    handleDeleteProduct = (e,product)=>{
    e.preventDefault();
    const prevproducts = this.state.products;
    const products = prevproducts.filter(p=>p !==product);
    this.setState({products});
}

    render() { 
        return ( 
<div>
<form>
    
<div className="">       
            <select  value={this.state.product} onChange={this.handelProductChange}>
                {products.map((product=>(<option  key={product.id} value={product.name} >{product.name}</option>)))}
            </select>
            </div>

<ProductsInAssigne handleDeleteProduct={this.handleDeleteProduct} products={this.state.products}/>

<button onClick={this.handleAddProduct} className="">Add</button>

</form>

</div>
         );
    }
}
 
export default AssigneProductToCustomer;