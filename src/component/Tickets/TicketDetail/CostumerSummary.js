import React from 'react';
import { tickets } from '../../../mockData/tickets';
import { costumers } from '../../../mockData/costumers';
import { products } from '../../../mockData/products';

const costumerRenderer = (ticketId) => {
    const costumerId = tickets.find((ticket) => ticket.id === Number(ticketId)).costumer;
    const costumerName = costumers.find((costumer) => (costumer.id === costumerId)).fullName;
    return (
        <div>مشتری : {costumerName}</div>
    )
}
const productRenderer = (ticketId) => {
    const productId = tickets.find((ticket) => ticket.id === Number(ticketId)).product;
    const productName = products.find((product) => (product.id === productId)).name;
    return (
        <div>محصول : {productName}</div>
    )
}

const CostumerSummary = (props) => (
    <React.Fragment>
        <div className="costumerSummary">
            <div className="costumerSummary__Costumer">
                {
                    costumerRenderer(props.ticketId)
                }
            </div>
            <div className="costumerSummary__Product">
                {
                    productRenderer(props.ticketId)
                }
            </div>
            <div></div>
        </div>
    </React.Fragment>
);

export default CostumerSummary;