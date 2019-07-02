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
		filters: ['','گروه','اولویت','محصول'],
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
		if(this.state.filter === 'گروه'){
			const department = (departments.find((department) => department.name === filterr));
			return department.id;
		}
		else if(this.state.filter === 'محصول'){
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
			if(filter === 'گروه'){
				const fticekts = this.props.tickets.filter(
					(ticket) => ticket.department === this.onDeptProductFilter(filterr)
				);
				this.setState(() => ({ticketss: fticekts}));
				if(fticekts.length >0){
					this.setState(() => ({error: ''}));
				}
				else{
					this.setState(() => ({error: 'این تیکت موجود نیست'}));
				}
			}
			else if(filter === 'محصول'){
				const fticekts = this.props.tickets.filter(
					(ticket) => ticket.product === this.onDeptProductFilter(filterr)
				);
				this.setState(() => ({ticketss: fticekts}));
				if(fticekts.length> 0){
					this.setState(() => ({error: ''}));
				}
				else{
					this.setState(() => ({error: 'این تیکت موجود نیست'}));
				}
			}
			else if(filter === 'اولویت'){
				const fticekts = this.props.tickets.filter(
					(ticket) => ticket.priority === filterr
				);
				this.setState(() => ({ticketss: fticekts}));
				if(fticekts.length> 0){
					this.setState(() => ({error: ''}));
				}
				else{
					this.setState(() => ({error: 'این تیکت موجود نیست'}));
				}
			}
		}
		else{
			this.setState(() => ({ticketss: this.props.tickets}));
		}
	};




	filterTable = () => {
		const filter = this.state.filter;
		if(filter === 'گروه'){
			return <select  className="font-iran-sans seelect" value={this.state.department} onChange={this.onChange}>
			{this.state.departments.map((dep) => (<option key={dep}>{dep}</option>))}
		</select>;
		}
		else if(filter === 'اولویت'){
			return <select  className="font-iran-sans seelect" value={this.state.priority} onChange={this.onChange}>
			{this.state.priorities.map((pir) => (<option key={pir}>{pir}</option>))}
		</select>;
		}
		else{
			return <select  className="font-iran-sans seelect" value={this.state.productCategory} onChange={this.onChange}>
			{this.state.productCategories.map((pro) => (<option key={pro}>{pro}</option>))}
		</select>;
		}
   };

	render(){
		return(
			<React.Fragment>
		<div>
			
			<div className="boxx2 effect">
				<div className="row">
					<div className="col-sm-5">
						<a href="#" className="logo11 font-iran-sans"><p>تیکت ها :</p></a>
					</div>
					<div className="col-sm-5">
					<div className="menuuu"></div>
					<div className="clear"></div>
					</div>
				</div>




			</div>

			<div className="boxx4 effect navf">
			<a href="#" className="logo12 font-iran-sans"><p>فیلتر بر اساس :</p></a>
				<div className="select">
					<select name="slct" id="slct" value={this.state.filter} onChange={this.onFilterChange} className="font-iran-sans seelect">
						{this.state.filters.map((fil) => (<option key={fil}>{fil}</option>))}
					</select>
				</div>
				<div className="select">
					
						{this.state.showFilter && this.filterTable()}
	
				</div>
					
			</div>
			
	
		<div className="limiter">
		
			<div className="container-table100">
				
				<div className="wrap-table100 boxx3 effect">
					<div className="table100">
		<div class="row">
			<div class="col-sm-12 table-responsive">
				<table class="table table-striped table-hover table2" >
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
					<p className="error">{this.state.error}</p>
				
			</div>
			</div>
			</div>
			
		</React.Fragment>
		);
	}
}

export default Table;
