// src/components/ProductsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"];

function ProductsList({ onSelectProduct }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCompany, setSelectedCompany] = useState(companies[0]);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://20.244.56.144/test/companies/${selectedCompany}/categories/${selectedCategory}/products`, {
                    params: {
                        top: 10,
                        minPrice: 1,
                        maxPrice: 10000
                    }
                });
                setProducts(response.data);
            } catch (error) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [selectedCompany, selectedCategory]);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <div className="filters">
                <label>
                    Company:
                    <select value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
                        {companies.map(company => (
                            <option key={company} value={company}>{company}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Category:
                    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </label>
            </div>

            <div className="product-list">
                {products.map((product, index) => (
                    <div key={index} className="product-card" onClick={() => onSelectProduct(product)}>
                        <img src={`https://via.placeholder.com/150?text=${product.productName}`} alt={product.productName} />
                        <h2>{product.productName}</h2>
                        <p>Price: ${product.price}</p>
                        <p>Rating: {product.rating}</p>
                        <p>Discount: {product.discount}%</p>
                        <p>Availability: {product.availability}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsList;
