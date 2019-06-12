import React from 'react';
import { products } from '../../mockData/products';
import { departments } from '../../mockData/departments';
import TicketForm from './TicketForm'

import '../../AddTicket.css';

class AddTicket extends React.Component {

  state = {
    costumer: 1,
    title: '',
    product: 1,
    department: 1,
    priority: 'MEDIUM',
    description: '',
    answerStatus: false,
    submissionDateTime: 'not-set',
    titleError: '',
    descriptionError: '',
    successMessage: ''
  }

  onFormChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'title':
        this.setState(() => ({
          title: value,
          titleError: '',
        }));
        break;
      case 'product':
        this.setState(() => ({
          product: value
        }));
        break;
      case 'department':
        this.setState(() => ({
          department: value
        }));
        break;
      case 'priority':
        this.setState(() => ({
          priority: value
        }));
        break;
      case 'description':
        this.setState(() => ({
          description: value,
          descriptionError: ''
        }));
        break;
      default:
        return undefined;
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { costumer, title, product, department, priority, description, answerStatus, submissionDateTime } = this.state;
    if (title.trim() === '') {
      this.setState(() => ({
        titleError: 'عنوان نمیتواند خالی باشد',
        title: ''
      }));
    }
    if (description.trim() === '') {
      this.setState(() => (
        {
          descriptionError: 'توضیحات نمیتواند خالی باشد',
          description: ''
        }
      ))
    }
    if (description.trim() !== '' && title.trim() !== '') {
      this.setState(() => ({
        error: '',
        successMessage: 'درخواست با موفقیت ثبت شد'
      }));
      console.log(
        `costumer:${costumer},
    title:${title.trim()},
    product:${product},
    department:${department},
    priority:${priority},
    description:${description.trim()},
    answerStatus:${answerStatus},
    submissionDateTime:${submissionDateTime},
    `
      );
    }

  }

  render() {
    return (
      <React.Fragment>
        <form className="addTicket" onSubmit={(event) => this.onSubmit(event)}>
          {this.state.titleError && <p className="addTicket__message addTicket__message--error">{this.state.titleError}</p>}
          {this.state.descriptionError && <p className="addTicket__message addTicket__message--error">{this.state.descriptionError}</p>}
          {/* input for title  */}
          <div className="input-group">
            <label htmlFor="title">عنوان :</label>
            <input placeholder="عنوان" type="text" name="title" value={this.state.title} onChange={(event) => this.onFormChange(event)} />
          </div>
          {/* dropdown for product */}
          <div className="input-group">
            <label htmlFor="product">محصول :</label>
            <select name="product" id="product" value={this.state.product} onChange={(event) => this.onFormChange(event)} >
              {
                products.map((product) => <option key={product.id} value={product.id}>{product.name}</option>)
              }
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="dept">ساختمان :</label>
            {/* dropdown for department */}
            <select name="department" id="dept" value={this.state.department} onChange={(event) => this.onFormChange(event)}>
              {
                departments.map((department) => <option key={department.id} value={department.id}>{department.name}</option>)
              }
            </select>
          </div>
          <div className="input-group">
            {/* dropdown for priority */}
            <label htmlFor="priority">اولویت :</label>
            <select name="priority" id="priority" value={this.state.priority} onChange={(event) => this.onFormChange(event)}>
              <option value="HIGH">زیاد</option>
              <option value="MEDIUM">متوسط</option>
              <option value="LOW">کم</option>
            </select>
          </div>



          {/* textArea for description */}
          <textarea placeholder="توضیحات" name="description" cols="30" rows="10" value={this.state.description} onChange={(event) => this.onFormChange(event)}></textarea>
          <br></br>
          <button className="button submit" type="submit"> ثبت </button>
          {this.state.successMessage && <p className="addTicket__message addTicket__message--success">{this.state.successMessage}</p>}
        </form>
                <TicketForm></TicketForm>
      </React.Fragment>      
    )
  }
}
;

export default AddTicket;