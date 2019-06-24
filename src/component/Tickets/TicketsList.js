import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AppBar } from '@material-ui/core';
import OpenTickets from './OpenTickets';
import ClosedTickets from './ClosedTickets';


class TicketsList extends React.Component{

	state = {
		tabValue: 0
	}

	onTabChange = (e,tabValue) => {
		this.setState(() => ({tabValue}));
	};

	render(){
		return(
			<React.Fragment>

			<div>
				<AppBar>
					<Tabs value={this.state.tabValue} onChange={this.onTabChange}>
			  			<Tab label="Open Tickets" />
			  			<Tab label="Closed Tickets" />
					</Tabs>
				</AppBar>
				{this.state.tabValue === 0 && <OpenTickets />}
				{this.state.tabValue === 1 && <ClosedTickets />}
			</div>
		</React.Fragment>
		);
	}
}

export default TicketsList;
