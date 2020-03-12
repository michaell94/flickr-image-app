import { SyntheticEvent } from "react";

export interface IButton {
  onClick: (e: SyntheticEvent) => void;
  text: string;
}
