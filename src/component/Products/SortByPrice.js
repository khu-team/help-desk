import React from 'react'
import '../../products.css';

class SortByPrice extends React.Component{

    state={
        products:this.props.products
    }

    SortAsc=()=> {
           const newproducts=this.props.products
           this.setState({products: newproducts.sort((a, b) => (a.price - b.price))})
           console.log(this.state.products)
    };

    SortDesc=()=>{
        const newproducts=this.props.products
        this.setState({products: newproducts.sort((a, b) => (b.price - a.price))})
        console.log(this.state.products)
    }

    render() {
        return (

            <div>
                <p  className=' font-iran-sans'>ترتیب قیمت</p>
                <label className=' font-iran-sans'>
                    <input onClick={this.SortAsc} type="radio" name="answer"/>
                        صعودی
                </label>
                <label className=' font-iran-sans'>
                    <input onClick={this.SortDesc} type="radio" name="answer"/>
                        نزولی
                </label>
            </div>
        );
    }
}

export default SortByPrice;