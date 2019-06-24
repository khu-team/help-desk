import React from 'react';
import ProductRenderer from './ProductRenderer';
import CostumerRenderer from './CostumerRenderer';
import DepartmentRenderer from './DepartmentRenderer';
import {NavLink} from 'react-router-dom';

const TicketItem = (props) => (
	<tr>
		<td className="column1">{props.ticket.id}</td>
		<td className="column2">{props.ticket.title}</td>
		<td className="column3">{props.ticket.priority}</td>
		<CostumerRenderer costumerId={props.ticket.costumer} />
		<ProductRenderer productId={props.ticket.product} />
		<DepartmentRenderer departmentId={props.ticket.department} />
		<td className="column7">{props.ticket.answerStatus ? "True" : "False"}</td>
		<td className="column82">{props.ticket.submissionDateTime}</td>
		<td className="column9"> <NavLink to = {`/ticket/${props.ticket.id}`}>بیشتر</NavLink> </td>
	</tr>
);

export default TicketItem;