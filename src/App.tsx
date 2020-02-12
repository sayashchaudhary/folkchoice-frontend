import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import {rootStore, RootStore} from './stores/root.store';
import {Provider} from 'mobx-react';
import {RootRouting} from './routing/route-components/root-routing';
import dotenv from "dotenv";

dotenv.config({path: ".env"});

export interface GlobalProps {
    store?: RootStore;
}

const App: React.FC = () => {
    console.log(process.env.NAME);
    return (
        <Provider store={rootStore}>
            <Router>
                <RootRouting></RootRouting>
            </Router>
        </Provider>

    );
};

export default App;
