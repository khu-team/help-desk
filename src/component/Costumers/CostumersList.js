
import React from 'react';
import '../../costumers.css';
import {Link} from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { costumers } from '../../mockData/costumers';
import {CostumerItem} from './CostumerItem';
import AddCustomer from './Add customer';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./navbar";
class ShowList extends React.Component {

  handelSubmit = () => {
        
     document.getElementById(AddCustomer);
   
  }

        render() {   
            return (  
                <div>
                <a class="icon-link " href="/costumer/Addcustomer"><i class="material-icons" >add_circle</i></a>
                 
               
                <Route path="/addcustomer" component={AddCustomer}/>
                  
                  
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