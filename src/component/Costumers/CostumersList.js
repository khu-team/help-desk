
import React from 'react';
import '../../costumers.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Link} from 'react-router-dom'
import { costumers } from '../../mockData/costumers';
import {CostumerItem} from './CostumerItem';
import AddCostumer from'./Add customer';
class ShowList extends React.Component {

  AddCostum = (props) => ( <div> <AddCostumer costumer={props.costumer}/></div> );
        render() {   
            return (  
       <div>    
                <p class="taboftoptable"><i class="material-icons positionpeple"> people</i>لیست مشتریان</p>
                <Link to="/add-costumer"> <i class="material-icons coloraddred postionicon" >person_add</i></Link>
                <Table  className='tableofcustomers '>
            <TableHead >
              <TableRow >
                <TableCell class="font-iran-sans"  >شماره</TableCell>
                <TableCell class="font-iran-sans" className="alignright "> نام مشتری</TableCell>
                <TableCell class="font-iran-sans" className="alignright "> شهر </TableCell>
                <TableCell class="font-iran-sans" className="algincenter ">وضعیت</TableCell>
                <TableCell class="font-iran-sans" className="alginright ">اعمال تغییرات</TableCell>
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