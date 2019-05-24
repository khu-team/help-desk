import React from 'react';
import { products } from '../../mockData/products';
import { departments } from '../../mockData/departments';



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
    descriptionError: ''
  }

  onFormChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'title':
        this.setState(() => ({
          title: value,
          titleError: ''
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
        error: ''
      }));
      console.log(`درخواست با موفقیت ثبت شد`,
        `
    costumer:${costumer},
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
        {this.state.titleError && <p>{this.state.titleError}</p>}
        {this.state.descriptionError && <p>{this.state.descriptionError}</p>}
        <form className="addTicket" onSubmit={(event) => this.onSubmit(event)}>
          {/* input for title  */}
          <input placeholder="عنوان" type="text" name="title" value={this.state.title} onChange={(event) => this.onFormChange(event)} />
          {/* dropdown for product */}
          <select name="product" value={this.state.product} onChange={(event) => this.onFormChange(event)} >
            {
              products.map((product) => <option key={product.id} value={product.id}>{product.name}</option>)
            }
          </select>
          {/* dropdown for department */}
          <select name="department" value={this.state.department} onChange={(event) => this.onFormChange(event)}>
            {
              departments.map((department) => <option key={department.id} value={department.id}>{department.name}</option>)
            }
          </select>
          {/* dropdown for priority */}
          <label htmlFor="priority">Priority</label>
          <select name="priority" id="priority" value={this.state.priority} onChange={(event) => this.onFormChange(event)}>
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </select>
          {/* textArea for description */}
          <textarea placeholder="توضیحات" name="description" cols="30" rows="10" value={this.state.description} onChange={(event) => this.onFormChange(event)}></textarea>
          <button>ثبت</button>
        </form>
      </React.Fragment>
    )
  }
}
;

export default AddTicket;