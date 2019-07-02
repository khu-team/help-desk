import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class RateForm extends Component {

    state = {
        rating: 1
    }


    onStarClick = (nextValue, prevValue, name) => {
        this.setState({ rating: nextValue });
    }

    render() {
        return (
            <React.Fragment>
                {!this.props.rate ?
                    <form className="rateForm"
                        onSubmit={this.props.onRateChange}>
                        <h3>ثبت نظرات</h3>
                        {this.props.rateFormError && <div className="rateForm__message--error">{this.props.rateFormError}</div>}
                        <textarea
                            className="answerform__commentArea"
                            name="rateComment"
                            id="rateComment"
                            onChange={this.props.onRateCommentChange}
                            placeholder="نظر خود درباره پاسخگویی به تیکت را اینجا اعلام کنید"
                        ></textarea>


                        <div className="rateForm__submissionSection" >
                            <span className="rateForm__stars">
                                <h5>امتیاز: </h5>
                                <StarRatingComponent
                                    name="rate"
                                    onStarClick={this.onStarClick}
                                    starCount={5}
                                    value={this.state.rating}
                                />
                            </span>
                            <button type="submit" className="rateForm__submiissionSection__button">ثبت</button>
                        </div>
                    </form>
                    :
                    <div className="rateForm__successMessage">نظر شما با موفقیت ثبت شد </div>
                }
            </React.Fragment>
        );
    }
}


export default RateForm;