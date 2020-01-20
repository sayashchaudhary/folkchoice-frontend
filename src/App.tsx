import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Layout/Landing/Landing';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';
import { rootStore, RootStore } from './stores/root.store';
import { Provider } from 'mobx-react';

export interface GlobalProps {
    store?: RootStore;
}

const App: React.FC = () => {
    return (
        <Provider store={rootStore}>
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
        </Provider>

    );
};

export default App;
