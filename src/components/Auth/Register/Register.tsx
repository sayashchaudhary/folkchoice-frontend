import React from 'react';
import Logo from '../../../assets/images/logo.png';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const Register: React.FC = () => {
  return (   
    <div className='container-fluid'>
        <div className="neuromorphism"></div>
        <div className="neuromorphism-1">
            <img src={Logo}  alt="logo" className="logo" ></img>
            <div className="neuromorphism-2">
              <div className="register_form">
                <FormControl>
                  <Input placeholder="Your Name" className="input" type="text" />
                  <Input placeholder="E-mail" className="input" type="email" />
                  <Input placeholder="Password" className="input" type="password" />
                  <Input placeholder="Confirm Password" className="input" type="password" />
                  <Input placeholder="Contact Number" className="input" type="number" />
                  <label className="input">Gender</label>
                  <RadioGroup aria-label="position" name="position" row>
                    <FormControlLabel
                      value="gender"
                      control={<Radio color="primary" />}
                      label="Male"
                      labelPlacement="end"
                      className="input1"
                    />  
                    <FormControlLabel
                      value="gender1"
                      control={<Radio color="primary" />}
                      label="Female"
                      labelPlacement="end"
                      className="input1"
                    />
                  </RadioGroup>
                  <button type="submit" className="submit" value="Submit">Submit</button>
                </FormControl>
              </div>      
            <div>
          </div>
       </div>
      </div>
    </div>
  );  
}

export default Register;