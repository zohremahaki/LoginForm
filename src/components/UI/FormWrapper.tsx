import React from "react";
import { StyledButton, StyledMain, StyledHeading } from "./UiStyled.styled.tsx";

interface FormProbs {
  title: string;
  btnLabel: string;
  children: React.ReactNode;
  onSubmit: (data: any) => void;
  disabled: boolean;
}
const FormWrapper: React.FC<FormProbs> = (props) => {
  const { title, children, onSubmit, btnLabel, disabled } = props;
  return (
    <StyledMain>
      <StyledHeading>{title}</StyledHeading>
      <form onSubmit={onSubmit}>
        {children}
        <StyledButton type="submit" disabled={disabled}>
          {btnLabel}
        </StyledButton>
      </form>
    </StyledMain>
  );
};
export default FormWrapper;
