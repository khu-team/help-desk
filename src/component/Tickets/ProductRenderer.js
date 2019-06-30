import React from 'react';
import { products } from '../../mockData/products';

const ProductRenderer = (props) => {
	const product = (products.find((product) => product.id === props.productId));
	return (<td className="column5">{product.name}</td>);
}

export default ProductRenderer;

