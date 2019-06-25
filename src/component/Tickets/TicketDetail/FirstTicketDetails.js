import React from 'react';

const FirstTicketDetails = (props) => {
    const { title,
        priority,
        answerStatus,
        comment,
        submissionDateTime,
        description,
        rate
    } = props.ticketDetails;
    return (
        <React.Fragment>
            <div className="firtTicketDetail">
                <div>{title}</div>
                <div>{priority}</div>
                <div>{submissionDateTime}</div>
                <div>{description}</div>
                {rate && <div>امتیاز : {rate}</div>}
                <div>
                    {answerStatus ?
                        <React.Fragment>
                            <div>وضعیت تیکت : بسته</div>
                            {
                                rate ?
                                    <div>{rate}:امتیاز</div> :
                                    <div>امتیاز: در حال محاسبه</div>
                            }
                            {comment && <div>نظر شما در باره  وضعیت پاسخگویی تیکت :{comment}</div>}
                            <button onClick={props.onStatusChange}>تغییر وضعیت و باز کردن دوباره تیکت</button>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div>وضعیت تیکت : باز</div>
                            <button onClick={props.onStatusChange}>ثبت امتیاز و بستن تیکت</button>
                        </React.Fragment>
                    }
                </div>
            </div>
        </React.Fragment>
    )
};

export default FirstTicketDetails;