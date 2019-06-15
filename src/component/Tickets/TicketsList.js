import React from 'react';
import {tickets} from '../../mockData/tickets';
import TicketItem from './TicketItem';
import Like from './like';
const productCategories = products.map((product) => product.name);
productCategories.splice(0,0,'');
const departmentss = departments.map((department) => department.name);
departmentss.splice(0,0,'');

class TicketsList extends React.Component{

	state = {
		filter: '',
		filters: ['','Department','Priority','Product Category'],
		departments: departmentss,
		priorities: ['','LOW','HIGH','MEDIUM'],
		productCategories: productCategories,
		filterr: '',
		showFilter: false,
		ticketss: tickets,
		error: ''

	}

	render(){
		return(
			<React.Fragment>
		<div>
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
					</tr>
					</thead>
					<tbody>
					{this.state.ticketss.map((item) => (<TicketItem ticket={item} key={item.id} />))}
					</tbody>
				</table>
				<p>Filter by</p>
				<select value={this.state.filter} onChange={this.onFilterChange}>
					{this.state.filters.map((fil) => (<option key={fil}>{fil}</option>))}
				</select>
				{this.state.showFilter && this.filterTable()}
						</div>
					</div>
					<p>{this.state.error}</p>
				</div>
			</div>

			</div>
		</React.Fragment>
		);
	}
}


export default TicketsList;
