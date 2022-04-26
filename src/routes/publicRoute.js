import React, { Suspense, lazy, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import route from '../shared/constants/route_list';
import { Loader } from 'rsuite';
import { AuthContext } from "../context/auth/auth_context";


const LoginPage = lazy(() => import('../pages/login/'));
const PrivateRouter = lazy(() => import('./privateRoute'));

const Loading = () => {
    return (
        <div className="h-screen">
            <div className="w-full h-full flex justify-center items-center ">
                <Loader backdrop size="lg" content="loading..." vertical />
            </div>
        </div>
    );
};

const AppRouter = () => {
    const authContext = useContext(AuthContext);
    const isAuthenticated = authContext.isAuthenticate; 
    // const isAuthenticated = true;

    const checkIsAuthenticated = (component) => {
        if (isAuthenticated) return <Navigate to={route.HOME} />;
        else return component;
    };

    const checkPrivateRoute = () => {
        if (isAuthenticated) return <PrivateRouter />;
        else return <Navigate to={route.LOGIN} />;
    };

    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path={route.LOGIN}
                        element={checkIsAuthenticated(<LoginPage />)}
                    />
                    <Route
                        path="*"
                        element={checkPrivateRoute()}
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRouter;
