import React from 'react';
import {inject, observer} from 'mobx-react';
import {GlobalProps} from '../../App';
import Navbar from '../Shared/Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Shared/Footer/Footer'
import Slider from '../Carousel/Carousel';


const Landing: React.FC<GlobalProps> = (props) => {
    console.log(props);
    const rootStore = props.store!;
    const userStore = rootStore.userStore;
    console.log('User store', userStore);
    return (
        <div>
            <Navbar/>
            <div className="landing-container">
                <Slider/>
                <Dashboard/>
                <Footer/>
            </div>
        </div>
    )
};


export default inject('store')(observer(Landing));
