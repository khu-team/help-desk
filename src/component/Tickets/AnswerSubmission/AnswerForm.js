import React, { Component } from 'react';
import Send from '@material-ui/icons/Send';
import AttachFile from '@material-ui/icons/AttachFile';
import './AnswerForm.css';
import moment from 'moment-jalaali';



class AnswerForm extends Component {

    state = {
        answerSuccessMessage: '',
        answerError: '',
        description: '',
        formattedSubmissionTime: '',
        submissionTime: undefined,
        ticketId: this.props.ticketDetails.id,
        userId: this.props.supportTeamUserId
    }

    onFormChange = (event) => {
        event.persist();
        this.setState(() => ({
            description: event.target.value,
            answerSuccessMessage: '',
            answerError: ''
        }));
    }
    messageSetter = (submissionTime) => {
        this.setState(() => ({
            answerSuccessMessage: 'درخواست شما در ',
            formattedSubmissionTime: moment(submissionTime).format("تاریخ:  jYYYY /jMM /jDD  و ساعت:  HH:m:s  ثبت شد"),
            description: ''
        }));
    }
    onSubmit = (event) => {
        event.preventDefault();
        let { description, ticketId, userId } = this.state;
        if (description.trim()) {

            this.props.onReplySubmit(event, {
                description,
                ticketId,
                userId
            }, this.messageSetter);
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
                    <h3 className="answerForm__title">فرم پاسخ</h3>
                    <textarea className="answerform__commentArea" onChange={this.onFormChange} placeholder="توضیحات" value={this.state.description}></textarea>
                    <div className="answerForm__buttonGroup">
                        <label htmlFor="inputGroupFile01"><AttachFile /></label>
                        <input
                            type="file"
                            id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01" />
                        <button type="submit"><Send /></button>


                        {/* <bu type="file"></input> */}


                    </div>
                    {(this.state.answerSuccessMessage) ?
                        <p className="answerForm__message--success">{this.state.answerSuccessMessage}{this.state.formattedSubmissionTime}</p>
                        :
                        <p className="answerForm__message--error">{this.state.answerError}</p>}
                </form>
            </React.Fragment>

        );
    }
}
export default AnswerForm;