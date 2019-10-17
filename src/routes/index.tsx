import React from 'react';
import { Router } from 'react-router-dom';

// types
import { RoutesType } from 'routes/types';
// pages
import LoginPage from 'pages/LoginPage';
import Routes from 'routes/Routes';
// config
import { history } from 'config';

const routes: RoutesType = [
    { path: '/', component: LoginPage },
    { path: '/login', component: LoginPage }
];

export default (): React.FunctionComponentElement<any> => (
    <Router history={history}>
        <Routes routes={routes} />
    </Router>
);
