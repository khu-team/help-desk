import React, { Component } from 'react';
import ReplyItem from './ReplyItem';

class ReplyList extends Component {
    // sorting date arrays by descending or ascending order
    //this is just for testing and it may change when the real data comes in
    state = {
        sortByOrder: 'descending'
    }

    onRepliesSortChange = (event) => {
        event.persist();
        this.setState(() => ({
            sortByOrder: event.target.value
        }),
            () => this.props.onRepliesSortChange(this.state.sortByOrder)
        );
    }

    componentWillMount() {
        this.props.onRepliesSortChange(this.state.sortByOrder);
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.props.repliesDetails ?
                        <React.Fragment>
                            <div className="replyList">
                                <label htmlFor="sortByDate">  مرتب کردن پاسخ ها بر اساس :</label>
                                <select name="sortByDate" id="sortByDate" value={this.state.sortByOrder} onChange={this.onRepliesSortChange}>
                                    <option value="ascending" >قدیمی ترین</option>
                                    <option value="descending" >جدید ترین</option>
                                </select>
                            </div>
                            {this.props.repliesDetails.map((reply) => <ReplyItem key={reply.id} {...reply} />)}
                        </React.Fragment>
                        :
                        //conditional rendering for whether an empty or filled list of replies
                        <div className="replyList__emptyListMessage">هیچ پاسخی تاکنون برای این تیکت ثبت نشده است</div>
                }









            </React.Fragment>
        )
    }
};

export default ReplyList;