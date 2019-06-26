import React from 'react';
import {tickets} from '../../mockData/tickets';
import Table from './Table';

const open = tickets.filter(
	(ticket) => ticket.answerStatus === true
 );

 const OpenTickets = () => (
    <Table tickets={open} />
);

export default OpenTickets;
