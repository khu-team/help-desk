import React, { Component } from 'react';
import moment from 'moment-jalaali';
import Send from '@material-ui/icons/Send';
import { products } from '../../../mockData/products';
import { departments } from '../../../mockData/departments';
// import 'bootstrap/dist/css/bootstrap.css';
import './TicketForm.css';

class TicketForm extends Component {

    state = {
        answerStatus: false,
        costumer: 1,
        department: 1,
        descriptionError: '',
        description: '',
        formattedSubmissionDateTime: '',
        product: 1,
        priority: 'MEDIUM',
        submissionDateTime: '',
        successMessage: '',
        titleError: '',
        ticketID: 1,
        title: '',
    }

    onFormChange = (event) => {
        const { name, value } = event.target;
        this.setState(() => ({
            descriptionError: '',
            successMessage: '',
            titleError: ''

        }),
            () => {
                switch (name) {
                    case 'title':
                        this.setState(() => ({
                            title: value,
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
                        }));
                        break;
                    default:
                        return undefined;
                }
            })

    }

    onSubmit = (event) => {
        event.preventDefault();
        let { costumer, title, product, department, priority, description, answerStatus, submissionDateTime, ticketID } = this.state;
        if (title.trim() === '') {
            this.setState(() => ({
                successMessage: '',
                titleError: 'عنوان نمیتواند خالی باشد',
                title: ''
            }));
        }
        if (description.trim() === '') {
            this.setState(() => (
                {
                    descriptionError: 'توضیحات نمیتواند خالی باشد',
                    description: '',
                    successMessage: ''
                }
            ))
        }
        if (description.trim() !== '' && title.trim() !== '') {
            this.setState(() => ({
                descriptionError: '',
                error: '',
                submissionDateTime: moment().valueOf(),
                successMessage: ' درخواست شما در ',
                titleError: ''
            }),
                () => {
                    submissionDateTime = this.state.submissionDateTime;
                    console.log(

                        `TICKETFORM
            ID:${ticketID},
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
                    this.setState((prevState) => ({
                        department: 1,
                        description: '',
                        product: 1,
                        priority: 'MEDIUM',
                        title: '',
                        formattedSubmissionDateTime: moment(prevState.submissionDateTime).format("تاریخ:  jYYYY /jMM /jDD  و ساعت:  HH:m:s با موفقیت ثبت شد"),
                        submissionDateTime: ''
                    }))
                }
            );

        }

    }

    render() {
        return (
            <React.Fragment>
                <form className="addTicket container" onSubmit={(event) => this.onSubmit(event)}>
                    <h3>ثبت تیکت</h3>
                    <div className="row">
                        <div className="col-md-6"> {/* input for title  */}
                            <div className="ticketForm__input-group">
                                <label htmlFor="title">عنوان :</label>
                                <input placeholder="عنوان" type="text" name="title" id="title" value={this.state.title} onChange={(event) => this.onFormChange(event)} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            {/* dropdown for product */}
                            <div className="ticketForm__input-group">
                                <label htmlFor="product">محصول :</label>
                                <select name="product" id="product" value={this.state.product} onChange={(event) => this.onFormChange(event)} >
                                    {
                                        products.map((product) => <option key={product.id} value={product.id}>{product.name}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                    </div>



                    <div className="row">
                        <div className="col-md-6">
                            <div className="ticketForm__input-group">
                                <label htmlFor="dept">بخش :</label>
                                {/* dropdown for department */}
                                <select name="department" id="dept" value={this.state.department} onChange={(event) => this.onFormChange(event)}>
                                    {
                                        departments.map((department) => <option key={department.id} value={department.id}>{department.name}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ticketForm__input-group">
                                {/* dropdown for priority */}
                                <label htmlFor="priority">اولویت :</label>
                                <select name="priority" id="priority" value={this.state.priority} onChange={(event) => this.onFormChange(event)}>
                                    <option value="HIGH">زیاد</option>
                                    <option value="MEDIUM">متوسط</option>
                                    <option value="LOW">کم</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    {/* textArea for description */}
                    <textarea className="ticketForm__textarea" placeholder="توضیحات" name="description" cols="30" rows="10" value={this.state.description} onChange={(event) => this.onFormChange(event)}></textarea>
                    <br></br>
                    <button className="submit-button">
                        <Send />

                    </button>
                    {this.state.titleError && <p className="addTicket__message addTicket__message--error">{this.state.titleError}</p>}
                    {this.state.descriptionError && <p className="addTicket__message addTicket__message--error">{this.state.descriptionError}</p>}
                    {this.state.successMessage && <p className="addTicket__message--success">{this.state.successMessage}{this.state.formattedSubmissionDateTime}</p>}
                </form>
            </React.Fragment>
        )
    }
};

export default TicketForm;