import React from 'react';
import { inject, observer } from 'mobx-react';
import { GlobalProps } from '../../../App';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Footer/Footer'


const Landing: React.FC<GlobalProps> = (props) => {
    console.log(props);
    const rootStore = props.store!;
    const userStore = rootStore.userStore;
    console.log('User store', userStore);
    return (
        <div className='landing-container'>
            <Navbar />
            <Dashboard />
            <Footer />
        </div>
    )
};


export default inject('store')(observer(Landing));
