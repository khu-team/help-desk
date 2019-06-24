import React from 'react';

const FirstTicketDetails = (props) => {
    const { title,
        priority,
        answerStatus,
        submissionDateTime,
        description
    } = props.ticketDetails;
    return (
        <React.Fragment>
            <div className="firtTicketDetail">
                <div>{title}</div>
                <div>{priority}</div>
                <div>{submissionDateTime}</div>
                <div>{description}</div>
                <div>{answerStatus} <button onClick={props.onStatusChange}>toggle</button></div>
            </div>
        </React.Fragment>
    )
};

export default FirstTicketDetails;