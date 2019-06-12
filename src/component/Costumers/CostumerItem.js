import React from 'react';
import {cityRenderer} from '../../component/Costumers/City Render'
import {Status} from '../../component/Costumers/Status Costumer'
export const CostumerItem = ({ fullName, city, id,status}) => (
    <div > 
     <table className="GentedTab GentedTab-header">
  <tbody >
    <tr className="GentedTab-Item">
    
      <th>{Status(status,id)}</th>
      <th>{cityRenderer(city, id)}</th>
      <th>{fullName} </th>
      
     
    </tr>
   
  </tbody>
</table>




    </div>
    );