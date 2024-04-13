import styled from "styled-components";
interface IProps {
  $valid?: boolean;
}
export const StyledFormGroup = styled.div`
  margin-bottom: 1.2rem;
`;

export const StyledResetPasswordLink = styled.a`
  text-decoration: none;
  color: #666666;
  display: inline-block;
  text-align: left;
  margin-left: 0;
`;
export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  direction: rtl;
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
export const StyledHeader = styled.h1`
  margin: 2rem auto;
  margin-top: 5rem;
  text-align: center;
`;

export const StyledListContainer = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
  align-items: space-between;
  justify-content: center;
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  padding: 0.2rem 2rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding-inline-start: 0px;
`;

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;
export const StyledListItemUsername = styled.span`
  font-weight: bold;
`;
export const StyledListItemEmail = styled.span`
  color: #777;
`;
export const StyledEmptyList = styled.p`
  margin: 2rem auto;
  font-weight: bold;
  color: #777;
  border-bottom: 1px solid #ddd;
`;
