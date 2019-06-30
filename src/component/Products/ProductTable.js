import React from 'react';
class ProductTable extends React.Component{

    renderTableData() {
        return this.props.data.map((product,index) => {
            const { id, name, price , discountPercentage , newprice } = product ;
            return (
                <tr key={id} className='product-table-tr'>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td> {price} تومان </td>
                    <td>{discountPercentage}%</td>
                    <td> {newprice} تومان </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table id='products' className='customers font-iran-sans' >
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