import React from 'react';
import { products } from '../../mockData/products';

const ProductRenderer = (props) => {
	const product = (products.find((product) => product.id === props.productId));
	return (<td>{product.name}</td>);
}

export default ProductRenderer;

