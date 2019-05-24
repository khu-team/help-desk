import React from 'react'
const MobileApp = () => {
    return ( 
       <React.Fragment>
        <div>
        <label>
            CustomerId: 
        </label>
        <input type="text"></input>
        </div>
       <div>
        <label>
            Platform: 
        </label>
        <select>
            <option>Android</option>
            <option>IOS</option>
        </select>
        </div>
        </React.Fragment>
     );
}
 
export default MobileApp;