import React from 'react';
import {serverTypes} from "../../mockData/serverTypes";
import SortByPrice from "./SortByPrice";


class TypeRenderer extends React.Component {
    state = {
        products: this.props.products
    };

    handleChange = name => event => {
        const fproducts = this.props.products.filter((product) => product.type == event.target.value);
        this.setState({products:fproducts})
    };

    render() {
        return (
            <div>
                <div>
                    <select onChange={this.handleChange('type')} className='font-iran-sans select-show-renderer'>
                        <option selected hidden>انتخاب</option>
                        {serverTypes.map((type)=>(<option value={type.id}>{type.name}</option>))}
                    </select>
                    <SortByPrice products={this.state.products}/>
                </div>
            </div>


        );
    }
}

export default TypeRenderer;