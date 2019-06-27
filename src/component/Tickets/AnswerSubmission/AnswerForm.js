import React, { Component } from 'react';
import './AnswerForm.css';
import moment from 'moment-jalaali';



class AnswerForm extends Component {

    state = {
        answerSuccessMessage: '',
        answerError: '',
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
            answerNotification: 'درخواست شما در ',
            answerSubmissionTime: moment().format("تاریخ: "+' jYYYY /jMM /jDD'+" و "+"ساعت: "+' H:m:s'+" ثبت شد")
        }));
    }
    onSubmit = (event) => {
        event.preventDefault();
        let { description } = this.state;
        if (description.trim()) {

            this.props.onReplySubmit(event, this.state, this.messageSetter);
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
                    <textarea className="answerform__commentArea" onChange={this.onFormChange} placeholder="توضیحات" value={this.state.description}></textarea>
                    <div className="answerForm__buttonGroup">
                        <button type="submit" className="material-icons">send</button>
                        <button type="button" class="form-control-file" className="material-icons">attachment</button>
                    </div>
                    {(this.state.answerSuccessMessage) ?
                        <p className="answerForm--message__success">{this.state.answerNotification}{this.state.answerSubmissionTime}</p>
                        :
                        <p className="answerForm__message--error">{this.state.answerError}</p>}
                </form>
            </React.Fragment>

        );
    }
}
export default AnswerForm;