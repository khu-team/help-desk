import React from 'react';
import TicketForm from './TicketForm';
import AnswerForm from '../AnswerSubmission/AnswerForm';

class SubmitTicket extends React.Component {

  render() {
    return (
      <React.Fragment>
        <TicketForm />
        <AnswerForm />
      </React.Fragment>
    )
  }
}
;

export default SubmitTicket;