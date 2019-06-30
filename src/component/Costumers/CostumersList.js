import React from 'react';
import { costumers } from '../../mockData/costumers';
import {CostumerItem} from '../../component/Costumers/CostumerItem'

const CostumersList = () => (
    <div className="welcome ">
    <table class="GeneratedTable">
    <thead>
      <tr>
      
      <th> وضعیت&nbsp;&nbsp;&nbsp;&nbsp;</th>
      <th>شهر&nbsp;&nbsp;&nbsp;&nbsp;</th>
      <th>نام مشتری&nbsp;&nbsp;&nbsp;&nbsp;</th>
      
        
      </tr>
    </thead>
    </table>
        {costumers.map((costumer) => (
            <CostumerItem key={costumer.id} {...costumer} />
          /*  <ul key={costumer.id}>
            <li>name: {costumer.fullName} city:{cities.name}</li>
            </ul>*/
        ))}
    </div>
);

export default CostumersList;