import React from 'react';
import ProductInAssigne from './ProductInAssigne'
const ProductsInAssigne = (props) => {
    return ( 
        props.products.map(product=>
            <React.Fragment key={product.id}>
                <ProductInAssigne handleDeleteProduct={props.handleDeleteProduct} product={product}/>
            </React.Fragment>)
     );
}
 
export default ProductsInAssigne;