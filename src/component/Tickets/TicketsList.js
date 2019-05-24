import React from 'react';
import {tickets} from '../../mockData/tickets';
import TicketItem from './TicketItem';

const TicketsList = () => (
	<React.Fragment>
		<div>


		<header>
        <a href="#" className="logo11">Tickets</a>

        <div className="menuuu"></div>

        <nav className="navf">

            <ul>
                <li><a href="#" className="action">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            
        </nav>

        <div className="clear"></div>

    </header>


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