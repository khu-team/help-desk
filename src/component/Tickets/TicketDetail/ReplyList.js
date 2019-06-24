import React, { Component } from 'react';
import ReplyItem from './ReplyItem';

class ReplyList extends Component {
    state = {
        // this state is temporary and only for teseting
        // it will be changed in future with API calls
        repliesDetails: undefined
    }

    // sorting date arrays by descending or ascending order
    sortByDate = (type, replies) => {
        switch (type) {
            case 'ascending':
                return replies.sort((a, b) => a.date - b.date);
            case 'descending':
                return replies.sort((a, b) => b.date - a.date);
            default:
                return undefined;
        }
    }
    onSortChange = (event) => {
        // this part will be changed in future when API calls get arrived
        event.persist();
        this.setState((prevState) => {
            repliesDetails: this.sortByDate(event.target.value, this.state.repliesDetails)
        });
    }

    componentWillMount() {
        //this part will be changed with API calls

    }

    render() {
        return (
            <React.Fragment>
                <div className="replyList">
                    {
                        this.state.repliesDetails ?
                            <React.Fragment>
                                <div>
                                    <label htmlFor="sortByDate"> : مرتب کردن پاسخ ها بر اساس</label>
                                    <select name="sortByDate" id="sortByDate" onChange={this.onSortChange}>
                                        <option value="ascending" selected>صعودی</option>
                                        <option value="descending">نزولی</option>
                                    </select>
                                </div>
                                {this.state.repliesDetails.map((reply) => <ReplyItem {...reply} />)}
                            </React.Fragment>
                            :
                            <div className="replyList__emptyListMessage">هیچ پاسخی تاکنون برای این تیکت ثبت نشده است</div>
                    }
                </div>
            </React.Fragment>
        )
    }
};

export default ReplyList;