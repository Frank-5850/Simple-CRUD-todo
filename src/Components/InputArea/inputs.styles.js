import styled from "styled-components";

export const MainContainer = styled.div`
  width: 400px;
  background-color: grey;
  height: 500px;
  border: 5px solid black;
  border-radius: 10px;
  padding: 15px;
  overflow: auto;
  overflow-y: hidden; /* Hide vertical scrollbar */
`;

export const HeaderWrapper = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.MarginBottom || "10px"};
`;

export const InputField = styled.input`
  width: 70%;
  height: 15px;
  padding: 8px;
  outline: none;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 5px;
  display: ${(props) => (props.edit ? "none" : "flex")};
`;

export const Button = styled.button`
  width: 15%;
  font-size: 30px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  display: ${(props) => (props.edit ? "none" : "flex")};
`;

export const ChoicesWrapper = styled.div`
  width: 100%;
`;

export const ChoiceBox = styled.div`
  width: 70%;
  height: 15px;
  padding: 8px;
  outline: none;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 5px;
  align-items: center;
  display: ${(props) => (props.edit ? "none" : "flex")};
`;
