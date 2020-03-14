import { ReactNode } from "react";

export interface IAlert {
  type: AlertType;
  children?: ReactNode;
}

export type AlertType = "success" | "info" | "warning" | "danger";
