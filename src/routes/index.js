import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { registerNav } from "../modules/Navigation";
import PageNotFound from "../views/PageNotFound";
import HomeRoutes from "./HomeRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Auth from "../modules/Auth";

const RequireAuth = ({ children }) => {
    const isAuthenticated =
        Auth.getUserDetails() !== undefined &&
        Auth.getUserDetails() !== null &&
        Auth.getToken() !== undefined;

    return isAuthenticated ? children : <Navigate to="/PageNotFound" replace />;
};

const RoutesComponent = () => {
    return (
        <Router ref={registerNav}>
            <Routes>
                {/* Home Routes */}
                {HomeRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}

                {/* Private Routes */}
                {PrivateRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<RequireAuth>{route.element}</RequireAuth>}
                    />
                ))}

                {/* Page Not Found */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
};

export default RoutesComponent;
