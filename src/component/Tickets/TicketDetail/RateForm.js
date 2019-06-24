import React from 'react';

const RateForm = (props) => (
    <React.Fragment>
        <form className="rateForm" onSubmit={props.onRateChange}>
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
    </React.Fragment>
);

export default RateForm;