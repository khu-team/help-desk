import React from 'react';
import {tickets} from '../../mockData/tickets';
import TicketItem from './TicketItem';
import Like from './like';



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

	<div class="limiter">
		<div class="container-table100">
			<div class="wrap-table100">
				<div class="table100">

			<table>
				<thead>
				<tr className="table100-head">
					<th className="column1">ID</th>
					<th className="column2">Title</th>
					<th className="column3">Priority</th>
					<th className="column4">Costumer</th>
					<th className="column5">Product</th>
					<th className="column6">Department</th>
					<th className="column7">AnswerStatus</th>
					<th className="column8">SubmissionDateTime</th>
					<th className="column9">Likes</th>
				</tr>
				</thead>
				<tbody>
				{tickets.map((item) => (<TicketItem ticket={item} key={item.id} />))}
				</tbody>
			</table>

					</div>
				</div>
			</div>
		</div>




		</div>
	</React.Fragment>
);

export default TicketsList;
