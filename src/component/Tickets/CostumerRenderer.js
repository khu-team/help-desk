import React from 'react';
import {costumers} from '../../mockData/costumers';

const CostumerRenderer = (props) => {
   const costumer = (costumers.find((costumer) => costumer.id === props.costumerId));

   return (<td  className="column4 font-iran-sans"> {costumer.fullName} </td>);
}

export default CostumerRenderer;