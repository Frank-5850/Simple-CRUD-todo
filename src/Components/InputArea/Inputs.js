import React from "react";
import { useState } from "react";
import {
  Button,
  ChoiceBox,
  ChoicesWrapper,
  FormWrapper,
  HeaderWrapper,
  InputField,
  MainContainer,
} from "./inputs.styles";

const Inputs = () => {
  const [names, setNames] = useState("");
  const [choices, setChoices] = useState([]);

  const onChange = (e) => {
    setNames(e.target.value);
  };

  const addChoice = (e) => {
    e.preventDefault();
    const newChoice = [...choices, { choice: names, isEditing: false }];
    setChoices(newChoice);
  };

  const deleteChoice = (e, index) => {
    e.preventDefault();
    const newChoices = [...choices];
    // Using Splice method
    newChoices.splice(index, 1);

    // Using for loop and conditional Method
    // for (let i = 0; i < newChoices.length; i++) {
    //   if (i === index) delete newChoices[i];
    // }

    setChoices(newChoices);
  };

  const editChoice = (e, index) => {
    e.preventDefault();
    const newChoices = [...choices];

    // Using Splice Method when state was an array of objects
    const item = newChoices[index];
    let newItem = names;
    let choiceObj = { choice: newItem, isEditing: false };
    newChoices.splice(index, 1, choiceObj);
    item.choice = newItem;

    // // Using Splice Method when state was an array of strings
    // let item = newChoices[index];
    // item = names;
    // newChoices.splice(index, 1, item);

    // // forloop & conditional way
    // for (let i = 0; i < newChoices.length; i++) {
    //   if (i === index) newChoices[i] = { choice: names, isEditing: false };
    // }

    setChoices(newChoices);
  };

  const openEdit = (index) => {
    const newChoices = [...choices];
    newChoices[index].isEditing === false
      ? (newChoices[index].isEditing = true)
      : (newChoices[index].isEditing = false);
    setChoices(newChoices);
  };

  return (
    <MainContainer>
      <HeaderWrapper>
        <h1>Choices</h1>
      </HeaderWrapper>
      <FormWrapper>
        <InputField
          type="text"
          placeholder="Input choices here..."
          onChange={onChange}
        />
        <Button onClick={(e) => addChoice(e)}>+</Button>
      </FormWrapper>
      <ChoicesWrapper>
        {choices?.map((item, index) => (
          <FormWrapper key={index}>
            <InputField
              edit={!item.isEditing}
              placeholder={item.choice}
              onChange={onChange}
            />
            <Button
              style={{
                display: item.isEditing ? "flex" : "none",
              }}
              onClick={(e) => editChoice(e, index)}
            >
              Edit
            </Button>
            <ChoiceBox edit={item.isEditing} onClick={() => openEdit(index)}>
              {item.choice}
            </ChoiceBox>
            <Button
              edit={item.isEditing}
              onClick={(e) => deleteChoice(e, index)}
            >
              x
            </Button>
          </FormWrapper>
        ))}
      </ChoicesWrapper>
    </MainContainer>
  );
};

export default Inputs;
