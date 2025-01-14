/*
 ** Mock API for E-commerce Application
 */

import clothingData from "../data/clothingData.json"; // Simulated product data

const mockAPI = (config) => {
    const { method, url, data } = config;

    // Simulated delay
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Simulate responses based on endpoint
    const routes = {
        GET: {
            "/products": async () => {
                await delay(500);
                return { data: { products: clothingData.clothingData } };
            },
            "/products/1": async () => {
                await delay(500);
                const product = clothingData.clothingData.find((p) => p.id === 1);
                return { data: { product } };
            },
            "/products?category=Bottoms": async () => {
                await delay(500);
                const products = clothingData.clothingData.filter((p) => p.category === "Bottoms");
                return { data: { products } };
            },
            "/products?category=Tops": async () => {
                await delay(500);
                const products = clothingData.clothingData.filter((p) => p.category === "Tops");
                return { data: { products } };
            },
        },
        POST: {
            "/users/cart": async () => {
                await delay(300);
                return { data: { message: "Cart updated successfully!" } };
            },
        },
    };

    const mockResponse = routes[method]?.[url];
    if (mockResponse) {
        return mockResponse();
    } else {
        return Promise.reject({ message: "Endpoint not found: " + url });
    }
};

export default mockAPI;
