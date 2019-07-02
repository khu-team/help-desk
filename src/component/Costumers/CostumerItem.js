import React from 'react';
import {Link} from "react-router-dom";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {cityRenderer} from '../../component/Costumers/City Render'
import {Status} from '../../component/Costumers/Status Costumer'
import Typography from '@material-ui/core/Typography';
import './CostumerItem.css'
export const CostumerItem = ({ fullName, city, id,status}) => (
   
                  <TableRow>
                  <TableCell>{id}</TableCell>
                  <TableCell >{fullName}</TableCell>
                  <TableCell >{cityRenderer(city, id)} </TableCell>
                  <TableCell  >
                  {
                 ((Status(status,id))==="فعال")? (<i class="material-icons costumerButtongreen"><tittle class="font-iran-sans">فعال</tittle>record_voice_over</i>):(<i class="material-icons costumerButtonred"><tittle class="font-iran-sans">غیرفعال</tittle >perm_identity</i>)
                  }
                 </TableCell>

                  <TableCell><Link to = {{pathname:`/costumer/${id}`,state:{SID:id}}}><i class="material-icons colorgreen" ><tittle class="font-iran-sans">ویرایش</tittle>edit</i></Link> 
                  </TableCell>
                 </TableRow>
                 );
           