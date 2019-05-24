import React from 'react'
const MobileApp = (props) => {
    return ( 
       <React.Fragment>
        <div className="form-item">
        <label>
            CustomerId: 
        </label>
        <input type="text" onChange={props.handleId} value={props.localState.customerId} />
        </div>
       <div className="form-item">
        <label>
            Platform: 
        </label>
        <select onChange={props.handlePlatform} value={props.localState.platform}>
            <option value="Android">Android</option>
            <option value="IOS">IOS</option>
        </select>
        </div>
        </React.Fragment>
     );
}
 
export default MobileApp;