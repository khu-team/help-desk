import React from "react";
import { products } from "../../mockData/products";
import { departments } from "../../mockData/departments";

class AddTicket extends React.Component {

    state = {
        costumer: undefined,
        title: '',
        product: 1,
        department: 1,
        priority: 'MEDIUM',
        description: '',
        answerStatus: false,
        submissionDateTime: 'not-set'
    }


  render() {
    return (
      <React.Fragment>
        <div className="addTicket">
          {/* input for title  */}
          <input placeholder="عنوان" type="text" name="title" />
          {/* dropdown for product */}
          <select name="product">
            {products.map(product => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
          {/* dropdown for department */}
          <select name="department">
            {departments.map(department => (
              <option key={department.id} value={department.id}>
                {department.name}
              </option>
            ))}
          </select>
          {/* dropdown for priority */}
          <label htmlFor="priority">Priority</label>
          <select name="priority" id="priority" >
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </select>
          {/* textArea for description */}
          <textarea
            placeholder="توضیحات"
            name="description"
            cols="30"
            rows="10"
          />
        </div>
      </React.Fragment>
    );
  }
}
export default AddTicket;
