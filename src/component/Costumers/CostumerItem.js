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
                  <TableCell  >
                  {
                 ((Status(status,id))==="فعال")? (<i class="material-icons costumerButton">record_voice_over</i>):(<i class="material-icons costumerButton">perm_identity</i>)
                  }<p className="costumerButton">{Status(status,id)}</p> </TableCell>

                  <TableCell><Link to = {{pathname:`/costumer/${id}`,state:{SID:id}}}><i class="material-icons" >edit</i></Link> 
                  </TableCell>
                 </TableRow>
                 );
           