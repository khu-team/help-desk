import React from 'react';

//this may change in future when real data comes in
//showing details of each particular reply
const ReplyItem = (props) => (
    <React.Fragment>
        <div className="replyItem">
            <div>توضیحات:{props.description}</div>
            <div>پشتیبان پاسخ دهنده:{props.userId}</div>
            <div>زمان ثبت:{props.submissionTime}</div>
        </div>
    </React.Fragment>
);

export default ReplyItem;