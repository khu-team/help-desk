import React from 'react';
import CategoryRenderer from './CategoryRenderer';
import '../../products.css';
import {products} from "../../mockData/products";
import ProductItem from "./ProductItem";
import '../../products.css';

class ProductsList extends React.Component{

    render() {
        return (
            <div>
                <CategoryRenderer/>
            </div>
        );
    }
}

export default ProductsList;