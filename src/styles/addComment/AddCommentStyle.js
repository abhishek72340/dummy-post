import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const AddCommentButton = styled.button`
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: black;
`;
