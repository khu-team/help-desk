import React from 'react';
import { costumers } from '../../mockData/costumers';

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
    ShowDetail=()=> {
        var numeral = require('numeral');
        const ID = this.props.location.state.ID
       // const numcos=costumers.filter((t)=>t.==ID)
       /* var numeral = require('numeral');
        const ID = this.props.location.state.ID
        const ntransaction=transactions.filter((t)=>t.product==ID)
        const nproduct=products.find((p)=> p.id == ID)
    const {id,name,price,category,duration,discountPercentage}=nproduct;*/
}


    render() {
        return (
            <div className="welcome">
            <link rel="stylesheet" type="text/css" href="../../costumers.css" />
               
                <div className="editForm">
                    <form className="marginForm">
                     <p>اتنخاب مشتری</p>
                     
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
                            </select>
                        </label><br></br><br /><br /><br />
                        <button onClick={this.handelSubmit} className="costumerButton">ویرایش اطلاعات</button><br></br>
                        <br></br><br></br><br></br><br></br><br></br>
                    </form>
                   </div>
                    {this.state.showEditingForm && costumers.map((costumer) => {
                        if (costumer.id === this.state.editId) {
                            return (
                                <div className="costumerForm2">
                                
                                <form  key={costumer.id}>
                                
                                    <p>نام مشتری</p>
                                    <label className="labels">
                                        <input
                                            className="inputName"
                                            name="name"
                                            type="text"
                                            placeholder={costumer.fullName}
                                            onChange={this.handleInputChange}
                                            value={this.state.name}>
                                        </input> 
                                    </label><br></br>
                                    <br />
                                    <span > &nbsp;&nbsp;شهر</span>
                                    <br />
                                    <label className="labels ecitybutton">
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
                                        </select> 
                                    </label><br></br>
                                        
                                        <span> &nbsp; &nbsp; وضعیت </span>
                            <br />
                                    <label className="labels">
                                        <select
                                            name="status"
                                            value={this.state.status}
                                            onChange={this.handleInputChange}
                                        >
                                            <option value={true}>فعال</option>
                                            <option value={false}>غیر فعال</option>
                                        </select>
                                    </label><br></br>
                                        <br/> <br />
                                    <button onClick={this.chengingHandelSubmit} className="costumerButton"> اعمال تغییرات</button>
                                </form>
                                </div>
                            )
                        }
                    }
                    )
                    }
                </div>
            
        );
    }
}

export default Editcustomer;



// import React from 'react';

// const EditCostumer = () => (
//     <div>
//         Edit Costumer
//     </div>
// );

// export default EditCostumer;