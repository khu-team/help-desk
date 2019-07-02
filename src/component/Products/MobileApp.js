import React from 'react'
const MobileApp = (props) => {
    return ( 
       <React.Fragment>
        <div className="form-item">
        <input type="text" onChange={props.handleId} value={props.localState.customerId} />
        <label>
        شناسه مشتری : 
        </label>
        </div>
       <div className="form-item">
        
        <select onChange={props.handlePlatform} value={props.localState.platform}>
            <option value="Android">اندروید</option>
            <option value="IOS">IOS</option>
        </select>
        <label>
        پلتفرم :
        </label>
        </div>
        </React.Fragment>
     );
}
 
export default MobileApp;