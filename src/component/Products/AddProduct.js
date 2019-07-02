import React, { Component } from 'react';
import Server from './Server';
import Website from './Website';
import MobileApp from './MobileApp'
import {categories} from '../../mockData/categories';
import AssigneProductToCustomer from './AssigneProductToCustomer';
import '../../styeles/addproduct.css'
class AddProduct extends Component {
    state = { 
        id: this.props.product ? this.props.product.id : '',    
        category: this.props.product ? this.props.product.category : 'وب سایت و پرتال',
        categoryId: this.props.product ? this.props.product.categoryId : 1,
        error: '',
        mobileState: {
            customerId: this.props.product ? this.props.product.customerId : '',
            platform: this.props.product ? this.props.product.platform : 'Android',
        },
        websiteState: {
            title: this.props.product ? this.props.product.title : '',
            customerId: this.props.product ? this.props.product.customerId : '',
            websiteType: this.props.product ? this.props.product.websiteType : '',
            supportDuration: this.props.product ? this.props.product.supportDuration : '',
            frontEndLanguage: this.props.product ? this.props.product.frontEndLanguage : '',
            backEndLanguage: this.props.product ? this.props.product.backEndLanguage : ''
        },
        serverState: {
            customerId: this.props.product ? this.props.product.customerId : '',
            serverCountry: this.props.product ? this.props.product.serverCountry : '',
            ram: this.props.product ? this.props.product.ram : '',
            cpu: this.props.product ? this.props.product.cpu : '',
            hard: this.props.product ? this.props.product.hard : '',
            support: this.props.product ? this.props.product.support : '',
            serverStatus: this.props.product ? this.props.product.serverStatus : true
        },
        products: []
     }
  
    //Functions
    //Get Categoris fileds from their component
getCategoryFields = (categoryId)=>{
        switch (categoryId) {
            case 1:
                return (<Website
                    handleCustomerIdChange={this.handleCustomerIdChange}
                    handleTitleChange={this.handleTitleChange}
                    handleWebsiteTypeChange={this.handelWebsiteTypeChange}
                    handleSupportDurationChange={this.handleSupportDurationChange}
                    handleFrontEndLanguageChange={this.handleFrontEndLanguageChange}
                    handleBackEndLanguageChange={this.handleBackEndLanguageChange}
                    localState={this.state.websiteState}
                    />)
            case 2:
                return (<MobileApp 
                    handleId={this.handleMobileIdChange} 
                    handlePlatform={this.handlePlatformChange}
                    localState={this.state.mobileState}
                    /> ) 
            case 3:
                return (<Server
                    handleId={this.handleServerIdChange}
                    handleServerCountryChange={this.handleServerCountryChange}
                    handleRamChange={this.handleRamChange}
                    handleCpuChange={this.handleCpuChange}
                    handleHardChange={this.handleHardChange}
                    handleSupportChange={this.handleSupportChange}
                    handleServerStatusChange={this.handleServerStatusChange}
                    localState={this.state.serverState}
                    />) 
            default: 
                return (<Website
                    handleCustomerIdChange={this.handleCustomerIdChange}
                    handleTitleChange={this.handleTitleChange}
                    handleWebsiteTypeChange={this.handelWebsiteTypeChange}
                    handleSupportDurationChange={this.handleSupportDurationChange}
                    handleFrontEndLanguageChange={this.handleFrontEndLanguageChange}
                    handleBackEndLanguageChange={this.handleBackEndLanguageChange}
                    localState={this.state.websiteState}
                />)
        }
}   

    //handel back-end language change

    handleBackEndLanguageChange = (e) => {
        const backEndLanguage = e.target.value
        const {websiteState} = this.state
        websiteState.backEndLanguage = backEndLanguage
        this.setState({websiteState}) 
    }

    //handle fornt-end language change

    handleFrontEndLanguageChange = (e) => {
        const frontEndLanguage = e.target.value
        const {websiteState} = this.state
        websiteState.frontEndLanguage = frontEndLanguage
        this.setState({websiteState})
    }

    //handle support duration change

    handleSupportDurationChange = (e) => {
        const supportDuration = e.target.value
        const {websiteState} = this.state
        websiteState.supportDuration = supportDuration
        this.setState({websiteState})
    }

    //handle website type change

    handelWebsiteTypeChange = (e) => {
        const websiteType = e.target.value
        const {websiteState} = this.state
        websiteState.websiteType = websiteType
        this.setState({websiteState})
    }

    //handle title change

    handleTitleChange = (e) => {
        const title = e.target.value
        const {websiteState} = this.state
        websiteState.title = title
        this.setState({websiteState})
    }

    //handle customer id change

    handleCustomerIdChange = (e) => {
        const customerId = e.target.value
        const {websiteState} = this.state
        websiteState.customerId = customerId
        this.setState({websiteState})
    }

    //handel server status

    handleServerStatusChange = (e) => {
        const status = e.target.value
        const {serverState} = this.state
        serverState.status = status
        this.setState({serverState})
    }

    //handle support change

    handleSupportChange = (e) => {
        const support = e.target.value
        const {serverState} = this.state
        serverState.support = support
        this.setState({serverState})
    }

    //handel hard change

    handleHardChange = (e) => {
    const hard = e.target.value
    const {serverState} = this.state
    serverState.hard = hard
    this.setState({serverState})
    }

    //handle cpu change

    handleCpuChange = (e) => {
        const cpu = e.target.value
        const {serverState} = this.state
        serverState.cpu = cpu
        this.setState({serverState})
    }

    //handel ram change

    handleRamChange = (e) => {
        const ram = e.target.value
        const {serverState} = this.state
        serverState.ram = ram
        this.setState({serverState})
    }

    //handle server country change

    handleServerCountryChange = (e) => {
        const serverCountry = e.target.value
        const {serverState} = this.state
        serverState.serverCountry = serverCountry
        this.setState({serverState})
    }

    //handle server id change

    handleServerIdChange = (e) => {
        const customerId = e.target.value
        const {serverState} = this.state
        serverState.customerId = customerId
        this.setState({serverState})
    }

    //Handel Category

    handelCategory = (e)=> {
        const category = e.target.value;
        const categoryId = categories.find(arg => arg.name === category).id
        this.setState({ category , categoryId })
    } 

    //handle mobile id

    handleMobileIdChange = (e) => {
        const customerId = e.target.value
        const {mobileState} = this.state
        mobileState.customerId = customerId
        this.setState({mobileState})
    }

    //handelPlatform

    handlePlatformChange = (e) => {
        const platform = e.target.value
        const {mobileState} = this.state
        mobileState.platform = platform
        this.setState({mobileState})
    }

    //handle id change

    handleIdChange = (e) => {
        const id = e.target.value
        this.setState({id})
    }

    //handle edit

    handleEdit = (e) => {
        e.preventDefault()
        console.log('edit done')
    }

    //handle submit

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.categoryId === 2) {
            if(this.state.mobileState.customerId === '' || this.state.id === ''){
                this.setState({error: 'لطفا ورودی های خود را اصلاح کنید'})
            }else{
                let {mobileState, products} = this.state
                const {id, categoryId,category} = this.state
                const {customerId, platform} = mobileState
                products = [...products,{id, categoryId, category, customerId, platform}]
                let preState = this.state
                preState = {...preState,
                    id: '',
                    error: '',
                    category: '',
                    categoryId: '',
                    mobileState: {
                        customerId: '',
                        platform: 'Android'
                    }
                }
                this.setState({...preState,products})
            }
        }else if(this.state.categoryId === 1) {
            if(Object.values(this.state.websiteState).some(arg => arg === '')) {
                this.setState({error: 'لطفا ورودی های خود را اصلاح کنید'})
            }else{
                let {websiteState, products} = this.state
                const {id, category, categoryId} = this.state
                const {customerId, title, websiteType, backEndLanguage, frontEndLanguage, supportDuration} = websiteState
                products = [...products, {id, category, categoryId, customerId, title, websiteType, backEndLanguage, frontEndLanguage, supportDuration}]
                let preState = this.state
                preState = {...preState,
                    id: '',
                    category: '',
                    categoryId: '',
                    error: '',
                    websiteState: {
                        customerId: '',
                        supportDuration: '',
                        backEndLanguage: '',
                        frontEndLanguage: '',
                        title: '',
                        websiteType: '',
                    }
                }
                this.setState({...preState,products})
            }
        }else if(this.state.categoryId === 3) {
            if(Object.values(this.state.serverState).some(arg => arg === '')) {
                this.setState({error: 'لطفا ورودی های خود را اصلاح کنید'})
            }else{
                let {serverState, products} = this.state
                const {id, category, categoryId} = this.state
                const {customerId, hard, cpu, ram, support, serverCountry, serverStatus} = serverState
                products = [...products, {id, categoryId, category, customerId, hard, cpu, ram, serverCountry, serverStatus, support}]
                let preState = this.state
                preState = {...preState,
                    id: '',
                    error: '',
                    category: '',
                    categoryId: '',
                    serverState: {
                        customerId: '',
                        hard: '',
                        cpu: '',
                        ram: '',
                        support: '',
                        serverCountry: '',
                        serverStatus: false
                    }
                }
                this.setState({...preState, products})
            }
        }

    }

    render() { 
        return ( 
            <React.Fragment>
            <div className="form-div">   
            <form className="font-iran-sans">
                <div className="form-head">
                    <h2>
                        {this.props.product ? 'اصلاح محصول' : 'افزودن محصول'} 
                    </h2>
                </div>
            <div className="error">{this.state.error ? <h4>{this.state.error}</h4> : true}</div>
            <div className="form-item">   
            <input type="number" value={this.state.id} onChange={this.handleIdChange}></input>
            <label> شناسه محصول:</label>
            </div>
            <div className="form-item">       
            <select value={this.state.category} onChange={this.handelCategory}>
                {categories.map((category=>(<option key={category.id} value={category.name} >{category.name}</option>)))}
            </select>
            <label>دسته بندی : </label>
            </div>
            <div>
            {this.getCategoryFields(this.state.categoryId)}
            </div>
            <div className="button-wrappr">
            <button className="add-product-button" onClick={
                this.props.product ? this.handleEdit : this.handleSubmit
            }>
                {this.props.product ? 'اصلاح محصول' : 'ثبت محصول'}
            </button>
           </div>
            </form> 

            </div>  
<div className="form-div font-iran-sans">
<div className="form-head">
                   <br></br>
                    <h2>
                         اختصاص محصول به مشتری
                    </h2>
                    <br></br>
                </div>
<AssigneProductToCustomer />
<br></br>
</div>
</React.Fragment>
         );
    }
}
 
export default AddProduct;
