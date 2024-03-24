import React, { useState } from "react";
import useInput from "../hooks/UseInput.js";

import {
  StyledButton,
  StyledFormGroup,
  StyledHeading,
  StyledInput,
  StyledLabel,
  StyledMain,
  Styledicon,
  StyledErrorText,
  StyledForgetLink,
  StyledParent,
} from "./LoginFormStyled.ts";

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
    <StyledMain>
      <section>
        <StyledHeading>ورود به حساب کاربری</StyledHeading>
        <form onSubmit={loginHandler}>
          <StyledFormGroup>
            {usernameHasError ? (
              <StyledLabel htmlFor="username">نام کاربری *</StyledLabel>
            ) : (
              <StyledLabel $valid htmlFor="username">
                نام کاربری *
              </StyledLabel>
            )}
            <Styledicon>
              <i class="fa fa-user-o" aria-hidden="true"></i>
            </Styledicon>
            {usernameHasError ? (
              <StyledInput
                type="text"
                id="username"
                placeholder="Username"
                value={enteredUsername}
                onChange={userNameChangeHandler}
                onBlur={usernameBlurHandler}
                required
              ></StyledInput>
            ) : (
              <StyledInput
                $valid
                type="text"
                id="username"
                placeholder="Username"
                value={enteredUsername}
                onChange={userNameChangeHandler}
                onBlur={usernameBlurHandler}
                required
              ></StyledInput>
            )}
            {usernameHasError && (
              <StyledErrorText>نام کاربری الزامی می باشد</StyledErrorText>
            )}
          </StyledFormGroup>
          <StyledFormGroup>
            {passwordHasError ? (
              <StyledLabel htmlFor="password">رمز عبور *</StyledLabel>
            ) : (
              <StyledLabel $valid htmlFor="password">
                رمز عبور *
              </StyledLabel>
            )}
            <Styledicon href="#">
              {isVisible ? (
                <i class="fa-regular fa-eye" onClick={toggle}></i>
              ) : (
                <i
                  class="fa fa-eye-slash"
                  aria-hidden="true"
                  onClick={toggle}
                ></i>
              )}
            </Styledicon>
            {passwordHasError ? (
              <StyledInput
                type={!isVisible ? "password" : "text"}
                id="password"
                placeholder="Password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                required
              ></StyledInput>
            ) : (
              <StyledInput
                $valid
                type={!isVisible ? "password" : "text"}
                // type="password"
                id="password"
                placeholder="Password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                required
              ></StyledInput>
            )}
            <StyledParent>
              <StyledForgetLink href="#">فراموشی رمز عبور</StyledForgetLink>
              {passwordHasError && (
                <StyledErrorText>‍پسورد الزامی می باشد</StyledErrorText>
              )}
            </StyledParent>
          </StyledFormGroup>

          <StyledButton disabled={!formIsValid}>ورود</StyledButton>
        </form>
      </section>
    </StyledMain>
  );
};

export default LoginForm;
