import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/signup/SignUp';

import './sign-in-sign-up.styles.scss';

const SigninAndSignOut = () => (
  <div className="sign-in-and-sign-out">
    <SignIn />
    <SignUp />
  </div>
);

export default SigninAndSignOut;
