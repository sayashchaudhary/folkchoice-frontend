import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect, Route, withRouter } from 'react-router';

const ProtectedRoutes: React.FC<any> = ({ component: Component, ...rest }) => {
    const appStore = rest.store.appStore;

    if (!appStore.isLoggedIn) {

        const redirectUrl = rest.location.pathname;

        console.log(redirectUrl);

        appStore.setRedirectUrl(redirectUrl);
        return <Route {...rest}> <Redirect to='/login'/></Route>;
    } else {
        return <Route {...rest} render={(props) => <Component{...rest}/>}/>
    }
};

export default inject('store')(observer(withRouter(ProtectedRoutes)));

