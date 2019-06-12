import React, { Component } from 'react';
import {departments} from "../../mockData/departments";
import {roles} from "../../mockData/roles";

class AddProduct extends Component {
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
