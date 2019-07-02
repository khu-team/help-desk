import React from 'react';
import { costumers } from '../../mockData/costumers';
import '../Tickets/TicketSubmisson/TicketForm.css';
import CostumerItem  from '../Costumers/CostumerItem'

class Editcustomer extends React.Component {
    state = {
        SID: '',
        showEditingForm: false,
        SelectCostumer: {},
        name: '',
        city: '',
        status: ''
    }

  handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }
 
    handelSubmit = (event) => {
        event.preventDefault();
        let selectCost;
        costumers.map((costumer) => {
            if (costumer.id == this.state.SID) {
                selectCost = costumer
            }
        }
        )

        this.setState({
            showEditingForm: true,
            SelectCostumer: selectCost,
            name: selectCost.fullName,
            city: selectCost.city,
            status: selectCost.status
        })

    }

  

    chengingHandelSubmit = (event) => {
        event.preventDefault();
        console.log("gh", costumers[this.state.editId - 1]);

        costumers[this.state.SID - 1] = {
            id: +this.state.SID,
            fullName: this.state.name,
            city: +this.state.city,
            status: this.state.status
        }

        console.log("ویرایش اطلاعات مشتری انجام شد...")
    }
    render(){
        return (
            
            <React.Fragment>
            
                <form className="addTicket container" onSubmit={(event) => this.onSubmit(event)}>
                    <h3>ویرایش مشتری </h3>
                    <div className="row col-md-6">
                    <label htmlFor="title">  نام مشتری</label>
                    <input
                    className="inputName"
                    name="name"
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.name}>
                    </input> 
                   <div className="ticketForm__input-group ">
                    <label 
                    className="" >شهر </label>
                    <select 
                    name="city"
                    value={this.state.city}
                    onChange={this.handleInputChange}
                >
                    <option value={1} >تهران</option>
                    <option value={2}>کرج</option>
                    <option value={3}>اصفهان</option>
                    <option value={4}>یزد</option>
                    <option value={5}>شیراز </option>
                </select> 
                </div> 
                <div className="ticketForm__input-group">
                <label htmlFor="status">وضعیت</label>
                <select
                name="status"
                value={this.state.status}
                onChange={this.handleInputChange}
                 >
                <option value={true}>فعال</option>
                <option value={false}>غیر فعال</option>
                </select>
                </div>
                <div>
                <button onClick={this.chengingHandelSubmit} className="costumerButton"> اعمال تغییرات</button>
                </div>
                </div>
                </form>
                </React.Fragment>
        );}

}
export default Editcustomer;