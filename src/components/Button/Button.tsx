import React from "react";
import { IButton } from "./interfaces";
import "./Button.scss";

const Button = ({ onClick, text }: IButton) => (
  <button className="btn" type="button" onClick={onClick}>
    {text}
  </button>
);

export default Button;
