import React from 'react';
import AnswerForm from '../AnswerSubmission/AnswerForm';
import FirstTicketDetails from './FirstTicketDetails';
import ReplyList from './ReplyList';
import CostumerSummary from './CostumerSummary';
import './TicketDetails.css';

const TicketDetail = (props) => {
    const ticketId = props.match.params.id;
    return (
        <React.Fragment>
            <CostumerSummary ticketId={ticketId} />
            <AnswerForm />
            <FirstTicketDetails />
            <ReplyList />
        </React.Fragment>
    )
};

export default TicketDetail;