import React from 'react';
import moment from 'moment-jalaali';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

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
    return moment(submissionTime).format('jYYYY jMM jDD  H:m:s');
}
//this may change in future when real data comes in
//showing details of each particular reply
const ReplyItem = (props) => (
    <React.Fragment>
        <TableRow key={props.id}>
            <TableCell component="th" scope="row">
                {props.description}
            </TableCell>
            <TableCell align="right">{supportTeamUserRenderer(props.userId)}</TableCell>
            <TableCell align="right">{replySubmissonTimeFormatter(props.submissionTime)}</TableCell>
        </TableRow>
        {/* <div className="replyItem">
            <div>توضیحات:{props.description}</div>
            <div>پشتیبان پاسخ دهنده:{supportTeamUserRenderer(props.userId)}</div>
            <div>زمان ثبت:{replySubmissonTimeFormatter(props.submissionTime)}</div>
        </div> */}
    </React.Fragment>
);

export default ReplyItem;