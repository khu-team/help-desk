import React from 'react';
import { costumers } from '../../mockData/costumers';
import '../../../src/costumers.css'

class Editcustomer extends React.Component {
    state = {
        editId: 1,
        showEditingForm: false,
        SelectCostumer: {},
        name: '',
        city: 1,
        status: true
    }
  

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }
 
    handelSubmit = (event) => {
        event.preventDefault();
        let selectCost;
        costumers.map((costumer) => {
            if (costumer.id == this.state.editId) {
                selectCost = costumer
            }
        }
        )

        this.setState({
            showEditingForm: true,
            SelectCostumer: selectCost,
            name: selectCost.fullName,
            city: selectCost.city,
            status: selectCost.status
        })

    }

  

    chengingHandelSubmit = (event) => {
        event.preventDefault();
        console.log("gh", costumers[this.state.editId - 1]);

        costumers[this.state.editId - 1] = {
            id: +this.state.editId,
            fullName: this.state.name,
            city: +this.state.city,
            status: JSON.parse(this.state.status)
        }

        alert("ویرایش اطلاعات مشتری انجام شد...")
    }


    render() {
        return (

            <React.Fragment>
            <form className="addCustomer container" onSubmit={(event) => this.onSubmit(event)}>

            
                <h3>ویرایش اطلاعات مشتری</h3>


                <div >
                    
                <div className="col">
                <div className = "raw-md-6">

                <div className = "addCustomer2__input-group">

                        <label >

                        <div className="addCostumerButton2">
                            <nobr>
                            <label> انتخاب مشتری </label>
                            </nobr>
                            </div>
                            <select className="selectCostumer" name="editId" value={this.state.editId}  onChange={this.handleInputChange} >

                                {costumers.map((costumer) => (

                                    <option key={costumer.id} value={costumer.id}> {costumer.fullName} </option>
                                )
                                )}

                            </select>

                        </label><br></br>
                        </div>
                        </div></div>

                        <button onClick={this.handelSubmit} className="addCostumerButton">ویرایش اطلاعات</button><br></br>
                    
                   

                    {this.state.showEditingForm && costumers.map((costumer) => {
                        if (costumer.id == this.state.editId) {
                            return (
                                
                                <form key={costumer.id}>

                                    <hr></hr>

                                    <div className="col">


                    <div className = "raw-md-4">
                        <div className = "addCustomer2__input-group">

                            <div className="addCostumerButton2">
                            <label> نام مشتری </label>
                            </div>

                                <input placeholder={costumer.fullName} type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
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

                <option value={1} >تهران</option>
                                            <option value={2}>کرج</option>
                                            <option value={3}>اصفهان</option>
                                            <option value={4}>یزد</option>
                                            <option value={5}>شیراز </option>

                </select>
            </div><br></br><br></br><br></br>
          </div>
                     </div><br></br><br></br>                     



                                  

<div className="raw-md-6">
            <div className = "addCustomer2__input-group">
            
                        <div className="addCostumerButton2">
                            
                            <nobr>
                             <label> وضعیت‌‌‌‌ مشتری </label>
                             </nobr>
                             

                        </div>

                            <select name="status"  value={this.state.status} onChange={this.handleInputChange}>

                            <option value={true}>فعال</option>
                                            <option value={false}>غیر فعال</option>

                            </select>
                            
                    </div> 
             </div> <br></br> <br></br>  

                                  

                                    <button onClick={this.chengingHandelSubmit} className="addCostumerButton"> اعمال تغییرات</button>
                                </form>

                            )
                        }
                    }
                    )
                    }
                </div>

            
            </form>
            </React.Fragment>
        );
    }
}

export default Editcustomer;




