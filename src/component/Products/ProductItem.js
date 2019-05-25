import React from 'react';
import ProductTable from "./ProductTable";

class ProductItem extends React.Component{

    state={
        products:[]
    }

    Show=()=> {
        var numeral = require('numeral');
        const newproducts=[];

        this.props.data.map((product) => {

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
        console.log(this.state.products)
    }

render() {
    return(
        <div>
            <button onClick={this.Show}>نمایش</button>
            {this.state.products.length > 0 && <ProductTable data={this.state.products}/>}
        </div>
    )
}


}

export default ProductItem;