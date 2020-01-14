import React, {Suspense} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Landing from "./Components/Layout/Landing";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
            <Route exact path='/' component={Landing}/>
            <Switch>
                <Route exact path='/login'
                       render={() => <Suspense fallback={<div>Loading...</div>}><Login /></Suspense>}/>
                <Route path='/register' component={Register}/>
            </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
