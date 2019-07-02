import React from 'react';
import { costumers } from '../../mockData/costumers';
import '../../../src/costumers.css'


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
        const value = target.name == 'city' ? +target.value : target.value;
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

            
            <React.Fragment>

             <form className="addCustomer container" onSubmit={(event) => this.onSubmit(event)}>

                <h3>افزودن مشتری</h3>

                 
                <div className="col">


                    <div className = "raw-md-4">
                        <div className = "addCustomer2__input-group">

                            <div className="addCostumerButton2">
                            <label> نام مشتری </label>
                            </div>

                                <input placeholder= "نام مشتری" type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                        </div>
                    </div><br></br>

                </div>



            <div className="col">
        
                <div className="raw-md-6">
                <div className = "addCustomer2__input-group">
                        
                        <div className="addCostumerButton2">
                        <label> شهر </label>
                        </div>

                        <select name="city" value={this.state.city} onChange={this.handleInputChange}>

                            <option value="1">تهران</option>
                            <option value="2">کرج</option>
                            <option value="3">اصفهان</option>
                            <option value="4">یزد</option>
                            <option value="5">شیراز </option>

                        </select>
                    </div><br></br><br></br><br></br>
                  </div>
            




            
            <div className="raw-md-6">
            <div className = "addCustomer2__input-group">
            
                        <div className="addCostumerButton2">
                            
                            <nobr>
                             <label> وضعیت‌‌‌‌ مشتری </label>
                             </nobr>
                             

                        </div>

                            <select name="status"  value={this.state.status} onChange={this.handleInputChange}>

                                <option value="1">فعال</option>
                                <option value="0">غیرفعال</option>

                            </select>
                            
                    </div> 
             </div>

    </div>

    <div className="addCostumerButton2">
        <br></br><br></br>
    <button onClick={this.handelSubmit} className="addCostumerButton"> افزودن مشتری </button>
    </div>

   
            </form>
            

            </React.Fragment>
        );
    }
}

export default addcustomer;



