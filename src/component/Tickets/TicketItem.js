import React from 'react';
import ProductRenderer from './ProductRenderer';
import CostumerRenderer from './CostumerRenderer';
import DepartmentRenderer from './DepartmentRenderer';

const TicketItem = (props) => (
	<tr>
		<td className="column1">{props.ticket.id}</td>
		<td className="column2">{props.ticket.title}</td>
		<td className="column3">{props.ticket.priority}</td>
		<CostumerRenderer costumerId={props.ticket.costumer} />
		<ProductRenderer productId={props.ticket.product} />
		<DepartmentRenderer departmentId={props.ticket.department} />
		<td className="column7">{props.ticket.answerStatus}</td>
		<td className="column82">{props.ticket.submissionDateTime}</td>
	</tr>
);

export default TicketItem;