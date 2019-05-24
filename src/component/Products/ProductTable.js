import React from 'react';
import ProductItem from "./ProductItem";
import './style.css';

class ProductTable extends React.Component{


    render() {
        return (
            <div>
                <h1 id='title'></h1>
                <table id="customers">
                    
                    <tr key={6}>
                        <th>ID</th>
                        <th>نام محصول</th>
                        <th>قیمت</th>
                        <th>درصد تخفیف</th>
                        <th>قیمت با تخفیف</th>
                    </tr>
                    
                </table>
            </div>
        )
    }
}

export default ProductTable;