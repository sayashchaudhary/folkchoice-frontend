import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect, Route, withRouter } from 'react-router';

const AuthRoutes: React.FC<any> = ({ component: Component, ...rest }) => {
    const appStore = rest.store.appStore;

    if (appStore.isLoggedIn) {
        return <Route {...rest}> <Redirect to='/dashboard'/></Route>;
    } else {
        return <Route {...rest} render={(props) => <Component{...rest}/>}/>
    }
};

export default inject('store')(observer(withRouter(AuthRoutes)));

