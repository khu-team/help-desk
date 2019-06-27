import React, { Component } from 'react';
import moment from 'moment-jalaali';
import AnswerForm from '../AnswerSubmission/AnswerForm';
import FirstTicketDetails from './FirstTicketDetails';
import ReplyList from './ReplyList';
import RateForm from './RateForm';
import CostumerSummary from './CostumerSummary';
import { tickets } from '../../../mockData/tickets';
import { costumers } from '../../../mockData/costumers';
import { products } from '../../../mockData/products';
import { replies } from '../../../mockData/replies';
import 'bootstrap/dist/css/bootstrap.css';
import './TicketDetails.css';



class TicketDetail extends Component {
    state = {
        // this state is only for testing purpose and 
        // will be changed with API calls in future
        ticketDetails: undefined,
        costumerDetails: undefined,
        productDetails: undefined,
        repliesDetails: undefined,
        rateFormError: undefined,
        //this is temporary
        supportTeamUserId: 2,
        sortByOrder: undefined,
        ticketId: Number(this.props.match.params.id)
    }
    costumerRenderer = (ticketId) => {
        const costumerId = tickets.find((ticket) => ticket.id === ticketId).costumer;
        const costumer = costumers.find((costumer) => (costumer.id === costumerId));
        return costumer;
    }
    productRenderer = (ticketId) => {
        const productId = tickets.find((ticket) => ticket.id === ticketId).product;
        const product = products.find((product) => (product.id === productId));
        return product;
    }
    repliesRenderer = (ticketId) => {
        const filteredReplies = replies.filter((reply) => reply.ticketId === ticketId);
        return filteredReplies;
    }
    ticketRenderer = (ticketId) => {
        const ticketDetails = tickets.find((ticket) => ticket.id === ticketId);
        return ticketDetails;
    }
    onRateChange = (event) => {
        event.preventDefault();
        event.persist();
        if (event.target.rateComment.value) {
            this.setState((prevState) => ({
                ticketDetails: {
                    ...prevState.ticketDetails,
                    rate: event.target.rate.value,
                    comment: event.target.rateComment.value
                },
                rateFormError: undefined
            }))
        } else {
            this.setState((prevState) => ({
                rateFormError: 'نظر نمیتواند خالی باشد'
            }))
        }
    }
    onReplySubmit = (event, replyDetails, messageSetter) => {
        event.persist();
        this.setState((prevState) => {
            const lastReplyId = prevState.repliesDetails.slice(0)[0].id;
            return (
                {
                    repliesDetails: [
                        ...prevState.repliesDetails,
                        {
                            ...replyDetails,
                            id: lastReplyId + 1,
                            submissionTime: moment().valueOf()
                        }
                    ]
                }
            )
        }, () => {
            messageSetter();
            this.onRepliesSortChange(this.state.sortByOrder)
        }
        );


    }
    onRepliesSortChange = (type) => {
        switch (type) {
            case 'ascending':
                this.setState(prevState => {
                    const ascendingReplies = prevState.repliesDetails.sort((a, b) => a.submissionTime - b.submissionTime);
                    return {
                        repliesDetails: ascendingReplies,
                        sortByOrder: 'ascending'
                    }
                });
                break;
            case 'descending':
                this.setState(prevState => {
                    const descendingReplies = prevState.repliesDetails.sort((a, b) => b.submissionTime - a.submissionTime);
                    return {
                        repliesDetails: descendingReplies,
                        sortByOrder: 'descending'
                    }
                });
                break;
            default:
                return undefined;
        }
    }

    onRateCommentChange = (event) => {
        event.persist();
        this.setState((prevState) => ({
            rateFormError: undefined
        }))
    }
    onStatusChange = () => {
        this.setState((prevState) => ({
            ticketDetails: {
                ...prevState.ticketDetails,
                answerStatus: !prevState.ticketDetails.answerStatus,
                rate: undefined,
                comment: undefined
            }
        }));
    }


    componentWillMount() {
        this.setState(() => ({
            costumerDetails: this.costumerRenderer(this.state.ticketId),
            productDetails: this.productRenderer(this.state.ticketId),
            repliesDetails: this.repliesRenderer(this.state.ticketId),
            ticketDetails: this.ticketRenderer(this.state.ticketId)
        }))
    }
    render() {
        return (
            <React.Fragment>
                <div className="container font-iran-sans">
                    <div className="row">
                        <div className="col-md-7">
                            <CostumerSummary
                                costumerDetails={this.state.costumerDetails}
                                productDetails={this.state.productDetails}
                            />
                            {
                                (this.state.ticketDetails.answerStatus) ?
                                    <RateForm
                                        onRateChange={this.onRateChange}
                                        onRateCommentChange={this.onRateCommentChange}
                                        rate={this.state.ticketDetails.rate}
                                        rateFormError={this.state.rateFormError}
                                    />
                                    :
                                    <AnswerForm
                                        onReplySubmit={this.onReplySubmit}
                                        ticketDetails={this.state.ticketDetails}
                                        repliesDetails={this.state.repliesDetails}
                                        supportTeamUserId={this.state.supportTeamUserId}
                                    />
                            }
                        </div>
                        <div className="col-md-5">
                            <FirstTicketDetails
                                ticketDetails={this.state.ticketDetails}
                                onStatusChange={this.onStatusChange}
                            />
                            <ReplyList
                                repliesDetails={this.state.repliesDetails}
                                onRepliesSortChange={this.onRepliesSortChange}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

export default TicketDetail;