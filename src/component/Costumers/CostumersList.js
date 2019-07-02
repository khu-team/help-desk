
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
                <p class=" taboftoptable"><i class="material-icons positionpeple"> people</i>لیست مشتریان</p>
                <a href="/add-costumer"> <i class="material-icons coloraddred postionicon" >person_add</i></a>
                
                
                <Table  className='tableofcustomers '>
                <TableHead >
              <TableRow  className=''>
                <TableCell  >شماره</TableCell>
                <TableCell  className="alignright"> نام مشتری</TableCell>
                <TableCell  className="alignright"> شهر </TableCell>
                <TableCell  className="algincenter">وضعیت</TableCell>
                <TableCell  className="alginright">اعمال تغییرات</TableCell>
              </TableRow>

               </TableHead>
                  <TableBody>
                  {costumers.map((costumer) => (
                    <CostumerItem key={costumer.id} {...costumer} />
                ))}
                  </TableBody>
                </Table>
                
                </div>
            )
           
        }
};
export default ShowList;