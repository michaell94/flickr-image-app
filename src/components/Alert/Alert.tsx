import React from "react";
import { IAlert } from "./interfaces";
import "./Alert.scss";

const Alert = ({ children, type }: IAlert) => (
  <div className={`alert alert--${type}`} role="alert">
    {children}
  </div>
);

export default Alert;
