import React from 'react';
import {serverTypes} from "../../mockData/serverTypes";
import ProductTable from "./ProductTable";


class TypeRenderer extends React.Component {
    state = {
        type :0,
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
                    <ProductTable data={this.state.products}/>
                </div>
            </div>


        );
    }
}

export default TypeRenderer;