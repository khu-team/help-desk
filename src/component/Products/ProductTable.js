import React from 'react';


class ProductTable extends React.Component{


    renderTableData() {
        return this.props.data.map((product,index) => {
            const { id, name, price , discountPercentage , newprice } = product ;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{discountPercentage}</td>
                    <td>{newprice}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table id='products'>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <th>نام محصول</th>
                        <th>قیمت</th>
                        <th>تخفیف</th>
                        <th>قیمت با تخفیف</th>
                    </tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable;