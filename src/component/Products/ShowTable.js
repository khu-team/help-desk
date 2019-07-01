import React from 'react';
import '../../products.css';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class ShowTable extends React.Component {
    state = { nozooli:'unkown' }

  

    renderTableData=()=> {
        var numeral = require('numeral');
    
    
        if(this.state.nozooli==true)
            this.props.products.sort((a, b) => (b.newprice - a.newprice))
        if(this.state.nozooli==false)
            this.props.products.sort((a, b) => (a.newprice - b.newprice))

    
        return this.props.products.map((product,index) => {
            const num = numeral(product.price).format('0,0');
            const persent= product.discountPercentage/100;
            const nprice=product.price -persent*product.price;
            const { id, name , discountPercentage  } = product ;
            return (
                
              
                <TableRow>
                  <TableCell>{id}</TableCell>
                  <TableCell >{name}</TableCell>
                  <TableCell >{num} تومان</TableCell>
                  <TableCell >{discountPercentage}%</TableCell>
                  <TableCell >{numeral(nprice).format('0,0')} تومان </TableCell>
                  <TableCell><Link to = {{pathname:`/product/${id}`, state:{ID:id}}}> جزییات </Link></TableCell>
                  <TableCell><Link to = {{pathname:`/edit-product/${id}`,state:{ID:id}}}> ویرایش </Link></TableCell>
    
                </TableRow>
            
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
              <Paper >
            <Table className='sall'>
            <TableHead >
          <TableRow  className='headstyle'>
            <TableCell className='cell'>ID</TableCell>
            <TableCell className='cell' align="right">نام محصول</TableCell>
            <TableCell className='cell' align="right">قیمت</TableCell>
            <TableCell className='cell' align="right">تخفیف</TableCell>
            <TableCell className='cell' onClick={this.Sort}   align="right">قیمت با تخفیف</TableCell>
            <TableCell className='cell' align="right">جزییات</TableCell>
            <TableCell className='cell' align="right">اعمال تغییرات</TableCell>

          </TableRow>
        </TableHead>
              <TableBody>
              {this.renderTableData()}
              </TableBody>
            </Table>
          </Paper>  
            </div>
        )
       
    }
}
 
export default ShowTable;