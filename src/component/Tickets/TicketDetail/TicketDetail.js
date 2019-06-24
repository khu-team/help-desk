import React from 'react';
import AnswerForm from '../AnswerSubmission/AnswerForm';
import FirstTicketDetail from '../TicketDetail/FirstTicketDetail';
import ReplyList from '../TicketDetail/ReplyList';
import CostumerSummary from '../TicketDetail/CostumerSummary';
import './TicketDetail.css';

const TicketDetail = (props) => (
    <React.Fragment>
        {props.match.params.id}
        <CostumerSummary />
        <AnswerForm />
        <FirstTicketDetail />
        <ReplyList />
    </React.Fragment>
);

export default TicketDetail;