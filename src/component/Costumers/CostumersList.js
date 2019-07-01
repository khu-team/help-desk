
import React from 'react';
import '../../costumers.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { costumers } from '../../mockData/costumers';
import {CostumerItem} from './CostumerItem';
import AddCostumer from'./Add customer';
class ShowList extends React.Component {

  AddCostum = (props) => (
    <div>
        <AddCostumer costumer={props.costumer}/>
    </div>
);
        render() {   
            return (  
                <div>
                <a href="/add-costumer"> <i class="material-icons coloraddred" >add_circle</i></a>
                 <Paper>
                <Table  className=''>
                <TableHead >
              <TableRow  className=''>
                <TableCell className=''>شماره</TableCell>
                <TableCell className='' align="right"> نام مشتری</TableCell>
                <TableCell className='' align="right"> شهر </TableCell>
                <TableCell className='' align="right">وضعیت</TableCell>
               
                <TableCell className='' align="right">اعمال تغییرات</TableCell>
              </TableRow>
            </TableHead>
                  <TableBody>
                  {costumers.map((costumer) => (
                    <CostumerItem key={costumer.id} {...costumer} />
                ))}
                  </TableBody>
                </Table>
              </Paper>  
                </div>
            )
           
        }
};
export default ShowList;