import React from 'react';
import {serverTypes} from "../../mockData/serverTypes";
import ProductTable from "./ProductTable";
import ProductItem from "./ProductItem";


class TypeRenderer extends React.Component {
    state = {
        products:[]
    };

    handleChange = name => event => {
        const fproducts = this.props.products.filter((product) => product.type == event.target.value);
        this.setState({products:fproducts})
    };

    render() {
        return (
            <div>
                <div>
                    <select onChange={this.handleChange('type')}>
                        <option selected hidden>انتخاب</option>
                        {serverTypes.map((type)=>(<option value={type.id}>{type.name}</option>))}
                    </select>
                    {this.state.products.length > 0 && <ProductItem data={this.state.products}/>}
                </div>
            </div>


        );
    }
}

export default TypeRenderer;