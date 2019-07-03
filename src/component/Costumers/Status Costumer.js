import { costumers } from '../../mockData/costumers';

export const Status =(state,id)=>
{
    const StatusCostumer=costumers.find((item) => item.status===state);

    return  (StatusCostumer.status===false) ? 'غیر فعال':'فعال'
}