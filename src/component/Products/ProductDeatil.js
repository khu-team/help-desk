import React from 'react';
import {products} from "../../mockData/products";
import {transactions} from "../../mockData/transactions";
import '../../products.css';
import {costumers} from "../../mockData/costumers";

class ProductDetail extends React.Component {

    ShowDetail=()=> {
        var numeral = require('numeral');
        const ID = this.props.location.state.ID
        const ntransaction=transactions.filter((t)=>t.product==ID)
        const nproduct=products.find((p)=> p.id == ID)
        const {id,name,price,category,duration,discountPercentage}=nproduct;
        const persent= discountPercentage/100;
        const nprice=price -persent*price;

        return(
            <div>
          <table className=' table table-striped customers font-iran-sans'>
          <tbody>
        <tr >
          <th >آیدی محصول</th>
          <th >نام </th>
         {category==3 &&<th >مدت زمان فعالیت</th>}
          <th >قیمت</th>
          <th >درصد تخفیف </th>
            <th>قیمت با تخفیف</th>
         

        </tr>
      </tbody>

            <tbody>
            
              <tr >
               
                <td >{id}</td>
                <td >{name}</td>
                {category==3 &&<td >{duration}</td>}
                <td >{numeral(price).format('0,0')}تومان </td>
                <td >%{discountPercentage}</td>
                  <td >{numeral(nprice).format('0,0')}تومان </td>

              </tr>
          
            </tbody>
          </table>





          <table className='  table table-striped customers font-iran-sans'>
          <tbody>
        <tr>
          <th>آیدی خریدار</th>
            <th>نام خریدار</th>
          <th>تاریخ انقضا </th>
       
        </tr>
      </tbody>

            <tbody>
            
            {ntransaction.map((t)=>{
                    return(
                        <tr>
                            <td>{t.costumer}</td>
                            <td>{costumers.find((c)=>c.id==t.costumer).fullName}</td>
                            <td>{t.expireDate.format('jYYYY/jM/jD')}</td>
                        </tr>
                    )
                })}
          
            </tbody>
          </table>




            </div>
        )
    };


    render() {
        return this.ShowDetail()

    }
}

export default ProductDetail;