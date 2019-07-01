import React from 'react';
import {Link} from "react-router-dom";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {cityRenderer} from '../../component/Costumers/City Render'
import {Status} from '../../component/Costumers/Status Costumer'

export const CostumerItem = ({ fullName, city, id,status}) => (
   
                  <TableRow>
                  <TableCell>{id}</TableCell>
                  <TableCell >{fullName}</TableCell>
                  <TableCell >{cityRenderer(city, id)} </TableCell>
                  <TableCell >
                  {
                 ((Status(status,id))==="فعال")?(<i class="material-icons">perm_identity</i>): (<i class="material-icons">record_voice_over</i>)
                  }{Status(status,id)} </TableCell>

                  <TableCell> 
                  <Link to = {{pathname:`/edit-product/${id}`,state:{ID:id}}}></Link><i class="material-icons" >edit</i></TableCell>
                 </TableRow>
                 );
                 /**
                  * ><a class="icon-link " href="/costumer/Editcustomer"><i class="material-icons" >edit</i></a>
                  *<Link to = {{pathname:`/edit-product/${id}`,state:{ID:id}}}> */