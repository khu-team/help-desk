import React, { Component } from 'react';
import {departments} from "../../mockData/departments";
import {roles} from "../../mockData/roles";

class AddSupportUser extends Component {
    state = {
        id: '',
        role: 'سرپرست',
        roleId: 1,
        error: '',
        deptId: 1,
        dept:'فنی'
    }


    handelRole = (e)=> {
        const role = e.target.value;
        const roleId = roles.find(arg => arg.name === role).id
        this.setState({ role , roleId })
    }
    handelDepartment = (e)=> {
        const dept = e.target.value;
        const deptId = departments.find(arg => arg.name === dept).id
        this.setState({ dept , deptId })
    }

    handleNameChange = (e) => {
        const name = e.target.value
        this.setState({name})
    }

    handlePhoneChange = (e) => {
        const phone = e.target.value
        this.setState({phone})
    }
    handleEmailChange = (e) => {
        const email = e.target.value
        this.setState({email})
    }
    
    
        render() {
        return (

            <div>
                <form  >
                    <div className="font2">
                    <table className="Table2">

                        
                        <h2>
                       پشتیبان افزودن
                        </h2>
                       
                        </table>
                    </div>
                    <div >{this.state.error ? <h4>{this.state.error}</h4> : true}</div>

                    <div >
                        
                        <table className="Table1">
                        <label className="font">نام کامل: </label>
                        <input type="text" value={this.state.name} onChange={this.handleNameChange}></input>
</table>

                    </div>

                    <div >
                    <table className="Table1">
                        <label className="font" >نقش:</label>
                        <select value={this.state.category} onChange={this.handelRole}>
                            {roles.map((role=>(<option key={role.id} value={role.name} >{role.name}</option>)))}
                        </select>
</table>
                    </div>

                    <div >
                    <table className="Table1">
                        <label className="font" >دپارتمان:</label>
                        <select value={this.state.category} onChange={this.handelDepartment}>
                            {departments.map((dept=>(<option key={dept.id} value={dept.name} >{dept.name}</option>)))}
                        </select>
                        </table>

                    </div>


                    <div >
                    <table className="Table1">
                        <label className="font"> شماره موبایل: </label>
                        <input type="number" value={this.state.phone} onChange={this.handlePhoneChange}></input>
</table>
                    </div>
                    <div >
                    <table className="Table1">
                        <label className="font"> ایمیل: </label>
                        <input type="email" value={this.state.email} onChange={this.handleEmailChange}></input>
</table>
                    </div>

                    <div >
                        <button className="button" onClick={this.handleSubmit}>ثبت پشتیبان</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default AddSupportUser;
