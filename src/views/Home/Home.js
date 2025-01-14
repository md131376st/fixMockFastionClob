import React, { useState, useEffect } from "react";
import HomeBanner from "../../components/HomeBanner";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import NewArrivals from "../../components/Products/NewArrivals";
import BestSeller from "../../components/Products/BestSeller";
import Benefit from "../../components/Benefit";
import Advertisement from "../../components/Advertisement";
import clothingData from "../../data/clothingData.json"; // Import JSON data

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data from JSON
    setProducts(clothingData.clothingData);
  }, []);

  return (
      <div>
        <HomeBanner />
        <CategoryBanner />
        {products.length > 0 && (
            <NewArrivals products={products} />
        )}
        <Benefit />
        <Advertisement />
        {products.length > 0 && (
            <BestSeller products={products} />
        )}
      </div>
  );
};

export default Home;
