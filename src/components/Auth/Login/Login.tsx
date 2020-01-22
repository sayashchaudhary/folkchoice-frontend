import React from 'react';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input'
import Logo from '../../../assets/images/logo.png';
import Google from '../../../assets/images/google.png';
import Facebook from '../../../assets/images/facebook.png';
import Phone from '../../../assets/images/phone.png';
import { Formik, Form, useField, FieldAttributes } from 'formik';

const TITLE = 'Sign In - Folk Choice';


const MyInputField: React.FC<FieldAttributes<{}>> = ({ placeholder, type, ...props }) => {
    const [field, meta] = useField<{}>(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
    return (
        <Input placeholder={placeholder} {...field} type={type} error={!!errorText} className={'input'}/>
    )
};

const validationSchema = Yup.object({
    Email: Yup.string().email('Email is required').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Register: React.FC = () => {
    return (
        <div className="container-fluid">
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div className="signin">
                <div className="navbar-brand">
                    <img src={Logo} alt="logo" className="name"/>FOLK CHOICE
                </div>
                <div className="outer">
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
                            initialValues={{ Email: '', password: '' }}
                            onSubmit={(data, { setSubmitting }) => {
                                setSubmitting(true);
                                console.log(data);
                                setSubmitting(false);
                            }}>
                            <Form>
                                <MyInputField name="Email" type="email" placeholder="E-mail"/>
                                <MyInputField name="password" type="password" placeholder="Password"/>
                                <div className="forgot">
                                    Forgot Password ?
                                    <Link to="/">
                                        <button type="submit" className="btn-login">Sign in</button>
                                    </Link>
                                    <Link to="/register">
                                        <button type="submit" className="btn-signin">Sign up</button>
                                    </Link>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                    <div className="text-center"><strong>or...</strong></div>
                    <div className="buttons">
                        <Link to="/">
                            <button type="submit" className="button google"><img src={Google} alt="Google"/><span><div>Sign in with</div> </span>Google
                            </button>
                        </Link>
                        <Link to="/">
                            <button type="submit" className="button facebook"><img src={Facebook} alt="Facebook"/><span><div>Sign in with</div> </span>Facebook
                            </button>
                        </Link>
                        <Link to="/">
                            <button type="submit" className="button facebook"><img src={Phone} alt="Phone"/><span><div>Sign in with</div> </span>Phone
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Register;
