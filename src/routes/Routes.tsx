import React from 'react';
import { Route } from 'react-router-dom';
import { RoutesType } from 'routes/types';

type RoutesProps = {
    routes: RoutesType;
};

export default (props: RoutesProps): React.FunctionComponentElement<Route> => {
    const routes = props.routes.map(({ path, component: Component, ...rest }, key) => {
        return <Route 
                    key={key} 
                    path={path} 
                    render={props => <Component {...props} />} 
                    {...rest} 
                />;
    });

    return <React.Fragment>{routes}</React.Fragment>;
};
