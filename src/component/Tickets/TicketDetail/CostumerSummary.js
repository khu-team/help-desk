import React from 'react';

const CostumerSummary = (props) => (
    <React.Fragment>
        <div className="costumerSummary">
            <div className="costumerSummary__Costumer">
                {
                    <div>مشتری : {props.costumerDetails.fullName}</div>
                }
            </div>
            <div className="costumerSummary__Product">
                {
                    <div>محصول : {props.productDetails.name}</div>
                }
            </div>
            <div></div>
        </div>
    </React.Fragment>
);

export default CostumerSummary;