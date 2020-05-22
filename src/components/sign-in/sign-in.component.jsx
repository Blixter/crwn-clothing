import React, { useState } from "react";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [state, setState] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    setState({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setState((state) => ({ ...state, [name]: value }));
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={state.email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={state.password}
          required
          label="Password"
          handleChange={handleChange}
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {" "}
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
