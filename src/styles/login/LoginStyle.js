import styled from "styled-components";

export const LoginContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  gap: 2rem;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  gap: 1rem;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  font-size: 16px;
  outline: none;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;
export const P = styled.p`
  color: red;
  margin-top: -1rem;
`;
