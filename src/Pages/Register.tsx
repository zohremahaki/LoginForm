import React from "react";
import useInput from "../components/hooks/UseInput.tsx";

import { StyledFormGroup } from "./PagesStyled.styled.tsx";
import Label from "../components/UI/Label.tsx";
import Input from "../components/UI/Input.tsx";
import Button from "../components/UI/Button.tsx";
import Layout from "../components/UI/Layout.tsx";
import ErrorText from "../components/UI/ErrorText.tsx";

const Register: React.FC = () => {
  const isNotEmpty = (value: string) => value.trim() !== "";
  // const emaileFormat = (value: string) => value.trim().includes("@");
  // const validEmail = isNotEmpty && emaileFormat;

  const {
    value: enteredUsername,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: userNameChangeHandler,
    valueBlurHandler: usernameBlurHandler,
    reset: resetUsername,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isNotEmpty);
  // } = useInput(validEmail);

  let formIsValid = false;
  if (usernameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const signupHandler = (event: React.FormEvent<HTMLFormElement>) => {
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

export default Register;
