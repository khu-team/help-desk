import React, { Component } from 'react';
import './AnswerForm.css';

class AnswerForm extends Component {

    state = {
        answerID: 1,
        answerDescription: '',
        answerSubmissionTime: '',
        answerNotification: '',
        userID: 1,
        ticketID: 1,
    }

    onFormChange = (event) => {
        event.persist();
        this.setState(() => ({
            answerDescription: event.target.value,
            answerNotification: ''
        }));
    }

    render() {

        return (
            <React.Fragment>
            <form className="answerForm" onSubmit={this.onSubmit}>
                <h3>فرم پاسخ</h3>
                <textarea onChange={this.onFormChange} placeholder="توضیحات" value={this.state.answerDescription}></textarea>
                <button type="submit" className="material-icons">send</button>
                <button type="button" className="material-icons">attachment</button>
                {(this.state.answerDescription && this.state.answerNotification) ?
                    <React.Fragment>
                        <p className="answerForm--message__success">{this.state.answerNotification}</p>
                        <p>{this.state.answerSubmissionTime}</p>
                    </React.Fragment>
                    :
                    <p className="answerForm--message__error">{this.state.answerNotification}</p>}
            </form>
        </React.Fragment>

        );
    }
}
export default AnswerForm;