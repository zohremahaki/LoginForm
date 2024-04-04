import styled from "styled-components";
export const StyledMain = styled.main`
  margin: 5rem auto;
  width: 28rem;
  padding: 1rem;
  text-align: center;
`;
export const StyledHeading = styled.h1`
  margin-bottom: 1.2rem;
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
