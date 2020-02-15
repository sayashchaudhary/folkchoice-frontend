import React from 'react';
import {Helmet} from 'react-helmet';
import * as Yup from 'yup';
import Input from '@material-ui/core/Input'
import Radio from '@material-ui/core/Radio'
import Logo from '../../../assets/images/logo.png';
import {FormControlLabel} from '@material-ui/core';
import {Formik, Form, useField, FieldAttributes} from 'formik';
import {authController} from '../../../controllers/auth.controller';

const TITLE = 'Sign Up - Folk Choice';

type MyRadioProps = { label: string } & FieldAttributes<{}>

const MyRadio: React.FC<MyRadioProps> = ({label, ...props}) => {
    const [field] = useField(props);

    return (
        <FormControlLabel {...field} control={<Radio/>} label={label} className={"input1"}/>
    )
};


const MyInputField: React.FC<FieldAttributes<{}>> = ({placeholder, type, ...props}) => {
    const [field, meta] = useField<{}>(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
    return (
        <Input placeholder={placeholder} {...field} type={type} error={!!errorText} className={"input"}/>
    )
};

const validationSchema = Yup.object({
    name: Yup.string().required('First Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    cnfPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    phoneNo: Yup.string().min(10, 'Contact number should be at least 10 digits').required('Contact number is required'),
    gender: Yup.string().required('Gender is required')
});

const Register: React.FC = () => {
    return (
        <div className="container-fluid">
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div className="signup">
                <div className="background"/>
                <div className="container outer-card">
                    <img src={Logo} alt="logo" className="logo"/>
                    <div className="company text-center">FOLK CHOICE</div>
                    <div className="inner-card">
                        <Formik
                            validateOnChange={true}
                            validationSchema={validationSchema}
                            initialValues={{
                                name: "",
                                email: "",
                                password: "",
                                cnfPassword: "",
                                phoneNo: "",
                                gender: ""
                            }}
                            onSubmit={(data, {setSubmitting}) => {
                                setSubmitting(true);
                                // console.log(data);
                                authController.register(data);
                                setSubmitting(false);
                            }}>
                            <Form>
                                <MyInputField name="name" type="text" placeholder="Your Name"/>
                                <MyInputField name="email" type="email" placeholder="E-mail"/>
                                <MyInputField name="password" type="password" placeholder="Password"/>
                                <MyInputField name="cnfPassword" type="password" placeholder="Confirm Password"/>
                                <MyInputField name="phoneNo" type="input" placeholder="Phone Number"/>
                                <div className="row text-center">
                                    <div className="col-md-4">
                                        <label className="gender">Gender:</label>
                                    </div>
                                    <div className="col-md-4">
                                        <MyRadio name="gender" type="radio" value="male" label="Male"/>
                                    </div>
                                    <div className="col-md-4">
                                        <MyRadio name="gender" type="radio" value="female" label="Female"/>
                                    </div>
                                    <button type="submit" className="btn btn-submit">Submit</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Register;
