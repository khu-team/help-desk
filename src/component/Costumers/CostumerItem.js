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

                  <TableCell><i class="material-icons">edit</i><Link to={{pathname:`/EditCostumer/${id}`,state:{ID:id}}}> </Link></TableCell>
                 </TableRow>
                 );