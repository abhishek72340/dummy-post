import styled from "styled-components";
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

export const CardItem = styled.div`
  margin: 10px 0;
  font-size: 1.2rem;
`;

export const CardTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
  text-decoration: underline;
`;
export const BackButton = styled.button`
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: black;
`;
