import React from 'react'
const Website = () => {
    return ( <React.Fragment>
        <div>
          <div>
                <label>
                    CustomerId: 
                </label>
                <input type="text"></input>
        </div>
            <label>
               Title: 
            </label>
            <input type="Title"></input>
        </div>
        <div>
                <label>
                    WebsiteType: 
                </label>
                <input type="text"></input>
        </div>
        <div>
                <label>
                    Support Duration: 
                </label>
                <input type="number"></input>
        </div>
        <div>
                <label>
                    Front-end languge: 
                </label>
                <input type="number"></input>
        </div>
        <div>
                <label>
                    Back-end languge: 
                </label>
                <input type="number"></input>
        </div>
        </React.Fragment>
     );
}
 
export default Website;