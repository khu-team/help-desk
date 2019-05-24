import React from 'react'
const Website = (props) => {
    return ( <React.Fragment>
        
          <div className="form-item">
                <label>
                    CustomerId: 
                </label>
                <input type="text" value={props.localState.customerId} onChange={props.handleCustomerIdChange}></input>
        </div>
        <div className="form-item">
            <label>
               Title: 
            </label>
            <input type="Title" value={props.localState.title} onChange={props.handleTitleChange}></input>
        </div>
        <div className="form-item">
                <label>
                    WebsiteType: 
                </label>
                <input type="text" value={props.localState.websiteType} onChange={props.handleWebsiteTypeChange}></input>
        </div>
        <div className="form-item">
                <label>
                    Support Duration: 
                </label>
                <input type="number" value={props.localState.supportDuration} onChange={props.handleSupportDurationChange}></input>
        </div>
        <div className="form-item">
                <label>
                    Front-end language: 
                </label>
                <input type="text" value={props.localState.frontEndLanguage} onChange={props.handleFrontEndLanguageChange}></input>
        </div>
        <div className="form-item">
                <label>
                    Back-end language: 
                </label>
                <input type="text" value={props.localState.backEndLanguage} onChange={props.handleBackEndLanguageChange}></input>
        </div>
        </React.Fragment>
     );
}
 
export default Website;