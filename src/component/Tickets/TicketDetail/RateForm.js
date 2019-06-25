import React from 'react';

const RateForm = (props) => (
    <React.Fragment>
        {!props.rate ?
            <form className="rateForm" onSubmit={props.onRateChange}>
                {props.rateFormError&&<div>{props.rateFormError}</div>}
                <textarea
                    name="rateComment"
                    id="rateComment"
                    cols="30"
                    rows="10"
                    onChange={props.onRateCommentChange}
                    placeholder="نظر خود درباره پاسخگویی به تیکت را اینجا اعلام کنید"
                ></textarea>
                <label htmlFor="rate">امتیاز :</label>
                <select name="rate" id="rate" >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button>ثبت</button>
            </form>
            :
            <div>نظر شما با موفقیت ثبت شد </div>
        }
    </React.Fragment>
);

export default RateForm;