import React from "react";
import { StyledInput } from "./UiStyled.styled.tsx";

interface InputProbs {
  $valid?: boolean;
  type?: string;
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value?: any) => void;
  onBlur?: (value?: any) => void;
}

const Input: React.FC<InputProbs> = (props) => {
  const { $valid, type, id, placeholder, value, onChange, onBlur } = props;
  return (
    <StyledInput
      $valid={$valid}
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    ></StyledInput>
  );
};

export default Input;
