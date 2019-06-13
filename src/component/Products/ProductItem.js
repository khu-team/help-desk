import React from 'react';
import ProductTable from "./ProductTable";
import '../../products.css';

class ProductItem extends React.Component{

    state={
        products:this.props.products
    };

    Show=()=> {
        var numeral = require('numeral');
        const newproducts=[];

        this.props.products.map((product) => {

            const num = numeral(product.price).format('0,0');
            const persent= product.discountPercentage/100;
            const nprice=product.price -persent*product.price;

            const nproducts= {
                 id:product.id,
                 name:product.name,
                 price:num,
                 discountPercentage:product.discountPercentage,
                 newprice : numeral(nprice).format('0,0')
              };
              newproducts.push(nproducts);
        });
        this.setState({products:newproducts});
    }

render() {
    return(
        <div>
            <button onClick={this.Show} className='font-iran-sans button-show'>نمایش</button>
            <ProductTable products={this.state.products}/>
        </div>
    )
}


}

export default ProductItem;