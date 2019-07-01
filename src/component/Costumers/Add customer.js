import React from 'react';
import { costumers } from '../../mockData/costumers';

class addcustomer extends React.Component {
    state = {
        name: '',
        city: 1,
        status: 1,
        id: 0,
        data: costumers
    }
    
    handelSubmit = (event) => {
        event.preventDefault();
        let costumer = {};

        if (this.state.status == 1) {
            costumer = {
                id: this.state.id,
                fullName: this.state.name,
                city: this.state.city,
                status: true
            }
        } else {
            costumer = {
                id: this.state.id,
                fullName: this.state.name,
                city: this.state.city,
                status: false
            }
        }
        
        if (this.state.id == this.state.data.length + 1) {
            this.setState({
                data: [...this.state.data, costumer],
            })
        }
        costumers.push(costumer);

        alert("مشتری اضافه شد")
    }

    
    handleInputChange = (event) => {
        event.preventDefault(); 
        const target = event.target;
        const value = target.name === 'city' ? +target.value : target.value;
        const name = target.name;
        this.setState({
            id: costumers.length
        })
        this.setState((pre) => {
            id: pre.id++
        })
        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            
            
            <div className="welcome">
            <link rel="stylesheet" type="text/css" href="../../costumers.css" />
                
                <div className="costumerForm">
                <span> نام مشتری</span>
                    <form>
                        <label className="labels">
                            <input className="inputName" name="name"
                                type="name"  
                                placeholder="نام مشتری"
                                onChange={this.handleInputChange}
                                value={this.state.name}>
                            </input> 
                        </label> <br></br>
                            <br />
                        <span > &nbsp;&nbsp;شهر</span>
                        <br />
                        <label className="labels">
                            <select className="citybutton"
                                name="city"
                                value={this.state.city}
                                onChange={this.handleInputChange} >
                                <option value="1">تهران</option>
                                <option value="2">کرج</option>
                                <option value="3">اصفهان</option>
                                <option value="4">یزد</option>
                                <option value="5">شیراز </option>
                            </select></label><br></br>

                            <span> &nbsp; &nbsp; وضعیت </span>
                            <br />
                        <label className="labels">
                           <select className="status"
                                name="status"
                                value={this.state.status}
                                onChange={this.handleInputChange} >
                                <option value="1">فعال</option>
                                <option value="0">غیر فعال</option>
                            </select>
                        </label>
                        
                        <br/><br/><br/><br/>
                        <button onClick={this.handelSubmit} className="costumerButton">افزودن مشتری</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default addcustomer;
