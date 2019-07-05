import React, { Component } from 'react';
import {departments} from "../../mockData/departments";
import {roles} from "../../mockData/roles";
import 'bootstrap/dist/css/bootstrap.min.css';
import {supportTeamUsers} from "../../mockData/supportTeamUsers";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


class AddSupportUser extends Component {
    state = {
        name:'',
        roleId: 1,
        error: '',
        deptId: 1,
        status:true,
        phone:'',
        email:'',
        successSubmit:''
        
    };

    componentDidMount(){
        this.setDataToForm(Number(this.props.match.params.id));
    }

    setDataToForm = (id)=>{
        this.setState({id});
        const support=supportTeamUsers.find((supporter)=> supporter.id == id);
        this.setRole(support.role);
        this.setDept(support.department);
        this.setState({
            name:support.fullName,
            phone:support.phoneNumber,
            email:support.email,
            roleId:support.role,
            deptId:support.department,
            status:support.status,

        })

    };

    setRole = (role)=>{
        const Role = roles.find((Role)=> Role.id == role);
        this.setState({roleId:Role.name});
    };

    setDept= (department)=>{
        if(department){
            const Dept = departments.find((dept)=> dept.id == department);
            this.setState({deptId:Dept.name});
        }
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
        const email = this.state.email;



         if(this.state.name === '' || this.state.phone === ''||this.state.status === ''||this.state.email === ''){
            this.setState({error: 'لطفا همه فیلد ها را کامل کنید',
                successSubmit:''})
        }

        else if(number.toString().length !== 11){
            this.setState({error:'شماره موبایل وارد شده صحیح نیست',
                successSubmit:''})
        }

        else if(email.split("").filter(x => x === "@").length !== 1 || email.indexOf(".") === -1 ) {
                this.setState({error: 'ایمیل وارد شده صحیح نیست',
                    successSubmit:''})

        }



        else{
            this.setState({successSubmit:'با موفقیت ویرایش شد',
                error:''
            })
        }
    };

    render() {
        return (

            <div >

                <React.Fragment>
                    <div className="addTicketSample">
                        <form >
                            <div class=" center">

                                <div className="error-submit"><h5 className="center">{this.state.error}</h5></div>
                                <br/>
                                <div className="success-submit"><h5 className="center">{this.state.successSubmit}</h5></div>
                                <br/>


                                <div class="center">
                                    <div className="font2">

                                        <h3 className="font-iran-sans">
                                            تغییر مشخصات پشتیبان
                                        </h3> <br/>

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
                                            <button className="btn btn-primary" onClick={this.handleSubmit}>ثبت تغییرات</button>


                                        </div>
                                    </div><br/>

                                </div>
                            </div>
                        </form>
                    </div>
                </React.Fragment>

            </div>

        );
    }
}

export default AddSupportUser;
