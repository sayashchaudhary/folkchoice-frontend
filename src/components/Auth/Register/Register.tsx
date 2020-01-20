import React from 'react';
import {Helmet} from 'react-helmet';
import * as Yup from 'yup';
import Input from '@material-ui/core/Input'
import Radio from '@material-ui/core/Radio'
import Logo from '../../../assets/images/logo.png';
import {FormControlLabel} from '@material-ui/core';
import {Formik, Form, useField, FieldAttributes} from 'formik';

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
    Name: Yup.string().required('First Name is required'),
    Email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    cnfPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    phoneNo: Yup.number().min(10, 'Contact number should be at least 10 digits').required('Contact number is required'),
    gender: Yup.string().required('Gender is required')
});

const Register: React.FC = () => {
    return (
        <div className="container-fluid">
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div className="signup">
                <div className="background" />
                <div className="outer-card">
                    <img src={Logo} alt="logo" className="logo"/>
                    <div className="text-center company"><i>FOLK CHOICE</i></div>
                    <div className="inner-card">
                        <Formik
                            validateOnChange={true}
                            validationSchema={validationSchema}
                            initialValues={{
                                Name: "",
                                Email: "",
                                password: "",
                                cnfPassword: "",
                                phoneNo: "",
                                gender: ""
                            }}
                            onSubmit={(data, {setSubmitting}) => {
                                setSubmitting(true);
                                console.log(data);
                                setSubmitting(false);
                            }}>
                            <Form>
                                <MyInputField name="Name" type="text" placeholder="Your Name"/>
                                <MyInputField name="Email" type="email" placeholder="E-mail"/>
                                <MyInputField name="password" type="password" placeholder="Password"/>
                                <MyInputField name="cnfPassword" type="password" placeholder="Confirm Password"/>
                                <MyInputField name="phoneNo" type="input" placeholder="Phone Number"/>
                                <label className="gender">Gender:</label>
                                <MyRadio name="gender" type="radio" value="male" label="Male"/>
                                <MyRadio name="gender" type="radio" value="female" label="Female"/>
                                <button type="submit" className="btn btn-submit">Submit</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Register;
