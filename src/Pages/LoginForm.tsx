import React, { useState } from "react";
import useInput from "../components/hooks/UseInput.tsx";

import {
  StyledFormGroup,
  StyledForgetPassword,
  StyledDiv,
} from "./PagesStyled.styled.tsx";
import Label from "../components/UI/Label.tsx";
import Input from "../components/UI/Input.tsx";
import Icons from "../components/UI/Icon/Icons.tsx";
import Button from "../components/UI/Button.tsx";
import Layout from "../components/UI/Layout.tsx";
import ErrorText from "../components/UI/ErrorText.tsx";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  UserOutlined,
} from "@ant-design/icons";

const LoginForm: React.FC = () => {
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
          <Icons>
            <UserOutlined />
          </Icons>
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

          {isVisible ? (
            <Icons onClick={toggle}>
              <EyeOutlined />
            </Icons>
          ) : (
            <Icons onClick={toggle}>
              <EyeInvisibleOutlined />
            </Icons>
          )}

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
