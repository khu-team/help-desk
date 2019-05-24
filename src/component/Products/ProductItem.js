import React from 'react';
import ProductTable from "./ProductTable";

class ProductItem extends React.Component{


    renderTableData() {
        return this.props.data.map((product,index) => {
            const { id, name, price , discountPercentage } = product ;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{discountPercentage}</td>
                </tr>
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