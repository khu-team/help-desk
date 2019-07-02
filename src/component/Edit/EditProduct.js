import React, { Component } from 'react';
import {products} from "../../mockData/products";
import {serverTypes} from "../../mockData/serverTypes";
import {platforms} from "../../mockData/platforms";
import {categories} from '../../mockData/categories';
import '../../styeles/addproduct.css';

class EditProduct extends Component {
    state = { 
     id:'',
     name:'',
     category:'',
     price:'',
     discountPercentage:'',
     platform:'',
     duration:'',
     type:'',
     categoryname:'',
     platformname:'',
     servertypename:''
     }

     componentDidMount(){
         this.setDataToForm(Number(this.props.match.params.id));
     }


     setDataToForm = (id)=>{
         this.setState({id});
         const product=products.find((p)=> p.id == id);
         this.setCategoryName(product.category);
         this.setPlatformName(product.platform);
         this.setServerTypeName(product.type);
         this.setState({
             name:product.name,
             category:product.category,
             price:product.price,
             discountPercentage:product.discountPercentage,
             platform:product.platform,
             duration:product.duration,
             type:product.type

         })

     }

     setCategoryName = (category)=>{
        const categoryobj = categories.find((c)=> c.id == category);
        this.setState({categoryname:categoryobj.name});
     }
     
     setPlatformName = (platform)=>{
        if(platform){
        const platformobj = platforms.find((p)=> p.id == platform);
        this.setState({platformname:platformobj.name});
        }
     }
     
     setServerTypeName = (type)=>{
        if(type){
        const typeobj = serverTypes.find((t)=> t.id == type);
        this.setState({servertypename:typeobj.name});
        }
     }


     getCategoryFields = (category)=>{
        switch (category) {
            case 1:
                return (
                <div></div>
                    )
            case 2:
                return (
                    <div className="form-item"> 
                    <label>پلتفرم</label>
                    <select value={this.state.platformname} onChange={this.handelPlatformChange}>
                    {platforms.map((platform=>(<option key={platform.id} value={platform.name} >{platform.name}</option>)))}
                     </select>
                     </div>
                    ) 
            case 3:
                return (
                <React.Fragment>
                    <div className="form-item"> 
                <label>مدت زمان  (سال)</label>
                    <select value={this.state.duration} onChange={this.handelDurationChange}>
                        <option key={1}>1</option>
                        <option key={2}>2</option>
                        <option key={3}>3</option>
                        <option key={4}>4</option>
                        <option key={5}>5</option>
                    </select>
                    </div>
                    <div className="form-item"> 
                    <label>نوع سرور</label>
                    <select value={this.state.servertypename} onChange={this.handelTypeChange}>
                    {serverTypes.map((serverType=>(<option key={serverType.id} value={serverType.name} >{serverType.name}</option>)))}
                    </select>
                    </div>
                </React.Fragment>
                ) 
        }
}   


handelCategory = (e)=> {
    const categoryname = e.target.value;
    const category = categories.find((c) => c.name == categoryname).id
    this.setState({ category , categoryname })
} 


//handle name change

handleNameChange = (e) => {
    const name = e.target.value;
    this.setState({name})
}

//handle customer id change

handleIdChange = (e) => {
    const id = e.target.value
    this.setState({id})
}

handlePriceChange = (e) =>{
    const price = e.target.value;
    if(price<101000000){
        this.setState({price})
    }

}

handleDiscountPercentageChange = (e)=>{
    const discountPercentage =  e.target.value;
    if(discountPercentage>=0&discountPercentage<=100){
        this.setState({discountPercentage})
    } 
}

handleEdit = (e)=>{
e.preventDefault();

if(this.state.id === "" |this.state.name ===""|this.state.price ===""|this.state.discountPercentage===""|this.state.duration===""){
    alert("لطفا پارامتر های خالی فرم را پر کنید")
}
}

    render() { 
        return ( 
            <div className="form-div"> 
            <form className="font-iran-sans">
            <div className="form-head">
                    <h2>
                    اصلاح محصول 
                    </h2>
                </div>
                <div className="form-item"> 
                <label>شناسه محصول</label>
                <input type="number" value={this.state.id} onChange={this.handleIdChange}></input>
                </div>
                <div className="form-item"> 
                <label>نام محصول</label>
                <input type="text" value={this.state.name} onChange={this.handleNameChange}></input>
                </div>
                <div className="form-item"> 
                <label>دسته بندی</label>
                <select value={this.state.categoryname} onChange={this.handelCategory}>
                {categories.map((category=>(<option key={category.id} value={category.name} >{category.name}</option>)))}
                 </select>
                </div>
                <div className="form-item"> 
                <label>قیمت</label>
                <input type="number" value={this.state.price} onChange={this.handlePriceChange}></input>
                </div>
                <div className="form-item"> 
                <label>درصد تخفیف</label>
                <input type="number" value={this.state.discountPercentage} onChange={this.handleDiscountPercentageChange}></input>
                </div>
                <div>
                 {this.getCategoryFields(this.state.category)}
                </div>
                <br></br>
                <div className="button-wrappr">
                <button className="add-product-button"onClick={this.handleEdit}>اصلاح محصول</button>
                </div>
                <br></br>
            </form>
            </div>
         );
    }
}
 
export default EditProduct;