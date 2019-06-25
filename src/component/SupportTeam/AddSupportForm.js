import React, { Component } from 'react';
import {departments} from "../../mockData/departments";
import {roles} from "../../mockData/roles";

class AddSupportUser extends Component {
    state = {
        name:'',
        role: '',
        roleId: 1,
        error: '',
        deptId: 1,
        dept:'',
        status:'',
        phone:'',
        email:''

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
    
        handleSupportStatusChange = (e) => {
        const status = e.currentTarget.value
        this.setState({status})
    }
        
        
            handelEdit = (e) => {
        e.preventDefault();

        let select=null;
        supportTeamUsers.map((support) => {
                if (support.id === this.state.editId) {
                    select = support
                }
            }
        )
        this.setState({
            Select: select,
            name: select.fullName,
            role:select.role,
            dept:select.department,
            phone: select.phoneNumber,
            email: select.email,
        })

    }
    
       handleSubmit = (e)=>{
        e.preventDefault();
        const number = this.state.phone;
        if(number.toString().length !== 10){
            this.setState({error:'phone number is invalid'})
        }
           if(this.state.name === '' || this.state.phone === ''||this.state.status === ''||this.state.email === ''){
               this.setState({error: 'لطفا همه فیلد ها را کامل کنید'})
           }

          else if(number.toString().length !== 11){
               this.setState({error:'شماره موبایل وارد شده صحیح نیست'})
           }

           else{

               let refreshState = this.state
               refreshState = {...refreshState,
                   name:'',
                   role: '',
                   roleId: 1,
                   deptId: 1,
                   dept:'',
                   phone:'',
                   email:''
               }

               this.setState({...refreshState})
               this.setState({error:'با موفقیت ثبت شد'})
                   }
        }
       
       
       
    
    
render() {
        return (

            <div >
                <form className="font">
                    <div className="font2">
                    <table className="Table2">

                        
                        <h2 className="font-iran-sans">
                       پشتیبان افزودن
                        </h2>
                       
                        </table>
                    </div>
                    <div >{this.state.error ? <h4>{this.state.error}</h4> : true}</div>

                    <div   >
                    <table className="Table1">
                        <label  >نقش:</label>
                        <select  value={this.state.role} onChange={this.handelRole}>
                            {roles.map((role=>(<option key={role.id} value={role.id} >{role.name}</option>)))}
                        </select>
</table>
                    </div>

                    <div >
                    <table className="Table1">
                        <label  >نقش:</label>
                        <select value={this.state.category} onChange={this.handelRole}>
                            {roles.map((role=>(<option key={role.id} value={role.name} >{role.name}</option>)))}
                        </select>
</table>
                    </div>

                    <div >
                    <table className="Table1">
                        <label >دپارتمان:</label>
                        <select   value={this.state.dept} onChange={this.handelDepartment}>
                            {departments.map((dept=>(<option key={dept.id} value={dept.id} >{dept.name}</option>)))}
                        </select>
                        </table>

                    </div>


                    <div >
                    <table className="Table1">
                        <label > شماره موبایل: </label>
                        <input type="number" value={this.state.phone} onChange={this.handlePhoneChange}/>
</table>
                    </div>
                    <div >
                    <table className="Table1">
                        <label > ایمیل: </label>
                        <input type="email" value={this.state.email} onChange={this.handleEmailChange}/>
</table>
                    </div>
            
            <div>
                        <table className="Table1">
                        <label >
                            وضعیت پشتیبان
                        </label>
                        <span >
                <label ><span>فعال</span><input  type="radio" name="status" value={true} onChange={this.handleSupportStatusChange} /></label>
                <label >غیرفعال<input   type="radio" name="status" value={false} onChange={this.handleSupportStatusChange}/></label>
                </span>
                        </table>
                    </div>

                    <div >
                        <button className="button" onClick={this.handleSubmit}>ثبت پشتیبان</button>
                        <button class="btn btn-success" onClick={this.handelEdit}>ادیت</button>

                    </div>
                </form>
            </div>

        );
    }
}

export default AddSupportUser;
