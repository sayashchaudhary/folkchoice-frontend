import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { rootStore, RootStore } from './stores/root.store';
import { Provider } from 'mobx-react';
import { RootRouting } from './routing/route-components/root-routing';

export interface GlobalProps {
    store?: RootStore;
}

const App: React.FC = () => {
    return (
        <Provider store={rootStore}>
            <Router>
                <RootRouting/>
            </Router>
        </Provider>

    );
};

export default App;
