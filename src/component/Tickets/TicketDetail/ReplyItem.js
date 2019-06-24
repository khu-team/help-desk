import React from 'react';

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