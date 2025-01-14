/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import Auth from "../modules/Auth";
import axios from "axios";

// Base URL configuration
const BASE_URL = "http://localhost:3000";

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Set a timeout for requests
});

// Add request interceptor for adding headers
axiosInstance.interceptors.request.use((config) => {
  const token = Auth.getToken();
  if (token) {
    config.headers.authorization = token;
  }
  return config;
});

// Add response interceptor for handling errors
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response) {
        // Handle network errors
        error.response = {
          data: "Network error. Please check your connection.",
          status: 500,
        };
      }

      if (error.response.status === 401) {
        // Handle unauthorized responses
        Auth.logout();
        // Optionally redirect to login
        // jumpTo("/login");
      }

      return Promise.reject(error);
    }
);

// API wrapper
const API = (config) => {
  return axiosInstance(config);
};

export default API;
