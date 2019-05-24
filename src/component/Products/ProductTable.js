import React from 'react';
import ProductItem from "./ProductItem";
import './style.css';

class ProductTable extends React.Component{


    render() {
        return (
            <div>
                <h1 id="title"></h1>
                <table id="customers">

                    <tr key={6}>
                        <th style="padding-top: 12px; padding-bottom: 12px; text-align: left; background-color: #4CAF50;
                        color: white;"> ID </th>
                        <th style="padding-top: 12px; padding-bottom: 12px; text-align: left; background-color: #4CAF50;
                        color: white;"> نام محصول </th>
                        <th style="padding-top: 12px; padding-bottom: 12px; text-align: left; background-color: #4CAF50;
                        color: white;"> قیمت</th>
                        <th style="padding-top: 12px; padding-bottom: 12px; text-align: left; background-color: #4CAF50;
                        color: white;"> درصد تخفیف </th>
                        <th style="padding-top: 12px; padding-bottom: 12px; text-align: left; background-color: #4CAF50;
                        color: white;"> قیمت با تخفیف </th>
                    </tr>

                </table>
            </div>
        )
    }
}

export default ProductTable;