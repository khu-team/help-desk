import React, { Component } from 'react';

class AnswerForm extends Component {

    render() {

        return (
            <React.Fragment>
                <form className="TicketForm">
                    <textarea placeholder="توضیحات"></textarea>
                    <br></br>
                    <button>ارسال </button>
                </form>

            </React.Fragment>

        );
    }
}
export default AnswerForm;