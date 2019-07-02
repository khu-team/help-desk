import React, { Component } from 'react';
import {products} from '../../mockData/products';
import {costumers} from '../../mockData/costumers';
import '../../styeles/assignProduct.css'

import ProductsInAssigne from './ProductsInAssigne'
class AssigneProductToCustomer extends Component {
    state = { 
        products:[],
        product:products[0].name,
        costumer:costumers[0].fullName

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
            alert("شما این محصول را یکبار اضافه کردید !")
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

    handleAssigne = (e)=>{
    e.preventDefault();
    //SOMETHING FOR SENDING DATA TO SERVER FOR ASSIGNING PRODUCTS WITH CUSTOMER    
    }

    handelCostumerChange = (e) =>{
        const costumer = e.target.value;
        this.setState({costumer});
    }

    render() { 
        return ( 
<div className="assign-main-select">
<form>
    
<div className="assign-select-customer">       
            <select className="assigne-select" value={this.state.product} onChange={this.handelProductChange}>
                {products.map((product=>(<option  key={product.id} value={product.name} >{product.name}</option>)))}
            </select>
            </div>
            <button onClick={this.handleAddProduct} className="assign-button">افزودن</button>

<br></br>
</form>
<br></br>            
<ProductsInAssigne handleDeleteProduct={this.handleDeleteProduct} products={this.state.products}/>

<br></br>
<form className="assign-select-customer">
    <select className="assigne-select" value={this.state.costumer} onChange={this.handelCostumerChange}>
    {costumers.map((costumer=>(<option  key={costumer.id} value={costumer.fullName} >{costumer.fullName}</option>)))}
    </select>
    <button onClick={this.handleAssigne} className="assign-button">اختصاص</button>
</form>
</div>
         );
    }
}
 
export default AssigneProductToCustomer;
