import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
// const { rating } = this.state;

// const RateForm = (props) => (
//    <React.Fragment>
//         {!props.rate ?
//             <form className="rateForm" onSubmit={props.onRateChange}>
//             <h4>ثبت نظرات</h4>
//                 {props.rateFormError && <div className="rateForm__message--error">{props.rateFormError}</div>}
//                 <textarea
//                     // className="rateForm__commentArea"
//                     // name="rateComment"
//                     id="rateComment"
//                     onChange={props.onRateCommentChange}
//                     placeholder="نظر خود درباره پاسخگویی به تیکت را اینجا اعلام کنید"
//                 ></textarea>
//                 <div className="rateForm__submissionSection" >
//                     <div className="rateForm__submiissionSection__dropDown" >
//                         <label htmlFor="rate">امتیاز :</label>
//                         {/* <select className="dropdown-rate" name="rate" id="rate" >
//                             <option value="1">1</option>
//                             <option value="2">2</option>
//                             <option value="3">3</option>
//                             <option value="4">4</option>
//                             <option value="5">5</option>
//                         </select> */}
                        
//                         {/* <div>
//                         <h2>Rating from state: {rating}</h2>
//                                 <StarRatingComponent 
//                                 name="rate2" 
//                                 editing={false}
//                                 renderStarIcon={() => <span></span>}
//                                 starCount={10}
//                                 value={8}
//                                 />
//                             </div> */}


//                         </div>


//                     <button className="rateForm__submiissionSection__button">ثبت</button>
//                 </div>
//             </form>
//             :
//             <div className="rateForm__successMessage">نظر شما با موفقیت ثبت شد </div>
//         }
//     </React.Fragment>
// );




class RateForm extends Component {

    state = {
        rating: 1,
        answerSuccessMessage: '',
        description: ''
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }

    onFormChange = (event) => {
        event.persist();
        this.setState(() => ({
            description: event.target.value,
        }));
    }
    
    render() {
        const { rating } = this.state;
        return (
            <React.Fragment>
                <form className="rateForm" onSubmit={this.onSubmit}>
                    <h3>ثبت نظرات</h3>
                    <textarea className="answerform__commentArea" onChange={this.onFormChange} placeholder="نظرات خود را اینجا اعلام کنید" value={this.state.description}></textarea>
         <div className="star">
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>     

                        <button type="submit" className="rateForm__submiissionSection__button">ثبت</button>
                </form>
            </React.Fragment>

        );
    }
}

export default RateForm;