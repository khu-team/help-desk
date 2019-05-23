import React from 'react';
import ProductRenderer from './ProductRenderer';
import CostumerRenderer from './CostumerRenderer';
import DepartmentRenderer from './DepartmentRenderer';

const TicketItem = (props) => (
	<tr>
		<td>{props.ticket.id}</td>
		<td>{props.ticket.title}</td>
		<td>{props.ticket.priority}</td>
		<CostumerRenderer costumerId={props.ticket.costumer} />
		<ProductRenderer productId={props.ticket.product} />
		<DepartmentRenderer departmentId={props.ticket.department} />
		<td>{props.ticket.answerStatus}</td>
		<td>{props.ticket.submissionDateTime}</td>
	</tr>
);

export default TicketItem;