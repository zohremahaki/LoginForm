import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormWrapper from "../components/UI/FormWrapper.tsx";
import InputWrapper from "../components/UI/InputWrapper.tsx";
import { InboxOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import axios from "axios";

import { userActions } from "../components/store/index.tsx";
import { StyledResetPasswordLink } from "./PagesStyled.styled.tsx";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

// import { useNavigate } from "react-router-dom";
interface FormValue {
  username: string;
  email: string;
  password: string;
}
const SignupPage: React.FC = () => {
  const [passwordType, setPasswordType] = useState("password");

  const dispatch = useDispatch();
  // const naigate = useNavigate();
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
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => {
        console.log("Post created successfully!");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    dispatch(userActions.addUserData(data));
    reset();
    // naigate("/dashboard");
  };

  return (
    <FormWrapper
      title="ایجاد حساب کاربری"
      onSubmit={handleSubmit(onSubmit)}
      btnLabel="ارسال"
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
        errMessage="نام کاربری را وارد کنید"
      />
      <InputWrapper
        label="ایمیل"
        icon={<InboxOutlined />}
        name="email"
        register={register}
        errors={errors}
        type="email"
        placeholder="Email"
        errMessage="ایمیل باید شامل @ باشد"
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
export default SignupPage;
