import React from 'react';
import {serverTypes} from "../../mockData/serverTypes";


class TypeRenderer extends React.Component {
    state = {
        type :0,
        products:[]
    };

    handleChange =name=>event =>{
        this.setState({[name]:event.target.value});
        const nproducts=this.props.products.filter((product) => product.type == this.state.type);
        this.setState({products:nproducts});

    };

    render() {
        return (
            <div>
                <div>
                    <select onChange={this.handleChange('type')}>
                        <option selected hidden>انتخاب</option>
                        {serverTypes.map((type)=>(<option value={type.id}>{type.name}</option>))}
                    </select>
                </div>
            </div>


        );
    }
}

export default TypeRenderer;