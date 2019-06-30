import React from 'react';
import ShowTable from "./ShowTable";
import '../../products.css';
import Button from '@material-ui/core/Button';
class ProductItem extends React.Component{

    state={
        products:[]
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
                 newprice : nprice
              };
              newproducts.push(nproducts);
        });
        this.setState({products:newproducts});
    }

render() {
    return(
        <div>
            <button  onClick={this.Show} className='font-iran-sans button-show'>نمایش</button>
           
            {this.state.products.length > 0 && <ShowTable products={this.state.products}/>}

        </div>
    )
}


}

export default ProductItem;