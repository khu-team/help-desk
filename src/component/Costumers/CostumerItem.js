import React from 'react';
import {cityRenderer} from '../../component/Costumers/City Render'
import {Status} from '../../component/Costumers/Status Costumer'
export const CostumerItem = ({ fullName, city, id,status}) => (
    <div > 
     <table class="GeneratedTable size">
  <tbody>
    <tr>
    
      <th>{Status(status,id)}&nbsp;&nbsp;&nbsp;&nbsp;</th>
      <th>{cityRenderer(city, id)}&nbsp;&nbsp;&nbsp;&nbsp;</th>
      <th>{fullName} &nbsp;&nbsp;&nbsp;&nbsp;</th>
      
     
    </tr>
   
  </tbody>
</table>




    </div>
    );