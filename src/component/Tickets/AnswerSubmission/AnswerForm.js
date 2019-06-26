import React, { Component } from 'react';
import moment from 'moment-jalaali';
import './AnswerForm.css';


class AnswerForm extends Component {

    state = {
        answerSuccessMessage: '',
        answerError: '',
        id: this.props.repliesDetails[this.props.repliesDetails.length - 1].id + 1,
        description: '',
        submissionTime: undefined,
        userId: this.props.supportTeamUserId,
        ticketId: this.props.ticketDetails.id,
    }

    onFormChange = (event) => {
        event.persist();
        this.setState(() => ({
            description: event.target.value,
            answerSuccessMessage: '',
            answerError: ''
        }));
    }
    messageSetter = () => {
        this.setState(() => ({
            answerSuccessMessage: 'عملیات با موفقیت انجام شد',
            description: ''
        }));
    }
    onSubmit = (event) => {
        event.preventDefault();
        let { id, description, userId, ticketId, submissionTime } = this.state;
        if (description.trim()) {

            this.props.onReplySubmit(event, this.state, this.messageSetter);
            //    this.setState(() => ({
            //     answerSuccessMessage: 'عملیات با موفقیت انجام شد',
            //     submissionTime: moment().format('jYYYY jMM jDD  H:m:s')
            // }));
        }
        else {
            this.setState(() => ({
                description: '',
                answerError: 'توضیحات نمیتواند خالی باشد',
                answerSuccessMessage: ''
            }));
        }
    }

    render() {

        return (
            <React.Fragment>
                <form className="answerForm form-group" onSubmit={this.onSubmit}>
                    <h3>فرم پاسخ</h3>
                    <textarea className="form-control answerform__commentArea" onChange={this.onFormChange} placeholder="توضیحات" value={this.state.description}></textarea>
                    <div className="answerForm__buttonGroup">
                        <button type="submit" className="material-icons">send</button>
                        <button type="button" className="material-icons">attachment</button>
                    </div>
                    {(this.state.answerSuccessMessage) ?
                        <p className="answerForm__message--success">{this.state.answerSuccessMessage}</p>
                        :
                        <p className="answerForm__message--error">{this.state.answerError}</p>}
                </form>
            </React.Fragment>

        );
    }
}
export default AnswerForm;