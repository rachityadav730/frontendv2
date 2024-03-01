import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import * as ROUTES from '../constants/routers';
import * as view from '../view';
import { Navigation } from '../component/common';
export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <>
            <Navigation />
            <Routes>
                <Route path={ROUTES.DASHBOARD} element={<view.Dashboard />} />
                <Route path={ROUTES.SIGNUP} element={<view.SignUp />} />
                <Route path={ROUTES.SIGNIN} element={<view.SignIn />} />
                <Route path={ROUTES.SIGNOUT} element={<view.SignOut />} />
            </Routes>
        </>
    </Router>
)


export default AppRouter;
