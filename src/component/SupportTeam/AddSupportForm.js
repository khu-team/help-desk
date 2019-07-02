import React, { Component } from 'react';
import {departments} from "../../mockData/departments";
import {roles} from "../../mockData/roles";
import 'bootstrap/dist/css/bootstrap.min.css';
import {supportTeamUsers} from "../../mockData/supportTeamUsers";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



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


    };


     showForm=[1];

    handelEditButton = (e) => {
        e.preventDefault();
        this.setState({
            showEdit:true,
            tittle:'ویرایش پشتیبان',
            showAdd:false,
            error:''


        })

    }

    handelAddButton = (e) => {
        e.preventDefault();
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

    };



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
        const editId = e.target.value;
        this.setState({editId})
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
        const number = this.state.phone;

           if(this.state.name === '' || this.state.phone === ''||this.state.status === ''||this.state.email === ''){
               this.setState({error: 'لطفا همه فیلد ها را کامل کنید'})
           }

          else if(number.toString().length !== 11){
               this.setState({error:'شماره موبایل وارد شده صحیح نیست'})
           }

           else{
               let refreshState = this.state;
               refreshState = {...refreshState,
                   name:'',
                   phone:'',
                   email:''
               };

               this.setState({...refreshState});
               this.setState({error:'با موفقیت ثبت شد'})
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

                <button type="button" class="btn btn-primary btn-lg btn-block"  onClick={this.handelEditButton}>ویرایش مشخصات پشتیبانان</button>


                {this.state.showEdit && this.showForm.map(() => {
                        if (this.state.showEdit==true) {
                            return (
                                <div>
                                    <React.Fragment>

                                        <form className="addTicketSample ">
                                            <div className="center">

                        <div class="center">
                                                <div className="error"><h4 className="center">{this.state.error}</h4></div>
                        </div>
                                                <div className="font2">

                                                    <h2 className="font-iran-sans">
                                                        {this.state.tittle}
                                                    </h2>

                                                </div>
                                            </div>



                                    <div>


                                                <div>
                                                    <label>آی دی پشتیبان:</label>
                                                <input className="form-control" type="number" value={this.state.editId}
                                                       onChange={this.handleIdChange}/>
                                            </div>


                                    </div>


                                <div className="center">
                                  <button type="button" className="btn btn-success " onClick={this.handelEdit}>جستوجوی پشتیبان</button>
                                </div>
                                        </form>
                                    </React.Fragment>
                                </div>
                            )
                        }

                    }
                )
                }




                    { this.showForm.map(() => {
                        if (this.state.showAdd===true) {
                            return (
                                <React.Fragment>

                                    <form className="addTicketSample ">
                                        <div class=" center">


                                            <div class="error"><h4 class="center">{this.state.error}</h4></div>

                                <div class="center">
                                    <div className="font2">

                                            <h2 className="font-iran-sans">
                                                {this.state.tittle}
                                            </h2>

                                    </div>
                    <div class="ticketForm__input-group center">

                        <label htmlFor="title">  نام کامل:</label>
                        <input name="title" class="inputName" type="text" value={this.state.name} onChange={this.handleNameChange}/>

                    </div>

                                    <div class="ticketForm__input-group ">
                                                <label > نقش پشتیبان: </label>
                                                <select  value={this.state.role}
                                                        onChange={this.handelRole}>
                                                    {roles.map((role => (
                                                        <option key={role.id} value={role.id}>{role.name}</option>)))}
                                                </select>
                                    </div>





                                                <div class= "ticketForm__input-group " >
                                                    <label  > دپارتمان:</label>

                                                <select value={this.state.dept}
                                                        onChange={this.handelDepartment}>
                                                    {departments.map((dept => (
                                                        <option key={dept.id} value={dept.id}>{dept.name}</option>)))}
                                                </select>
                                            </div>




                                                <div class="ticketForm__input-group ">
                                                    <label  >شماره موبایل:</label>
                                                    <input className="form-control" type="number" value={this.state.phone}
                                                       onChange={this.handlePhoneChange}/>
                                            </div>



                                                <div class="ticketForm__input-group">
                                                    <label >ایمیل پشتیبان:</label>
                                                <input type="email" className="form-control" value={this.state.email}
                                                       onChange={this.handleEmailChange}/>
                                            </div>




                                                <div className="ticketForm__input-group">
                                                    <label  >وضعیت پشتیبان</label>

                                                    <FormControlLabel
                                                        control={<Switch checked={this.state.status} onChange={this.handleSupportStatusChange} />}
                                                    />
                                                </div>


                    <div className="center">
                        <button className="btn btn-primary" onClick={this.handleSubmit}>ثبت پشتیبان</button>


                    </div>

</div>
                                </div>
                        </form>
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
