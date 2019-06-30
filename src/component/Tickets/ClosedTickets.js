import React from 'react';
import {tickets} from '../../mockData/tickets';
import Table from './Table';


const closed = tickets.filter(
	(ticket) => ticket.answerStatus === false
 );

 const ClosedTickets = () => (
    <Table tickets={closed} />
);

export default ClosedTickets;
