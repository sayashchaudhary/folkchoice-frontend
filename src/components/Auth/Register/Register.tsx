import React from 'react';
import Input from '@material-ui/core/Input';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Logo from '../../../assets/images/logo.png';

const Register: React.FC = () => {
    return (
        <Formik
            initialValues={{
                yourName: '',
                email: '',
                password: '',
                confirmPassword: '',
                contactNumber: ''
            }}
            validationSchema={Yup.object().shape({
                yourName: Yup.string()
                    .required('First Name is required'),
                email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                password: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .required('Password is required'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm Password is required'),
                contactNumber: Yup.string()
                    .min(10, 'Contact number should be at least 10 digits')
                    .required('Contact number is required')
            })}
            onSubmit={fields => {
                alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
            }}
            render={({errors, status, touched}) => (
                <Form>
                    <div className='container-fluid'>
                        <div className='background'/>
                        <div className='outer-card'>
                            <img src={Logo} alt="logo" className="logo"/>
                            <div className='inner-card'>
                                <div className="form-group">
                                    <Input name="firstName" type="text" placeholder="First Name"
                                           className={'form-control' + (errors.yourName && touched.yourName ? ' is-invalid' : '')}/>
                                    <ErrorMessage name="yourName" component="div" className="invalid-feedback"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Field name="email" type="text"
                                           className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}/>
                                    <ErrorMessage name="email" component="div" className="invalid-feedback"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Field name="password" type="password"
                                           className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}/>
                                    <ErrorMessage name="password" component="div" className="invalid-feedback"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <Field name="confirmPassword" type="password"
                                           className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')}/>
                                    <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contactNumber">Contact Number</label>
                                    <Field name="contactNumber" type="number"
                                           className={'form-control' + (errors.contactNumber && touched.contactNumber ? ' is-invalid' : '')}/>
                                    <ErrorMessage name="contactNumber" component="div" className="invalid-feedback"/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary mr-2">Register</button>
                                    <button type="reset" className="btn btn-secondary">Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        />
    )
};

export default Register;
