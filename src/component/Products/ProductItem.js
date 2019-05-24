import React from 'react';
import ProductTable from "./ProductTable";

class ProductItem extends React.Component{

    renderTableData() {
        var numeral = require('numeral');
       
        return this.props.data.map((product,index) => {
           
            const num = numeral(product.price).format('0,0');
            const persent= product.discountPercentage/100;
            const nprice=product.price -persent*product.price;
            const newprice=numeral(nprice).format('0,0');
            const { id, name,  discountPercentage } = product ;
            
            return (
                <div>

               
                    <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{num}__</td>
                    <td>{discountPercentage}___</td>
                    <td>{newprice}</td>



                </tr>


                </div>
               
            )
        })
    }

render() {
    return(
        <div>
            <ProductTable/>
            {this.renderTableData()}
        </div>
    )
}


}

export default ProductItem;