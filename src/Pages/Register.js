import React from "react";
import useInput from "../components/hooks/UseInput.js";

import { StyledFormGroup } from "./PagesStyled.ts";
import Label from "../components/UI/Label.js";
import Input from "../components/UI/Input.js";
import Button from "../components/UI/Button.js";
import Layout from "../components/UI/Layout.js";
import ErrorText from "../components/UI/ErrorText.js";

const LoginForm = () => {
  const isNotEmpty = (value) => value.trim() !== "";
  const emaileFormat = (value) => value.trim().includes("@");
  const validEmail = isNotEmpty && emaileFormat;
  const {
    value: enteredUsername,
    hasError: usernameHasError,
    valueChangeHandler: userNameChangeHandler,
    valueBlurHandler: usernameBlurHandler,
    isValid: userNameIsValid,
    reset: resetUsername,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    isValid: emailIsValid,
    reset: resetEmail,
  } = useInput(validEmail);

  let formIsValid = false;
  if (userNameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const signupHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredEmail);
    resetUsername();
    resetEmail();
  };

  return (
    <Layout header="ثبت نام">
      <form onSubmit={signupHandler}>
        <StyledFormGroup>
          <Label $valid={!usernameHasError} htmlFor="username">
            نام کاربری *
          </Label>
          <Input
            $valid={!usernameHasError}
            type="text"
            id="username"
            placeholder="Username"
            value={enteredUsername}
            onChange={userNameChangeHandler}
            onBlur={usernameBlurHandler}
          />
          {usernameHasError && <ErrorText>نام کاربری الزامی می باشد</ErrorText>}
        </StyledFormGroup>

        <StyledFormGroup>
          <Label $valid={!emailHasError} htmlFor="email">
            ایمیل *
          </Label>
          <Input
            $valid={!emailHasError}
            type="email"
            id="email"
            placeholder="Email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && <ErrorText>ایمیل باید شامل @ باشد</ErrorText>}
        </StyledFormGroup>
        <Button disabled={!formIsValid}>ثبت نام</Button>
      </form>
    </Layout>
  );
};

export default LoginForm;
