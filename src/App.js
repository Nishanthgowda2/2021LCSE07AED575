// src/App.js
import React, { useState } from 'react';
import ProductsList from './components/ProductList';
import ProductDetail from './components/ProductDetails';
import './App.css';

function App() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductSelect = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div className="App">
            <h1>Top Products</h1>
            <ProductsList onSelectProduct={handleProductSelect} />
            <ProductDetail product={selectedProduct} />
        </div>
    );
}

export default App;

