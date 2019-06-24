import React, { Component } from 'react';
import AnswerForm from '../AnswerSubmission/AnswerForm';
import FirstTicketDetails from './FirstTicketDetails';
import ReplyList from './ReplyList';
import RateForm from './RateForm';
import CostumerSummary from './CostumerSummary';
import { tickets } from '../../../mockData/tickets';
import { costumers } from '../../../mockData/costumers';
import { products } from '../../../mockData/products';
import './TicketDetails.css';



class TicketDetail extends Component {
    state = {
        // this state is only for testing purpose and 
        // will be changed with API calls in future
        ticketDetails: undefined,
        costumerDetails: undefined,
        productDetails: undefined,
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
    ticketRenderer = (ticketId) => {
        const ticketDetails = tickets.find((ticket) => ticket.id === ticketId);
        return ticketDetails;
    }
    onRateChange = (event) => {
        event.preventDefault();
        event.persist();
        this.setState((prevState) => ({
            ticketDetails: {
                ...prevState.ticketDetails,
                rate: event.target.rate.value
            }
        }));
    }
    onStatusChange = () => {
        this.setState((prevState) => ({
            ticketDetails: {
                ...prevState.ticketDetails,
                answerStatus: !prevState.ticketDetails.answerStatus
            }
        }));
    }


    componentWillMount() {
        this.setState(() => ({
            costumerDetails: this.costumerRenderer(this.state.ticketId),
            productDetails: this.productRenderer(this.state.ticketId),
            ticketDetails: this.ticketRenderer(this.state.ticketId)
        }))
    }
    render() {
        return (
            <React.Fragment>
                <CostumerSummary
                    costumerDetails={this.state.costumerDetails}
                    productDetails={this.state.productDetails}
                />
                {
                    (this.state.ticketDetails.answerStatus ) ?
                        <RateForm onRateChange={this.onRateChange} /> :
                        <AnswerForm />
                }
                <FirstTicketDetails
                    ticketDetails={this.state.ticketDetails}
                    onStatusChange={this.onStatusChange}
                />
                <ReplyList />
            </React.Fragment>
        )
    }
};

export default TicketDetail;