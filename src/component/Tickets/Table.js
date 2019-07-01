import React from 'react';
import {departments} from '../../mockData/departments';
import {products} from '../../mockData/products';
import TicketItem from './TicketItem';
import 'bootstrap/dist/css/bootstrap.css';

const productCategories = products.map((product) => product.name);
productCategories.splice(0,0,'');
const departmentss = departments.map((department) => department.name);
departmentss.splice(0,0,'');

class Table extends React.Component{

	state = {
		filter: '',
		filters: ['','Department','Priority','Product Category'],
		departments: departmentss,
		priorities: ['','LOW','HIGH','MEDIUM'],
		productCategories: productCategories,
		filterr: '',
		showFilter: false,
		ticketss: this.props.tickets,
		error: '',
	}
	onFilterChange = (e) => {
		const filter = e.target.value;
		this.setState(() => ({filter,showFilter:true,ticketss:this.props.tickets}));
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
		this.setState(() => ({error: ''}));
		if(filterr !== ''){
			if(filter === 'Department'){
				const fticekts = this.props.tickets.filter(
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
				const fticekts = this.props.tickets.filter(
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
				const fticekts = this.props.tickets.filter(
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
			this.setState(() => ({ticketss: this.props.tickets}));
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
				<div className="row">
					<div className="col-sm-4">
						<a href="#" className="logo11 font-iran-sans"><p> فیلتر بر اساس :  </p></a>
					</div>
					<div className="col-sm-4">
					<div className="menuuu"></div>
					<nav className="navf">
					<select value={this.state.filter} onChange={this.onFilterChange} className="font-iran-sans">
						{this.state.filters.map((fil) => (<option key={fil}>{fil}</option>))}
					</select>
					{this.state.showFilter && this.filterTable()}
	
					</nav>
	
					<div className="clear"></div>
					</div>
				</div>




			</header>
			

		<div className="limiter">
			<div className="container-table100">
				<div className="wrap-table100">
					<div className="table100">
		<div class="row">
			<div class="col-sm-12 table-responsive">
				<table class="table table-striped table-hover " >
					<thead>
					<tr className="table100-head ">
						<th className="column1 font-iran-sans">ردیف</th>
						<th className="column2 font-iran-sans">عنوان</th>
						<th className="column3 font-iran-sans">اولویت</th>
						<th className="column4 font-iran-sans">مشتری</th>
						<th className="column5 font-iran-sans">محصول</th>
						<th className="column6 font-iran-sans">گروه</th>
						<th className="column7 font-iran-sans">پاسخگویی</th>
						<th className="column8 font-iran-sans">تاریخ ارسال</th>
						<th className=" font-iran-sans">جزئیات</th>
					</tr>
					</thead>
					<tbody>
					{this.state.ticketss.map((item) => (<TicketItem ticket={item} key={item.id} />))}
					</tbody>
					</table>
					</div>
				</div>
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

export default Table;
