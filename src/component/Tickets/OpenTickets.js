import React from 'react';
import {tickets} from '../../mockData/tickets';
import {departments} from '../../mockData/departments';
import {products} from '../../mockData/products';
import TicketItem from './TicketItem';
const productCategories = products.map((product) => product.name);
productCategories.splice(0,0,'');
const departmentss = departments.map((department) => department.name);
departmentss.splice(0,0,'');
const openTickets = tickets.filter(
   (ticket) => ticket.answerStatus === true
);

class OpenTickets extends React.Component{

	state = {
		filter: '',
		filters: ['','Department','Priority','Product Category'],
		departments: departmentss,
		priorities: ['','LOW','HIGH','MEDIUM'],
		productCategories: productCategories,
		filterr: '',
		showFilter: false,
		ticketss: openTickets,
		error: '',
	}

	onFilterChange = (e) => {
		const filter = e.target.value;
		this.setState(() => ({filter,showFilter:true,ticketss:openTickets}));
	};

	onDeptProductFilter = (filterr) => {
		if(this.state.filter === 'Department'){
			const department = (departments.find((department) => department.name === filterr));
			return department.id;
		}
		else if(this.state.filter === 'Product Category'){
			const product = (products.find((product) => product.name === filterr));
			return product.id;
		}
	}

	onChange = (e) => {
		const filter = this.state.filter;
		const filterr = e.target.value;
		this.setState(() => ({filterr}));
		if(filterr !== ''){
			if(filter === 'Department'){
				const fticekts = openTickets.filter(
					(ticket) => ticket.department === this.onDeptProductFilter(filterr)
				);
				this.setState(() => ({ticketss: fticekts}));
				if(fticekts.length >0){
					this.setState(() => ({error: ''}));
				}
				else{
					this.setState(() => ({error: 'ticket does not exist'}));
				}
			}
			else if(filter === 'Product Category'){
				const fticekts = openTickets.filter(
					(ticket) => ticket.product === this.onDeptProductFilter(filterr)
				);
				this.setState(() => ({ticketss: fticekts}));
				if(fticekts.length> 0){
					this.setState(() => ({error: ''}));
				}
				else{
					this.setState(() => ({error: 'ticket does not exist'}));
				}
			}
			else if(filter === 'Priority'){
				const fticekts = openTickets.filter(
					(ticket) => ticket.priority === filterr
				);
				this.setState(() => ({ticketss: fticekts}));
				if(fticekts.length> 0){
					this.setState(() => ({error: ''}));
				}
				else{
					this.setState(() => ({error: 'ticket does not exist'}));
				}
			}
		}
		else{
			this.setState(() => ({ticketss: openTickets}));
		}
	};




	filterTable = () => {
		const filter = this.state.filter;
		if(filter === 'Department'){
			return <select value={this.state.department} onChange={this.onChange}>
			{this.state.departments.map((dep) => (<option key={dep}>{dep}</option>))}
		</select>;
		}
		else if(filter === 'Priority'){
			return <select value={this.state.priority} onChange={this.onChange}>
			{this.state.priorities.map((pir) => (<option key={pir}>{pir}</option>))}
		</select>;
		}
		else{
			return <select value={this.state.productCategory} onChange={this.onChange}>
			{this.state.productCategories.map((pro) => (<option key={pro}>{pro}</option>))}
		</select>;
		}
	};

	render(){
		return(
			<React.Fragment>
		<div>

			<header>
				<a href="#" className="logo11"><p> : Filter by </p></a>

				<div className="menuuu"></div>
				<nav className="navf">
				<select value={this.state.filter} onChange={this.onFilterChange}>
					{this.state.filters.map((fil) => (<option key={fil}>{fil}</option>))}
				</select>
				{this.state.showFilter && this.filterTable()}

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
						<th >Details</th>
					</tr>
					</thead>
					<tbody>
					{this.state.ticketss.map((item) => (<TicketItem ticket={item} key={item.id} />))}
					</tbody>
				</table>
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

export default OpenTickets;
