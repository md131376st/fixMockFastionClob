import React, { Component } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { registerNav } from "../modules/Navigation";
import PageNotFound from "../views/PageNotFound";
import HomeRoutes from "./HomeRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Auth from "../modules/Auth";

// RequireAuth Component for Private Routes
const RequireAuth = ({ children }) => {
    const isAuthenticated =
        Auth.getUserDetails() !== undefined &&
        Auth.getUserDetails() !== null &&
        Auth.getToken() !== undefined;

    return isAuthenticated ? children : <Navigate to="/PageNotFound" replace />;
};

class RoutesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Router ref={registerNav}>
                    <Routes>
                        {/* Home Routes */}
                        {HomeRoutes.map((homeRoute, index) => (
                            <Route
                                key={index}
                                path={homeRoute.path}
                                element={
                                    <homeRoute.layout>
                                        <homeRoute.component />
                                    </homeRoute.layout>
                                }
                            />
                        ))}

                        {/* Private Routes */}
                        {PrivateRoutes.map((privateRoute, index) => (
                            <Route
                                key={index}
                                path={privateRoute.path}
                                element={
                                    <RequireAuth>
                                        <privateRoute.layout>
                                            <privateRoute.component />
                                        </privateRoute.layout>
                                    </RequireAuth>
                                }
                            />
                        ))}

                        {/* Page Not Found */}
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default RoutesComponent;
