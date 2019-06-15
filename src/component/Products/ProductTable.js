import React from 'react';
import '../../products.css';


class ProductTable extends React.Component{


    state={
        nozooli:'unkown',
    }

    renderTableData=()=> {
        var numeral = require('numeral');


        if(this.state.nozooli==true)
            this.props.products.sort((a, b) => (b.newprice - a.newprice))
        if(this.state.nozooli==false)
            this.props.products.sort((a, b) => (a.newprice - b.newprice))


        return this.props.products.map((product,index) => {
            const { id, name, price , discountPercentage , newprice } = product ;
            return (
                <tr key={id} >
                    <td>{id}</td>
                    <td>{name}</td>
                    <td> {price} تومان </td>
                    <td>{discountPercentage}%</td>
                    <td> {numeral(newprice).format('0,0')} تومان </td>
                </tr>
            )
        })
    };


    Sort=()=>{
        if(this.state.nozooli==true)
            this.setState({nozooli:false})
        else
            this.setState({nozooli:true})
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
                        <th onClick={this.Sort}  className='price'>قیمت با تخفیف</th>
                    </tr>
                    { this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable;