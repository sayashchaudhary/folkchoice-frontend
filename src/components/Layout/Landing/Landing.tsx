import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { GlobalProps } from '../../../App';


const Landing: React.FC<GlobalProps> = (props) => {
    console.log(props);
    const rootStore = props.store!;
    const userStore = rootStore.userStore;
    console.log('User store', userStore);
    return (
        <div className='landing-container'>
            <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
            <Link to="/login" className="btn btn-lg btn-light">Login </Link>
        </div>
    )
};


export default inject('store')(observer(Landing));
