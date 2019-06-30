import React from 'react'
const ProductInReact = (props) => {
    return ( 
        <React.Fragment>
        <li className=''>{props.product.name}<span><button className="" onClick={(e)=>props.handleDeleteProduct(e,props.product)}>Delete</button></span></li>
        </React.Fragment>
     );
}
 
export default ProductInReact;