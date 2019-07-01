import React from 'react';
import '../../products.css';
import {Link} from "react-router-dom";


class ShowTable extends React.Component {
    state = { nozooli:'unkown' }

  

    renderTableData=()=> {
        var numeral = require('numeral');
    
    
        if(this.state.nozooli==true)
            this.props.products.sort((a, b) => (b.price - a.price))
        if(this.state.nozooli==false)
            this.props.products.sort((a, b) => (a.price - b.price))

    
        return this.props.products.map((product,index) => {
            const num = numeral(product.price).format('0,0');
            const persent= product.discountPercentage/100;
            const nprice=product.price -persent*product.price;
            const { id, name , discountPercentage  } = product ;
            return (
                
              
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td >{num} تومان</td>
                  <td >{discountPercentage}%</td>
                  <td >{numeral(nprice).format('0,0')} تومان </td>
                  <td><Link to = {{pathname:`/product/${id}`, state:{ID:id}}}> جزییات </Link></td>
                  <td><Link to = {{pathname:`/edit-product/${id}`,state:{ID:id}}}> ویرایش </Link></td>
    
                </tr>
            
            )
        })
    };
    
    
    Sort=()=>{
        if(this.state.nozooli==true)
            this.setState({nozooli:false})
        else
            this.setState({nozooli:true})
    };
    
      
    
    
    

    render() { 
       
    
        return (
           
            <div>
            <table className=' tabel table-striped customers font-iran-sans'>
            <tbody >
          <tr>
            <th>ID</th>
            <th>نام محصول</th>
            <th className='price' onClick={this.Sort}>قیمت</th>
            <th>تخفیف</th>
            <th className='price' onClick={this.Sort}>قیمت با تخفیف</th>
            <th>جزییات</th>
            <th>اعمال تغییرات</th>

          </tr>
        </tbody>
              <tbody>
              {this.renderTableData()}
              </tbody>
            </table>
            </div>
        )
       
    }
}
 
export default ShowTable;