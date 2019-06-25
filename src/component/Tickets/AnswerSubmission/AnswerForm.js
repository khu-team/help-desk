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
                <form className="answerForm" onSubmit={this.onSubmit}>
                    <h3>فرم پاسخ</h3>
                    <textarea onChange={this.onFormChange} placeholder="توضیحات" value={this.state.description}></textarea>
                    <button type="submit" className="material-icons">send</button>
                    <button type="button" className="material-icons">attachment</button>
                    {(this.state.answerSuccessMessage) ?
                        <p className="answerForm--message__success">{this.state.answerSuccessMessage}</p>
                        :
                        <p className="answerForm--message__error">{this.state.answerError}</p>}
                </form>
            </React.Fragment>

        );
    }
}
export default AnswerForm;