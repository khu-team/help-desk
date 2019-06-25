import React from 'react';

const RateForm = (props) => (
    <React.Fragment>
        {!props.rate ?
            <form className="rateForm form-group" onSubmit={props.onRateChange}>
                {props.rateFormError && <div className="rateForm__message--error">{props.rateFormError}</div>}
                <textarea
                    className="rateForm__commentArea"
                    name="rateComment"
                    id="rateComment"
                    onChange={props.onRateCommentChange}
                    placeholder="نظر خود درباره پاسخگویی به تیکت را اینجا اعلام کنید"
                ></textarea>
                <div className="rateForm__submissionSection" >
                    <div className="rateForm__submiissionSection__dropDown" >
                        <label htmlFor="rate">امتیاز :</label>
                        <select name="rate" id="rate" >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select></div>
                    <button className="rateForm__submiissionSection__button">ثبت</button>
                </div>
            </form>
            :
            <div className="rateForm__successMessage">نظر شما با موفقیت ثبت شد </div>
        }
    </React.Fragment>
);

export default RateForm;