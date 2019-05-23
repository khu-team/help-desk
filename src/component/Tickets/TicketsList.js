import React from 'react';
import {tickets} from '../../mockData/tickets';
import TicketItem from './TicketItem';

const TicketsList = () => (
	<React.Fragment>
		<div>
			<table border="2" cellPadding="10">
				<tr>
					<th>ID</th>
					<th>Title</th>
					<th>Priority</th>
					<th>Costumer</th>
					<th>Product</th>
					<th>Department</th>
					<th>AnswerStatus</th>
					<th>SubmissionDateTime</th>
				</tr>
				{tickets.map((item) => (<TicketItem ticket={item} key={item.id} />))}
			</table>
		</div>
	</React.Fragment>
);

export default TicketsList;