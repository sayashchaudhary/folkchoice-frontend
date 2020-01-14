import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from "./Components/Layout/Landing";
import lazyLoader from "./HOC/LazyLoader";
import './App.css';

const Login = React.lazy(() => import('./Components/Auth/Login'));
const AsyncRegister = lazyLoader(() => import('./Components/Auth/Register'));

const App: React.FC = () => {
    return (
        <div className="App">
            <Route exact path='/' component={Landing}/>
            <Switch>
                <Route exact path='/login'
                       render={() => <Suspense fallback={<div>Loading...</div>}><Login/></Suspense>}/>
                <Route path='/register' component={AsyncRegister}/>
            </Switch>
        </div>
    );
};

export default App;
