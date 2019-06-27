import React from 'react';
import moment from 'moment-jalaali';
import { supportTeamUsers } from '../../../mockData/supportTeamUsers';

const supportTeamUserRenderer = (id) => {
    const foundUser = supportTeamUsers.find((user) => user.id === id);
    if (foundUser) {
        return foundUser.fullName;
    } else {
        return 'کاربری یافت نشده';
    }
}
const replySubmissonTimeFormatter = (submissionTime) => {
    return moment(submissionTime).format( 'jDD /jMM /jYYYY');
}
//this may change in future when real data comes in
//showing details of each particular reply
const ReplyItem = (props) => (
    <React.Fragment>

        <div className="replyDiv">
        <div><span className="Date">{replySubmissonTimeFormatter(props.submissionTime)}</span><h4>پاسخ شماره 1</h4></div>
         <div>{props.description}</div>
            <div>پشتیبان پاسخ دهنده: {supportTeamUserRenderer(props.userId)}</div>
        
        </div>


    </React.Fragment>
);

export default ReplyItem;