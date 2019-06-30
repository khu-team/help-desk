import React from 'react';
import AddProduct from '../Products/AddProduct';

const EditProduct = (props) => (
    <div>
        <AddProduct product={props.product}/>
    </div>
);

export default EditProduct;