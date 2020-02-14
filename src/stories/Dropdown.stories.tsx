import React from "react";
import { object } from "@storybook/addon-knobs";
import { array } from "@storybook/addon-knobs";
import DropdownComponent from "../components/dropdown";

export default {
  title: "Dropdown",
  component: DropdownComponent
};

export const Default = () => (
  <DropdownComponent values={["Value1", "Value2", "Value3"]} />
);

export const DefOwnValues = () => {
  const label = "Values";
  const defaultValue = ["Value1", "Value2", "Value3"];
  const valuesArray = array(label, defaultValue);

  return <DropdownComponent values={valuesArray} />;
};

export const DefOwnStyle = () => {
  const label = "Styles";
  const defaultValue = {
    backgroundColor: "red",
    color: "white",
    fontSize: "20px"
  };

  const styleObj = object(label, defaultValue);

  return (
    <DropdownComponent
      values={["Value1", "Value2", "Value3"]}
      style={styleObj}
    />
  );
};
