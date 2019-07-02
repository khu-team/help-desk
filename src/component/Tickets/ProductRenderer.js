import React from 'react';
import { products } from '../../mockData/products';

const ProductRenderer = (props) => {
	const product = (products.find((product) => product.id === props.productId));
	return (<td className="column5 font-iran-sans">{product.name}</td>);
}

export default ProductRenderer;

