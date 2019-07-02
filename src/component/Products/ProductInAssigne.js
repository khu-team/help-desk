import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
const ProductInReact = (props) => {
    return ( 
        <React.Fragment>
        <li className=''>{props.product.name}<span>
                        <IconButton className="assign-delete-button" onClick={(e)=>props.handleDeleteProduct(e,props.product)} edge="end" aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
            
            </span></li>
        </React.Fragment>
     );
}
 
export default ProductInReact;