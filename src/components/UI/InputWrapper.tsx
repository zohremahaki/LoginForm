import React from "react";
import {
  StyledErrorText,
  StyledInput,
  StyledLabel,
  StyledFormGroup,
  Styledicon,
  StyledDiv,
  StyledForgetPassword,
} from "../../Pages/PagesStyled.styled.tsx";
interface Input {
  label: string;
  icon: React.ReactNode;
  name: string;
  register: any;
  errors: any;
  type: string;
  placeholder: string;
  errMessage: string;
}
const InputWrapper: React.FC<Input> = (props) => {
  const { label, icon, name, register, errors, type, placeholder, errMessage } =
    props;

  return (
    <StyledFormGroup>
      <StyledLabel htmlFor={name} $valid={!errors.name}>
        {label}
      </StyledLabel>
      <div>
        <Styledicon>{icon}</Styledicon>
        <StyledInput
          id={name}
          type={type}
          {...register(name, { required: true, minLength: 8 })}
          $valid={!errors.name}
          placeholder={placeholder}
        />
      </div>
      <StyledDiv>
        {name === "password" ? (
          <StyledForgetPassword href="#">فراموشی رمز عبور</StyledForgetPassword>
        ) : (
          <div></div>
        )}
        {errors[name] && <StyledErrorText>{errMessage}</StyledErrorText>}
      </StyledDiv>
    </StyledFormGroup>
  );
};
export default InputWrapper;
