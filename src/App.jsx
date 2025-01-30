import React, { useEffect, useState } from 'react';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import { getAllProducts,deleteProduct } from './services/api';

const App = () => {
  const [products, setProducts] = useState([]);


  const fetchProducts = async () => {
    const fetchedProducts = await getAllProducts();
    setProducts(fetchedProducts);
  };

  
  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Product Store</h1>
      
     
      <ProductList products={products} onDelete={handleDeleteProduct}/>
  

      <AddProductForm onAddProduct={handleAddProduct} />
    </div>
  );
};

export default App;
