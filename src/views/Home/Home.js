import React, {useEffect, useState} from "react";
import HomeBanner from "../../components/HomeBanner";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import NewArrivals from "../../components/Products/NewArrivals";
import BestSeller from "../../components/Products/BestSeller";
import Benefit from "../../components/Benefit";
import Advertisement from "../../components/Advertisement";
import clothingData from "../../data/clothingData.json"; // Simulated data import

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(clothingData.clothingData);
    }, []);

    const addToBag = (productId) => {
        console.log(`Product with ID ${productId} added to bag.`);
        // Add logic to handle adding to cart
    };

    return (
        <div>
            <HomeBanner slides={clothingData.slides}/>
            <CategoryBanner/>
            {products.length > 0 && <NewArrivals products={products} addToBag={addToBag}/>}
            <Benefit/>
            <Advertisement/>
            {products.length > 0 && <BestSeller products={products} addToBag={addToBag}/>}
        </div>
    );
};

export default Home;
