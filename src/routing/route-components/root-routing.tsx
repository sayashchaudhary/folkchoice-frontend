import React from 'react';
import { GlobalProps } from '../../App';
import { Redirect, Route, Switch } from 'react-router';
import Login from '../../components/Auth/Login/Login';
import Register from '../../components/Auth/Register/Register';
import Landing from '../../components/Layout/Landing/Landing';
import { RouteUtils } from '../route-utils';
import { RoutePath } from '../routes';

export const RootRouting: React.FC<GlobalProps> = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Redirect to={RouteUtils.getPath(RoutePath.home)}/>
            </Route>
            <Route path={RouteUtils.getPath(RoutePath.login)}>
                <Login/>
            </Route>
            <Route path={RouteUtils.getPath(RoutePath.register)}>
                <Register/>
            </Route>
            <Route path={RouteUtils.getPath(RoutePath.home)}>
                <Landing/>
            </Route>
        </Switch>
    );
};