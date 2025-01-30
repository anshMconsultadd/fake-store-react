import React from 'react';
import ProductCard from './ProductCard'; 

const ProductList = ({ products ,onDelete}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} deleteP={onDelete}/>
      ))}
    </div>
  );
};

export default ProductList;
