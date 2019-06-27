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
                
                            {this.props.repliesDetails.map((reply) => <ReplyItem key={reply.id} {...reply} />)}
                       
             </React.Fragment>






           
        )
    }
};

export default ReplyList;