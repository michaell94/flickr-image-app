import React from "react";
import { IOptions } from "./interfaces";

const Options = ({ infiniteScroll, onInifiniteChange }: IOptions) => {
  return (
    <div className="options">
      <input
        id="inifityScroll"
        type="checkbox"
        checked={infiniteScroll}
        onClick={onInifiniteChange}
      />
      <label htmlFor="inifityScroll">Infinite Scroll</label>
    </div>
  );
};

export default Options;
