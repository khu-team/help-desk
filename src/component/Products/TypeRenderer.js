import React from 'react';
import {products} from '../../mockData/products';
import {serverTypes} from "../../mockData/serverTypes";


class TypeRenderer extends React.Component {
    state = {
        type :0,
        products:[]
    };

    handleChange =name=>event =>{
        this.setState({[name]:event.target.value});
        const nproducts=products.filter((product) => product.type= this.state.type);
        this.setState({products:nproducts});

    };

    render() {
        return (
            <div>
                <div>
                    <select onChange={this.handleChange('type')}>
                        {serverTypes.map((type)=>(<option value={type.id}>{type.name}</option>))}
                    </select>
                </div>
            </div>


        );
    }
}

export default TypeRenderer;