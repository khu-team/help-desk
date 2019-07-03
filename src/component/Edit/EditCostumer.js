import React from 'react';
import { costumers } from '../../mockData/costumers';
import '../../../src/costumers.css'

class Editcustomer extends React.Component
{
    state =
     {
        editId: this.props.location.state.SID,
        showEditingForm: false,
        SelectCostumer: {},
        name: '',
        city: 1,
        status: true,
        error:''

    }
  

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }
 
    handelSubmit = (event) =>
     {
        event.preventDefault();
        let selectCost;
        costumers.map((costumer) =>
         {
            if (costumer.id == this.state.editId)
             {
                selectCost = costumer
             }
         }
        )

        this.setState({ showEditingForm: true,SelectCostumer: selectCost,name: selectCost.fullName,
            city: selectCost.city, status: selectCost.status  })

    }



    chengingHandelSubmit = (event) =>
     {
        event.preventDefault();
        console.log("gh", costumers[this.state.editId - 1]);

        if(this.state.name === '' )
        {
            this.setState({error: 'نام نمی تواند خالی باشد'})
        }
        else
        {
            this.setState({error:'ویرایش انجام شد'})
        }

        costumers[this.state.editId - 1] = {
            id: +this.state.editId,
            fullName: this.state.name,
            city: +this.state.city,
            status: JSON.parse(this.state.status),
        }
        
    }
    Editcustomer=()=>{
        const ID = this.props.location.state.SID;
       return(
     <React.Fragment>
        <form className="addCustomer container" onSubmit={(event) => this.onSubmit(event)}>
            <h3 className="addCostumerButton2">ویرایش اطلاعات مشتری</h3>
            <div><br/><br/>
                 <form key={costumers.find((c)=>c.id===ID).ID}>
                    <div className="col raw-md-4">
                         <div className = "addCustomer2__input-group">   
                              <label  className="addCostumerButton2"> نام مشتری </label>
                              <input placeholder={costumers.find((c)=>c.id===ID).fullName} type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                         </div>
                     </div><br/>
               <div className="col raw-md-6">
                 <div className = "addCustomer2__input-group">  
                      <label  className="addCostumerButton2"> شهر </label>
                
                     <select name="city" value={this.state.city} onChange={this.handleInputChange}>
                                        <option value={1} >تهران</option>
                                        <option value={2}>کرج</option>
                                        <option value={3}>اصفهان</option>
                                        <option value={4}>یزد</option>
                                        <option value={5}>شیراز </option>
                     </select>
                 </div><br/>
                </div>           
              <div className="raw-md-6">
               <div className = "addCustomer2__input-group">
                    <div className="addCostumerButton2">  
                        <nobr> <label> وضعیت‌‌‌‌ مشتری </label></nobr>
                    </div>

                    <select name="status"  value={this.state.status} onChange={this.handleInputChange}>
                        <option value={true}>فعال</option>
                        <option value={false}>غیر فعال</option>
                    </select>
                        
                </div> 
              </div> <br/><br/>
                 <div className="postion-eadit-button">
                             <button  onClick={this.chengingHandelSubmit} className=" add-product-button"> اعمال تغییرات</button>
                             <p class="error-edit-field"> {this.state.error}</p>
                </div> 
            </form>       
            </div>
        </form>
    </React.Fragment>
       ) 
    }

    render(){return this.Editcustomer()}

}

export default Editcustomer;