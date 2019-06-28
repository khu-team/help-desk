import React from 'react';
import {products} from "../../mockData/products";
import '../../products.css';

class ProductDetail extends React.Component {

    ShowDetail=()=> {
        const ID = this.props.location.state.ID
        const nproduct=products.find((p)=> p.id == ID)
        const {id,name,price,category}=nproduct;

        return(
            <ul className='font-iran-sans'>
                <li>آیدی:{id}</li>
                <li>نام:{name}</li>
                <li>قیمت:{price}</li>
                <li>کتگوری:{category}</li>
            </ul>
        )
    }


    render() {
        return (
            <div>
                {this.ShowDetail()}
            </div>
        );
    }
}

export default ProductDetail;