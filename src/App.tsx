import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Layout/Landing/Landing';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Landing/>
                </Route>
                <Route path='/login'>
                    <Login/>
                </Route>
                <Route path='/register'>
                    <Register/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
