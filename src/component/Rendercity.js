import React from 'react';
//import './costomer.js';
//import './src/App.js';
class city extends React .component{
    state={id:'',fullname:'',city:'',status:'true',reports:[]};
        handleChange = fullname => event => {
        this.setState({[fullname]: event.target.value});
        };
        handleSubmit = () => {
            const {id, fullname, status, id, reports} = this.state;
            const costomer = costomers.find((item) => item.id === code);
            if(user){
                const reportObject = {
                    id,
                    fullname,
                    city,
                    status,
                    id,
                    fullname: user.fullname
                };
                reports.push(reportObject);
                this.setState(() => ({reports}));
                alert('Done');
            } else{
                alert('costomer isnot this list!');
            }
    
        };
    

        render(){

        return(
            <div>
            <input type="text" value={this.state.id} onchange={this.handlechange('id')} placehholder="ID"/>
            <input type="text" value={this.state.fullname} onchange={this.handlechange('fullname')} placeholder="fullname"/>
            <input type="text" value={this.state.city} onchange={this.handlechange('city')} placeholder="city"/>
            <select value={this.state.status} onchange={this.handlechange('status')}>
                <option value="active">active</option>
                <option value="notactive">notactive</option>
            </select>
            <butto n onclick={this.handleSubmit}>Submit</button>
            <hr/>
             {this.state.reports.map((costomer) => (
                <ul key={user.id}>
                <li>Fullname: {costomer.fullname}</li>
                <li>City: {costomer.city}</li>
                <li>status: {costomer.status}</li>
                </ul>

            ))}
            </div>
    )         
}  
}
export default City;