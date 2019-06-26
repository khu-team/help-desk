
import React from 'react';
import { costumers } from '../../mockData/costumers';
import {CostumerItem} from './CostumerItem';

const ShowList = () => (
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
export default ShowList;