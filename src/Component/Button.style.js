import styled from "styled-components";
export const Button = styled.button`
  width: max-content;
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  background-color: orangered;
  color: white;
  opacity: 0.7;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
