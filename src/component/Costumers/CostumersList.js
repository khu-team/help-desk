import React from 'react';
import { costumers } from '../../mockData/costumers';
import {CostumerItem} from '../../component/Costumers/CostumerItem'
import '../Costumers/style/costumers.css';
const CostumersList = () => (
    <div className="welcome">
    <table className="GentedTab" >
    <thead className="GentedTab-header">
      <tr  >
      
      <th> وضعیت</th>
      <th>شهر</th>
      <th>نام مشتری</th>
      
        
      </tr>
    </thead>
    </table>
        {costumers.map((costumer) => (
            <CostumerItem key={costumer.id} {...costumer} />
        ))}
    </div>
);

export default CostumersList;