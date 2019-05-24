import React, { Component } from 'react';
import Server from './Server';
import Website from './Website';
import MobileApp from './MobileApp'
import {categories} from '../../mockData/categories';
class AddProduct extends Component {
    state = { 
        id:'1',    
        category:"",
        categoryId:1
     }
  
    //Functions
    //Get Categoris fileds from their component
getCategoryFields = (categoryId)=>{
        switch (categoryId) {
            case 1:
                return (<Website />)
            case 2:
                return (<MobileApp /> ) 
            case 3:
                return (<Server />)       
        }
}
    //Handel Category

    handelCategory = (e)=>{
        const category = e.target.value;
        const categoryId=categories.filter(cat=>cat.name==category)[0].id;
        this.setState({
            category,categoryId

        })
    } 
    render() { 
        return (    
            <form className="welcome">
            <div>
             <label>ID:</label>   
            <input type="number"></input>
            </div>
            <div>
            <label>Category: </label>                
            <select value={this.state.category} onChange={this.handelCategory}>
                {categories.map((category=>(<option key={category.id}>{category.name}</option>)))}
            </select>
            </div>
            <div>
            {this.getCategoryFields(this.state.categoryId)}
            </div>
            <div>
            <button>Submit</button>
           </div>
            </form>    
            
         );
    }
}
 
export default AddProduct;