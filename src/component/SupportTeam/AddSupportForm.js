import React, { Component } from 'react';
import {departments} from "../../mockData/departments";
import {roles} from "../../mockData/roles";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { supportTeamUsers } from '../../mockData/supportTeamUsers';


class AddSupportUser extends Component {
    state = {
        id:0,
        data:supportTeamUsers,
        name:'',
        roleId: 1,
        error: '',
        deptId: 1,
        status:true,
        phone:'',
        email:'',
        Select:null,
        editId: null,
        tittle:'',
        showAdd:false,
        emailError:''
    };


     showForm=[1];



    handelAddButton = (e) => {
        e.preventDefault();
        this.setState({
            showEdit:false,
            showAdd:true,
            error:'',
            name:'',
            role:'',
            dept:'',
            phone:'',
            email:''
        })

    };



    handelRole = (e)=> {
        const role = e.target.value;
        const roleId = roles.find(arg => arg.name === role);
        this.setState({ role , roleId })
    };
    handelDepartment = (e)=> {
        const dept = e.target.value;
        const deptId = departments.find(arg => arg.name === dept);
        this.setState({ dept , deptId })
    };

    handleNameChange = (e) => {
        const name = e.target.value;
        this.setState({name})
    };

    handlePhoneChange = (e) => {
        const phone = e.target.value;
        this.setState({phone})
    };
    handleEmailChange = (e) => {
        const email = e.target.value;
        this.setState({email})
    };
    
        handleSupportStatusChange = (e) => {
        const status = e.currentTarget.checked;
        this.setState({status})
    };
    
       handleSubmit = (e)=>{
        e.preventDefault();

           let SupportUser = {};


           const number = this.state.phone;
           const email = this.state.email;

           if(this.state.name === '' || this.state.phone === ''||this.state.status === ''||this.state.email === ''){
               this.setState({error: 'لطفا همه فیلد ها را کامل کنید'})
           }

          else if(number.toString().length !== 11){
               this.setState({error:'شماره موبایل وارد شده صحیح نیست'})
           }

           if(email.split("").filter(x => x === "@").length !== 1 || email.indexOf(".") === -1 ) {
               if (email !== ''){
                   this.setState({emailError: 'ایمیل وارد شده صحیح نیست'})
               }
           }

           else{

               SupportUser =
                   {
                       id: this.state.id,
                       fullName: this.state.name,
                       email: this.state.email,
                       status: this.state.status,
                       phoneNumber:this.state.phone,
                       role:this.state.roleId,
                       department:this.state.deptId

                   };

               if (this.state.id=== this.state.data.length + 1)
               {
                   this.setState({ data: [...this.state.data, SupportUser], });
               }
               supportTeamUsers.push(SupportUser);



               this.setState({error:'با موفقیت ثبت شد',
                   name:'',
                   email:'',
                   phone:''
               })
                   }
        };

        render() {
        return (

            <div >
                <div class="right">
                <Fab color="secondary" aria-label="Add" onClick={this.handelAddButton}>
                    <AddIcon />
                </Fab>
                </div>


                    { this.showForm.map(() => {
                        if (this.state.showAdd===true) {
                            return (
                                <React.Fragment>
                                <div className="addTicketSample">
                                    <form >
                                        <div class=" center">

                                            <div class="error"><h5 class="center">{this.state.error}</h5></div><br/>
                                            <div className="error"><h5 className="center">{this.state.emailError}</h5></div>
                                            <br/>

                                <div class="center">
                                    <div className="font2">

                                            <h2 className="font-iran-sans">
                                                افزودن پشتیبان
                                            </h2> <br/>

                                    </div>

                                    <div className="col">

                  <div className="raw-md-6">
                    <div className = "input-support " >

                        <label htmlFor="title">  نام کامل:</label>
                        <input className="form-control" type="text" value={this.state.name} onChange={this.handleNameChange}/>

                    </div> <br/>
                  </div>

                                <div class="col">
                                 <div className="raw-md-6">
                                    <div className = "input-support ">
                                                <label > نقش پشتیبان: </label>
                                                <select  value={this.state.role}
                                                        onChange={this.handelRole}>
                                                    {roles.map((role => (
                                                        <option key={role.id} value={role.id}>{role.name}</option>)))}
                                                </select>
                                    </div> </div>
                                     <br/>
                                 </div>



                                        <div className="raw-md-6">
                                        <div>
                                                <div   className = "input-support ">
                                                    <label > دپارتمان:</label>

                                                <select   value={this.state.dept}
                                                        onChange={this.handelDepartment}>
                                                    {departments.map((dept => (
                                                        <option key={dept.id} value={dept.id}>{dept.name}</option>)))}
                                                </select>
                                            </div><br/>
                                        </div>
                                        </div>


                                        <div className="raw-md-6">
                                                <div className = "input-support ">
                                                    <label  >شماره موبایل:</label>
                                                    <div class="select_form">
                                                    <input class=" form-control" type="number" value={this.state.phone}
                                                       onChange={this.handlePhoneChange}/>
                                                    </div>
                                            </div> <br/>
                                        </div>


                                        <div className="raw-md-6">
                                                <div className = "input-support ">
                                                    <lvabel >ایمیل پشتیبان:</lvabel>
                                                    <div class="select_form">
                                                <input class="form-control" type="email"  value={this.state.email}
                                                       onChange={this.handleEmailChange}/>
                                                    </div>
                                            </div><br/>
                                        </div>



                                        <div className="raw-md-6">
                                                <div className = "input-support ">
                                                    <label  > وضعیت پشتیبان:</label>

                                                    <FormControlLabel
                                                        control={<Switch checked={this.state.status} onChange={this.handleSupportStatusChange} />}
                                                    />
                                                </div><br/>
                                        </div>


                    <div className="center">
                        <button  className="btn btn-primary"  onClick={this.handleSubmit}>ثبت پشتیبان</button>


                    </div>
                                    </div><br/>

</div>
                                </div>
                        </form>
                                </div>
                        </React.Fragment>
                            )
                        }

                        }
                    )
                    }


            </div>

        );
    }
}

export default AddSupportUser;
