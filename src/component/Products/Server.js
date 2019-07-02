import React from 'react'
const Server = (props) => {
    return (
        <React.Fragment>
            <div className="form-item">
                <input type="text" onChange={props.handleId} value={props.localState.customerId}></input>
                <label>
                شناسه مشتری:
        </label>
            </div>
            <div className="form-item">
                <input type="text" value={props.localState.serverCountry} onChange={props.handleServerCountryChange}></input>
                <label>
                کشور سرور :
        </label>
            </div>
            <div className="form-item">
                <input type="number" value={props.localState.ram} onChange={props.handleRamChange}></input>
                <label>
                RAMمقدار :
        </label>
            </div>
            <div className="form-item">
                <input type="number" value={props.localState.cpu} onChange={props.handleCpuChange}></input>
                <label>
                CPUمقدار :
        </label>
            </div>
            <div className="form-item">
                <input type="number" value={props.localState.hard} onChange={props.handleHardChange}></input>
                <label>
                Hardمقدار :
        </label>
            </div>
            <div className="form-item">
                <input type="number" value={props.localState.support} onChange={props.handleSupportChange}></input>
                <label>
                مدت زمان پشتیبانی  :
        </label>
            </div>
            <div className="form-item">
                <label>
                وضعیت سرور :
        </label>
        <span className="server-status">
                <label><span>فعال</span><input className="form-radio " type="radio" name="status" value={true} onChange={props.handleServerStatusChange} /></label>
                <label><span>غیرفعال</span><input  className="form-radio " type="radio" name="status" value={false} onChange={props.handleServerStatusChange} /></label>
                </span>
            </div>
        </React.Fragment>
    );
}

export default Server;