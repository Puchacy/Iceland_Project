import React, { FC } from "react";

interface Props {
  values: Array<string>;
  style?: any;
}

const DropdownComponent: FC<Props> = props => {
  return (
    <select id="dropdown" style={props.style}>
      {props.values.map((item, index) => {
        return <option key={index}>{item}</option>;
      })}
    </select>
  );
};

export default DropdownComponent;
