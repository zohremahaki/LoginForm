import React from "react";
import {
  StyledErrorText,
  StyledInput,
  StyledLabel,
  StyledFormGroup,
  Styledicon,
  StyledDiv,
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
  forgetPassword?: React.ReactNode;
}
const InputWrapper: React.FC<Input> = (props) => {
  const {
    label,
    icon,
    name,
    register,
    errors,
    type,
    placeholder,
    errMessage,
    forgetPassword,
  } = props;

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
          {...register(name, { required: true })}
          $valid={!errors.name}
          placeholder={placeholder}
        />
      </div>
      <StyledDiv>
        {errors[name] && <StyledErrorText>{errMessage}</StyledErrorText>}
        {forgetPassword}
      </StyledDiv>
    </StyledFormGroup>
  );
};
export default InputWrapper;
