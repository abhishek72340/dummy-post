import styled from "styled-components";
export const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 2px gray;
  width: 50%;
`;
export const Button = styled.div`
  cursor: pointer;
  font-size: 12px;
  color: black;
  font-weight: bold;
  background-color: white;
  border: 1px solid black;
  padding: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: -1.1rem;
  margin-right: -1rem;
`;
