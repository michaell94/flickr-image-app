import React from "react";
import { IButton } from "../../types/Button";

const Button = ({ onClick, text }: IButton) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);

export default Button;
