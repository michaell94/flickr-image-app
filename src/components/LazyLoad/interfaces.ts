import { ReactElement } from "react";

export interface ILazyLoad {
  children: ReactElement| null;
  offset?: string;
  height?: string;
  width?: string;
}
