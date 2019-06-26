import React, { Component } from 'react';
import {departments} from "../../mockData/departments";
import {roles} from "../../mockData/roles";
import 'bootstrap/dist/css/bootstrap.min.css';
import {supportTeamUsers} from "../../mockData/supportTeamUsers";


class AddSupportUser extends Component {
    state = {
        name:'',
        roleId: 1,
        error: '',
        deptId: 1,
        status:true,
        phone:'',
        email:'',
        Select:null,
        editId: null,
        showEdit:false,
        tittle:'',
        showAdd:false


    }

     showForm=[1]

    handelEditButton = (e) => {
        e.preventDefault()
        this.setState({
            showEdit:true,
            tittle:'ویرایش پشتیبان',
            showAdd:false,
            error:''


        })

    }

    handelAddButton = (e) => {
        e.preventDefault()
        this.setState({
            showEdit:false,
            tittle:'افزودن پشتیبان',
            showAdd:true,
            error:'',
            name:'',
            role:'',
            dept:'',
            phone:'',
            email:''


        })

    }



    handelEdit = (e) => {
        e.preventDefault();

        let select='';
        supportTeamUsers.some((support) => {
                if (support.id == this.state.editId) {
                    this.setState({
                        showAdd:true,
                        showEdit:false
                    })
                    select = support

                    this.setState({
                        Select: select,
                        name: select.fullName,
                        role:select.role,
                        dept:select.department,
                        phone: select.phoneNumber,
                        email: select.email,
                        error:''

                    })

                }
                else if(select==='')  {
                    this.setState({error:'آی دی وارد شده صحیح نیست',
                        name:'',
                        role:'',
                        dept:'',
                        phone:'',
                        email:'',
                    }  )
                }
        }
        )

    }

    handleIdChange = (e) => {
        const editId = e.target.value
        this.setState({editId})
    }

    handelRole = (e)=> {
        const role = e.target.value;
        const roleId = roles.find(arg => arg.name === role)
        this.setState({ role , roleId })
    }
    handelDepartment = (e)=> {
        const dept = e.target.value;
        const deptId = departments.find(arg => arg.name === dept)
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
    
       handleSubmit = (e)=>{
        e.preventDefault();
        const number = this.state.phone;

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
                <button type="button" class="btn btn-secondary btn-lg btn-block" onClick={this.handelAddButton}>افزودن پشتیبان جدید</button>

                <button type="button" class="btn btn-primary btn-lg btn-block"  onClick={this.handelEditButton}>ویرایش مشخصات پشتیبانان</button>


                <form className="font">


                    <div >{this.state.error ? <h4>{this.state.error}</h4> : true}</div>



                    {this.state.showEdit && this.showForm.map(() => {
                            if (this.state.showEdit==true) {
                            return (
                                <div>
                                    <div className="font2">
                                        <table className="Table2">


                                            <h2 className="font-iran-sans">
                                                {this.state.tittle}
                                            </h2>

                                        </table>
                                    </div>

                                    <table className="Table1">
                                        <label>آیدی پشتیبان: </label>
                                        <input className="form-control" type="text" value={this.state.editId}
                                               onChange={this.handleIdChange}/>
                                    </table>


                                    <button type="button" className="btn btn-success" onClick={this.handelEdit}>جستوجوی پشتیبان</button>


                                </div>
                            )
                        }

                    }
                        )
                    }

                    {this.state.showAdd && this.showForm.map(() => {
                        if (this.state.showAdd===true) {
                            return (

                                <div>
                                    <div className="font2">
                                        <table className="Table2">


                                            <h2 className="font-iran-sans">
                                                {this.state.tittle}
                                            </h2>

                                        </table>
                                    </div>
                    <div >

                        <table className="Table1">
                        <label >نام کامل: </label>
                        <input class="form-control" type="text" value={this.state.name} onChange={this.handleNameChange}/>
</table>

                    </div>

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
                        <label >دپارتمان:</label>
                        <select   value={this.state.dept} onChange={this.handelDepartment}>
                            {departments.map((dept=>(<option key={dept.id} value={dept.id} >{dept.name}</option>)))}
                        </select>
                        </table>

                    </div>


                    <div  >
                    <table className="Table1">
                        <label > شماره‌موبایل: </label>
                        <input class="form-control" type="number" value={this.state.phone} onChange={this.handlePhoneChange}/>
                    </table>
                    </div>
                    <div >
                    <table className="Table1">
                        <label > ایمیل: </label>
                        <input type="email" class="form-control" value={this.state.email} onChange={this.handleEmailChange}/>
</table>
                    </div>
            
            <div>
                        <table className="Table1">
                        <label >
                            وضعیت پشتیبان
                        </label>
						
						<div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <span >
                <label class="btn btn-secondary"><span>فعال</span>< input  type="radio" name="status" value={true} onChange={this.handleSupportStatusChange} checked /></label>
                <label class="btn btn-secondary">غیرفعال<input  type="radio" name="status" value={false} onChange={this.handleSupportStatusChange} required/></label>
                </span>
				</div>
                        </table>
                    </div>

                    <div >
                        <button className="btn btn-success" onClick={this.handleSubmit}>ثبت پشتیبان</button>

                    </div>

</div>
                            )
                        }

                        }
                    )
                    }

                </form>

            </div>

        );
    }
}

export default AddSupportUser;
