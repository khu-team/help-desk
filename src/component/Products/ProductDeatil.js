import React from 'react';
import {products} from "../../mockData/products";
import {transactions} from "../../mockData/transactions";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../../products.css';

class ProductDetail extends React.Component {

    ShowDetail=()=> {
        var numeral = require('numeral');
        const ID = this.props.location.state.ID
        const ntransaction=transactions.filter((t)=>t.product==ID)
        const nproduct=products.find((p)=> p.id == ID)
        const {id,name,price,category,duration,discountPercentage}=nproduct;

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
         

        </TableRow>
      </TableHead>

            <TableBody>
            
              <TableRow >
               
                <TableCell align="right">{id}</TableCell>
                <TableCell align="right">{name}</TableCell>
                {category==3 &&<TableCell align="right">{duration}</TableCell>}
                <TableCell align="right">{numeral(price).format('0,0')}تومان </TableCell>
                <TableCell align="right">%{discountPercentage}</TableCell>

              </TableRow>
          
            </TableBody>
          </Table>
        </Paper>  



        <Paper >
          <Table className='sall'>
          <TableHead >
        <TableRow  className='headstyle'>
          <TableCell className='cell'>آیدی خریداران</TableCell>
          <TableCell className='cell' align="right">تاریخ انقضا </TableCell>
       
        </TableRow>
      </TableHead>

            <TableBody>
            
            {ntransaction.map((t)=>{
                    return(
                        <TableRow>
                            <TableCell>{t.costumer}</TableCell>
                            <TableCell>{t.expireDate.calendar()}</TableCell>
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