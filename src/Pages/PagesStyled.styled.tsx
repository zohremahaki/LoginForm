import styled from "styled-components";
interface IProps {
  $valid?: boolean;
}
export const StyledFormGroup = styled.div`
  margin-bottom: 1.2rem;
`;

export const StyledForgetPassword = styled.a`
  text-decoration: none;
  color: #666666;
  display: inline-block;
  text-align: left;
  margin-left: 0;
`;
export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Styledicon = styled.div`
  position: fixed !important;
  padding-left: 1rem;
  padding-top: 0.5rem;
  display: inline-block;
  color: #191919;
`;
export const StyledLabel = styled.label<IProps>`
  color: ${(props) => (props.$valid ? "" : "#ff0000")};
  display: block;
  margin-bottom: 0.5rem;
  text-align: right;
  margin-right: 0.2rem;
  font-size: 0.8rem;
`;
export const StyledInput = styled.input<IProps>`
  width: 100%;
  display: inline-block;
  margin: auto;
  border-radius: 4px;
  padding: 0.5rem;
  border: ${(props) => (props.$valid ? "1px solid #ccc" : "1px solid #ff0000")};
  text-align: right;
  background-color: #fff !important;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px #ff0000;
  }
`;

export const StyledErrorText = styled.p`
  color: red;
  margin-top: 0.2rem;
  text-align: right;
  margin-right: 0.2rem;
  font-size: 0.7rem;
  margin-bottom: 0;
`;
export const StyledButton = styled.button`
  width: 100%;
  display: block;
  margin: 2rem auto 0;
  border-radius: 4px;
  padding: 0.5rem;
  border: 1px solid #b8b8b8 !important;
  &:hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }
  &:active,
  &:focus {
    background-color: #e6e6e6;
    color: #black;
  }
  &:disabled {
    background-color: #f5f5f5;
    color: #b8b8b8;
    font-weight: bold;
  }
`;
