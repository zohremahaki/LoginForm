import React from "react";
import { useForm } from "react-hook-form";
import FormWrapper from "../components/UI/FormWrapper.tsx";
import InputWrapper from "../components/UI/InputWrapper.tsx";
import { InboxOutlined, UserOutlined } from "@ant-design/icons";

interface FormValue {
  username: string;
  email: string;
}
const SignupPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValue>({
    mode: "onBlur",
  });
  const onSubmit = (data: FormValue) => {
    console.log(data);
    reset();
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
    </FormWrapper>
  );
};
export default SignupPage;
