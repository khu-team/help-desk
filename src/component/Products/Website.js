import React from 'react'
const Website = (props) => {
    return (<React.Fragment>

        <div className="form-item">
            <input type="text" value={props.localState.customerId} onChange={props.handleCustomerIdChange}></input>
            <label>
                :شناسه مشتری
                </label>
        </div>
        <div className="form-item">
            <input type="text" value={props.localState.title} onChange={props.handleTitleChange}></input>
            <label>
                :عنوان
            </label>
        </div>
        <div className="form-item">
            <input type="text" value={props.localState.websiteType} onChange={props.handleWebsiteTypeChange}></input>
            <label>
                :نوع وبسایت
                </label>
        </div>
        <div className="form-item">
            <input type="number" value={props.localState.supportDuration} onChange={props.handleSupportDurationChange}></input>
            <label>
           :مدت زمان پشتیبانی 
                </label>
        </div>
        <div className="form-item">
            <input type="text" value={props.localState.frontEndLanguage} onChange={props.handleFrontEndLanguageChange}></input>
            <label>
               :زبان فرانت اند
                </label>
        </div>
        <div className="form-item">
            <input type="text" value={props.localState.backEndLanguage} onChange={props.handleBackEndLanguageChange}></input>
            <label>
               زبان بک اند
                </label>
        </div>
    </React.Fragment>
    );
}

export default Website;