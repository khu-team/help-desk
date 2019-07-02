import React from 'react';
import ProductRenderer from './ProductRenderer';
import CostumerRenderer from './CostumerRenderer';
import DepartmentRenderer from './DepartmentRenderer';
import {NavLink} from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import './chip.css';

const TicketItem = (props) => (
	<tr>
		<td className="column1 font-iran-sans">{props.ticket.id}</td>
		<td className="column2 font-iran-sans">{props.ticket.title}</td>
		<td className="column3 font-iran-sans">
			{props.ticket.priority === "HIGH" && <Chip className="hchip" label="HIGH"/>}
			{props.ticket.priority === "MEDIUM" && <Chip className="mchip" label="MEDIUM"/>}
			{props.ticket.priority === "LOW" && <Chip className="lchip" label="LOW"/>}
		</td>
		<CostumerRenderer costumerId={props.ticket.costumer} />
		<ProductRenderer productId={props.ticket.product} />
		<DepartmentRenderer departmentId={props.ticket.department} />
		<td className="column7 font-iran-sans">
			{props.ticket.answerStatus ? <Chip label="True" color='primary'/> : <Chip label="False"  color="secondary" />}
		</td>
		<td className="column82 font-iran-sans">{props.ticket.submissionDateTime}</td>
		<td className="column9 font-iran-sans"> <NavLink to = {`/ticket/${props.ticket.id}`}>بیشتر</NavLink> </td>
	</tr>
);

export default TicketItem;