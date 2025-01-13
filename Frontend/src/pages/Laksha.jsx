import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import cover from '../assets/images/hcover.png';
import axios from 'axios';
// Change to the appropriate cover image for Laksha Works

const LakshaWorks = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getproducts');
        // Filter products by the "laksha" category
        const lakshaProducts = response.data.filter(product => product.category === 'laksha');
        setProducts(lakshaProducts);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="product1" className="max-w-screen-xl mx-4 text-center py-7 md:mx-8 lg:mx-16">
      <div className="w-full mb-8">
        <img src={cover} alt="Laksha Works Cover" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <h2 className="mb-8 text-4xl font-bold">-Laksha Works-</h2>
      <div className="flex flex-wrap justify-between gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            brand={product.b_name} // Using brand name from the product schema
            title={product.p_name}  // Using product name from the schema
            price={product.old_price-product.new_price} // Displaying new price
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default LakshaWorks;
