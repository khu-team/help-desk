import React from 'react'
import '../../products.css';
import ProductItem from "./ProductItem";

class SortByPrice extends React.Component{

    state={
        products:this.props.products
    };

    SortAsc=()=> {
           const newproducts=this.props.products;
           this.setState({products: newproducts.sort((a, b) => (a.price - b.price))})
    };

    SortDesc=()=>{
        const newproducts=this.props.products;
        this.setState({products: newproducts.sort((a, b) => (b.price - a.price))})
    };

    render() {
        return (

            <div>
                <p  className=' font-iran-sans '>ترتیب قیمت</p>
                <label className=' font-iran-sans' >
                    <input onClick={this.SortAsc} type="radio" name="answer"/>
                        صعودی
                </label>
                <label className=' font-iran-sans'>
                    <input onClick={this.SortDesc} type="radio" name="answer"/>
                        نزولی
                </label>
                <ProductItem products={this.state.products}/>
            </div>
        );
    }
}

export default SortByPrice;