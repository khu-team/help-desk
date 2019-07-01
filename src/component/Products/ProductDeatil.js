import React from 'react';
import {products} from "../../mockData/products";
import {transactions} from "../../mockData/transactions";
import moment from 'moment-jalaali';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
            <Paper >
          <Table className='sall'>
          <TableHead >
        <TableRow  className='headstyle'>
          <TableCell className='cell'>آیدی محصول</TableCell>
          <TableCell className='cell' align="right">نام </TableCell>
         {category==3 &&<TableCell className='cell' align="right">مدت زمان فعالیت</TableCell>} 
          <TableCell className='cell' align="right">قیمت</TableCell>
          <TableCell className='cell' onClick={this.Sort}   align="right">درصد تخفیف </TableCell>
            <TableCell className='cell' align="right">قیمت با تخفیف</TableCell>
         

        </TableRow>
      </TableHead>

            <TableBody>
            
              <TableRow >
               
                <TableCell align="right">{id}</TableCell>
                <TableCell align="right">{name}</TableCell>
                {category==3 &&<TableCell align="right">{duration}</TableCell>}
                <TableCell align="right">{numeral(price).format('0,0')}تومان </TableCell>
                <TableCell align="right">%{discountPercentage}</TableCell>
                  <TableCell align="right">{numeral(nprice).format('0,0')}تومان </TableCell>

              </TableRow>
          
            </TableBody>
          </Table>
        </Paper>  



        <Paper >
          <Table className='sall'>
          <TableHead >
        <TableRow  className='headstyle'>
          <TableCell className='cell'>آیدی خریدار</TableCell>
            <TableCell className='cell'>نام خریدار</TableCell>
          <TableCell className='cell' align="right">تاریخ انقضا </TableCell>
       
        </TableRow>
      </TableHead>

            <TableBody>
            
            {ntransaction.map((t)=>{
                    return(
                        <TableRow>
                            <TableCell>{t.costumer}</TableCell>
                            <TableCell>{costumers.find((c)=>c.id==t.costumer).fullName}</TableCell>
                            <TableCell>{t.expireDate.format('jYYYY/jM/jD')}</TableCell>
                        </TableRow>
                    )
                })}
          
            </TableBody>
          </Table>
        </Paper>  



            </div>
        )
    }


    render() {
        return this.ShowDetail()

    }
}

export default ProductDetail;