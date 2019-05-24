import React from 'react';


class ProductTable extends React.Component{


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
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable;