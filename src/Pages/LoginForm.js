import React, { useState } from "react";
import useInput from "../components/hooks/UseInput.js";

import {
  StyledFormGroup,
  StyledForgetPassword,
  StyledDiv,
} from "./PagesStyled.ts";
import Label from "../components/UI/Label.js";
import Input from "../components/UI/Input.js";
import Icon from "../components/UI/Icon.js";
import Button from "../components/UI/Button.js";
import Layout from "../components/UI/Layout.js";
import ErrorText from "../components/UI/ErrorText.js";

const LoginForm = () => {
  const [isVisible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!isVisible);
  };
  const isNotEmpty = (value) => value.trim() !== "";
  const {
    value: enteredUsername,
    hasError: usernameHasError,
    valueChangeHandler: userNameChangeHandler,
    valueBlurHandler: usernameBlurHandler,
    isValid: userNameIsValid,
    reset: resetUsername,
  } = useInput(isNotEmpty);

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    isValid: passwordIsValid,
    reset: resetPassword,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (userNameIsValid && passwordIsValid) {
    formIsValid = true;
  }
  const loginHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredPassword);
    resetUsername();
    resetPassword();
  };

  return (
    <Layout header="ورود به حساب کاربری">
      <form onSubmit={loginHandler}>
        <StyledFormGroup>
          <Label $valid={!usernameHasError} htmlFor="username">
            نام کاربری *
          </Label>
          <Icon>
            <i class="fa fa-user-o" aria-hidden="true"></i>
          </Icon>
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
          <Label $valid={!passwordHasError} htmlFor="password">
            رمز عبور *
          </Label>
          <Icon>
            {isVisible ? (
              <i class="fa-regular fa-eye" onClick={toggle}></i>
            ) : (
              <i
                class="fa fa-eye-slash"
                aria-hidden="true"
                onClick={toggle}
              ></i>
            )}
          </Icon>
          <Input
            $valid={!passwordHasError}
            type={!isVisible ? "password" : "text"}
            id="password"
            placeholder="Password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          <StyledDiv>
            <StyledForgetPassword href="#">
              فراموشی رمز عبور
            </StyledForgetPassword>
            {passwordHasError && <ErrorText>پسورد الزامی می باشد</ErrorText>}
          </StyledDiv>
        </StyledFormGroup>
        <Button disabled={!formIsValid}>ورود</Button>
      </form>
    </Layout>
  );
};

export default LoginForm;
