import React from 'react';

// Define the array of products
const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
  { id: 2, name: "Smartphone", description: "Latest smartphone with advanced features.", price: 800 },
  { id: 3, name: "Headphones", description: "Noise-canceling headphones for immersive experience.", price: 150 },
  
];

// ProductList component responsible for rendering the list of products
const ProductList = () => {
  return (
    // Container for the list of products
    <div className="product-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {products.map(product => (
        // Individual product item
        <div key={product.id} className="product-item" style={{ border: '1px solid #ccc', padding: '10px' }}>
          <h2>{product.name}</h2> {/* Product name */}
          <p>{product.description}</p> {/* Product description */}
          <p>${product.price}</p> {/* Product price */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
