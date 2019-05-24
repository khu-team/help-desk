import React from 'react'
const Server = (props) => {
    return ( 
        <React.Fragment>
        <div>
        <label>
            CustomerId: 
        </label>
        <input type="text" onChange={props.handleId} value={props.localState.customerId}></input>
        </div>
        <div>
        <label>
            Server Country: 
        </label>
        <input type="text" value={props.localState.serverCountry} onChange={props.handleServerCountryChange}></input>
        </div>
        <div>
        <label>
            Ram: 
        </label>
        <input type="number" value={props.localState.ram} onChange={props.handleRamChange}></input>
        </div>
        <div>
        <label>
            CPU: 
        </label>
        <input type="number" value={props.localState.cpu} onChange={props.handleCpuChange}></input>
        </div>
        <div>
        <label>
            Hard: 
        </label>
        <input type="number" value={props.localState.hard} onChange={props.handleHardChange}></input>
        </div>
        <div>
        <label>
            Support: 
        </label>
        <input type="number" value={props.localState.support} onChange={props.handleSupportChange}></input>
        </div>
        <div>
        <label>
            Server Status: 
        </label>
        actiove : <input type="radio" name="status" value={true} onChange={props.handleServerStatusChange}></input>
        diactive<input type="radio" name="status" value={false} onChange={props.handleServerStatusChange}></input>
        </div>
        </React.Fragment>
     );
}
 
export default Server;