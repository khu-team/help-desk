import React, { Component } from 'react';
import Server from './Server';
import Website from './Website';
import MobileApp from './MobileApp'
import {categories} from '../../mockData/categories';
class AddProduct extends Component {
    state = { 
        id: '',    
        category: '',
        categoryId: '',
        error: '',
        mobileState: {
            customerId: '',
            platform: 'Android',
        },
        websiteState: {},
        serverState: {},
        products: []
     }
  
    //Functions
    //Get Categoris fileds from their component
getCategoryFields = (categoryId)=>{
        switch (categoryId) {
            case 1:
                return (<Website />)
            case 2:
                return (<MobileApp 
                    handleId={this.handleMobileIdChange} 
                    handlePlatform={this.handlePlatformChange}
                    localState={this.state.mobileState}
                    /> ) 
            case 3:
                return (<Server />) 
            default:
                return (<Website />)      
        }
}
    //Handel Category

    handelCategory = (e)=> {
        const category = e.target.value;
        const categoryId = categories.find(arg => arg.name === category).id
        this.setState({ category , categoryId })
    } 

    //handle mobile id

    handleMobileIdChange = (e) => {
        const customerId = e.target.value
        const {mobileState} = this.state
        mobileState.customerId = customerId
        this.setState({mobileState})
    }

    //handelPlatform

    handlePlatformChange = (e) => {
        const platform = e.target.value
        const {mobileState} = this.state
        mobileState.platform = platform
        this.setState({mobileState})
    }

    //handle id change

    handleIdChange = (e) => {
        const id = e.target.value
        if(this.state.categoryId === 2) {
            this.setState({id})
        }else if(this.state.categoryId === 1) {

        }else if(this.state.categoryId === 3) {

        }
    }

    //handle submit

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.categoryId === 2) {
            if(this.state.mobileState.customerId === '' || this.state.id === ''){
                this.setState({error: 'please enter id and customer id'})
            }else{
                let {mobileState, products} = this.state
                const {id, categoryId,category} = this.state
                const {customerId, platform} = mobileState
                products = [...products,{id, categoryId, category, customerId, platform}]
                let preState = this.state
                preState = {...preState,
                    id: '',
                    error: '',
                    category: '',
                    categoryId: '',
                    mobileState: {
                        customerId: '',
                        platform: 'Android'
                    }
                }
                this.setState({...preState,products})
            }
        }else if(this.state.categoryId === 1) {

        }else if(this.state.categoryId === 3) {

        }

    }

    render() { 
        return (    
            <form className="welcome">
            <div>{this.state.error ? <p>{this.state.error}</p> : true}</div>
            <div>
             <label>ID:</label>   
            <input type="number" value={this.state.id} onChange={this.handleIdChange}></input>
            </div>
            <div>
            <label>Category: </label>                
            <select value={this.state.category} onChange={this.handelCategory}>
                {categories.map((category=>(<option key={category.id} value={category.name} >{category.name}</option>)))}
            </select>
            </div>
            <div>
            {this.getCategoryFields(this.state.categoryId)}
            </div>
            <div>
            <button onClick={this.handleSubmit}>Submit</button>
           </div>
            </form>    
            
         );
    }
}
 
export default AddProduct;