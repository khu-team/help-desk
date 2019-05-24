import React from 'react';
import ProductItem from "./ProductItem";


class ProductTable extends React.Component{


    render() {
        return (
            <div>
                <h1 id='title'></h1>
                <table id='products'>
                    <tbody>
                    <tr key={6}>
                        <th>ID</th>
                        <th>نام محصول</th>
                        <th>قیمت</th>
                        <th>درصد تخفیف</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable;