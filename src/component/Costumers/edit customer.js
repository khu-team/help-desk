import React from 'react';
import { costumers } from '../../mockData/costumers';

class editcustomer extends React.Component {
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
            status: this.state.status
        }

        alert("ویرایش اطلاعات مشتری انجام شد...")
    }


    render() {
        return (
            <div className="welcome">
                
                <h1 >:ویرایش اطلاعات مشتری</h1>
                
                <div className="editForm">
                    <form className="marginForm">
                       
                        <label>
                            <select
                                name="editId"
                                value={this.state.editId}
                                onChange={this.handleInputChange}
                            >
                                {costumers.map((costumer) => (
                                    <option key={costumer.id} value={costumer.id}>{costumer.fullName}</option>
                                )
                                )}
                            </select>: انتخاب مشتری
                        </label><br></br>
                        <button onClick={this.handelSubmit} className="costumerButton">ویرایش اطلاعات</button><br></br>
                    </form>
                    
                    {this.state.showEditingForm && costumers.map((costumer) => {
                        if (costumer.id == this.state.editId) {
                            return (
                                
                                <form key={costumer.id}>
                                    <hr></hr>
                                    <label className="labels">
                                        <input
                                            className="inputName"
                                            name="name"
                                            type="text"
                                            placeholder={costumer.fullName}
                                            onChange={this.handleInputChange}
                                            value={this.state.name}>
                                        </input> : نام مشتری
                                    </label><br></br>

                                    <label className="labels">
                                        <select
                                            name="city"
                                            value={this.state.city}
                                            onChange={this.handleInputChange}
                                        >
                                            <option value={1} >تهران</option>
                                            <option value={2}>کرج</option>
                                            <option value={3}>اصفهان</option>
                                            <option value={4}>یزد</option>
                                            <option value={5}>شیراز </option>

                                        </select> : شهر

                                    </label><br></br>

                                    <label className="labels">
                                        <select
                                            name="status"
                                            value={this.state.status}
                                            onChange={this.handleInputChange}
                                        >
                                            <option value={true}>فعال</option>
                                            <option value={false}>غیر فعال</option>
                                        </select>: وضعیت مشتری
                                    </label><br></br>

                                    <button onClick={this.chengingHandelSubmit} className="costumerButton"> اعمال تغییرات</button>

                                </form>

                            )
                        }
                    }
                    )
                    }
                </div>

            </div>
        );
    }
}

export default editcustomer;