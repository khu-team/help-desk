import React from 'react';
import CategoryRenderer from './CategoryRenderer';
import '../../products.css';


class ProductsList extends React.Component{


    render() {
        return (
            <div>
                <div className="welcome">
                    <CategoryRenderer/>
                </div>
            </div>
        );
    }
}

export default ProductsList;