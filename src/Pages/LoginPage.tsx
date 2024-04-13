import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import FormWrapper from "../components/UI/FormWrapper.tsx";
import InputWrapper from "../components/UI/InputWrapper.tsx";
import { StyledResetPasswordLink } from "./PagesStyled.styled.tsx";

import {
  EyeOutlined,
  EyeInvisibleOutlined,
  UserOutlined,
} from "@ant-design/icons";

interface FormValue {
  username: string;
  password: string;
}
const LoginPage: React.FC = () => {
  const [passwordType, setPasswordType] = useState("password");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValue>({
    mode: "onBlur",
  });

  const onSubmit = async (data: FormValue) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log("Posts:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    reset();
  };

  return (
    <FormWrapper
      title="ورود به حساب کاربری"
      btnLabel="ارسال"
      onSubmit={handleSubmit(onSubmit)}
      disabled={!isValid}
    >
      <InputWrapper
        label="نام کاربری"
        icon={<UserOutlined />}
        name="username"
        register={register}
        errors={errors}
        type="text"
        placeholder="Username"
        errMessage="نام کاربری الزامیست"
      />
      <InputWrapper
        label="رمز عبور"
        icon={
          passwordType === "password" ? (
            <EyeOutlined onClick={() => setPasswordType("text")} />
          ) : (
            <EyeInvisibleOutlined onClick={() => setPasswordType("password")} />
          )
        }
        name="password"
        register={register}
        errors={errors}
        type={passwordType}
        placeholder="Password"
        errMessage="رمز عبورالزامیست"
        resetPasswordLink={
          <StyledResetPasswordLink href="#">
            فراموشی رمز عبور
          </StyledResetPasswordLink>
        }
      />
    </FormWrapper>
  );
};
export default LoginPage;
