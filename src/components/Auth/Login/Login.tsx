import React from 'react';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import Input from '@material-ui/core/Input'
import Logo from '../../../assets/images/logo.png';
import Google from '../../../assets/images/google.png';
import Facebook from '../../../assets/images/facebook.png';
import Phone from '../../../assets/images/phone.png';
import { Formik, Form, useField, FieldAttributes } from 'formik';
import { RoutePath } from '../../../routing/routes';
import { RouteUtils } from '../../../routing/route-utils';
import {authController} from "../../../controllers/auth.controller";


const TITLE = 'Sign In - Folk Choice';


const MyInputField: React.FC<FieldAttributes<{}>> = ({placeholder, type, ...props}) => {
    const [field, meta] = useField<{}>(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
    return (
        <Input placeholder={placeholder} {...field} type={type} error={!!errorText} className={'field'}/>
    )
};

const validationSchema = Yup.object({
    Email: Yup.string().email('Email is required').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Register: React.FC = () => {
    const history = useHistory();
    const navigateToRoute = (route: RoutePath) => {
        if (route) {
            history.push(RouteUtils.getUrl(route, null));
        }
    };
    return (
        <div className="container-fluid">
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div className="signin">
                <div className="navbar-brand">
                    <img src={Logo} alt="logo" className="name"/>FOLK CHOICE
                </div>
                <div className="container outer">
                    <div className="about">
                        <span>
                            Welcome to
                        </span>
                        <br/>
                        <strong>
                            FOLK CHOICE
                        </strong><br/>
                        <span className="text">about folk choice company</span>
                    </div>
                    <div className="inner">
                        <Formik
                            validateOnChange={true}
                            validationSchema={validationSchema}
                            initialValues={{email: '', password: ''}}
                            onSubmit={(data, {setSubmitting}) => {
                                setSubmitting(true);
                                console.log(data);
                                authController.login(data);
                                setSubmitting(false);
                            }}>
                            <Form>
                                <MyInputField name="Email" type="email" placeholder="E-mail"/>
                                <MyInputField name="password" type="password" placeholder="Password"/>
                                <div className="row forgot">
                                    <div className="col-md-6">
                                        Forgot Password ?
                                    </div>
                                    <div className="col-md-3">
                                        <Link to="/">
                                            <button type="submit" className="btn-login">Sign in</button>
                                        </Link>
                                    </div>
                                    <div className="col-md-3">
                                        <button onClick={() => navigateToRoute(RoutePath.register)} type="submit"
                                                className="btn-signin">Sign up
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                    <div className="text-center"><strong>or...</strong></div>
                    <div className="row buttons">
                        <div className="col-md-4">
                            <Link to="/">
                                <button type="submit" className="button google"><img src={Google} alt="Google"/><span><div>Sign in with</div> </span>Google
                                </button>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to="/">
                                <button type="submit" className="button facebook"><img src={Facebook}
                                                                                       alt="Facebook"/><span><div>Sign in with</div> </span>Facebook
                                </button>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to="/">
                                <button type="submit" className="button facebook"><img src={Phone} alt="Phone"/><span><div>Sign in with</div> </span>Phone
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Register;
