import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import route from '../shared/constants/route_list';
import { Loader } from 'rsuite';
import PageLayout from '../components/layout/PageLayout';


const HomePage = lazy(() => import('../pages/home/'));
const ManagementPage = lazy(() => import('../pages/management/'));


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
    return (
        <PageLayout>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path={route.HOME} element={<HomePage />} />
                    <Route path={route.MANAGEMENT} element={<ManagementPage />} />
                </Routes>
            </Suspense>
        </PageLayout>
    )
}

export default AppRouter;
