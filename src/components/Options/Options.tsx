import React from "react";
import { IOptions } from "./interfaces";

const Options = ({ infiniteScroll, onInifiniteChange }: IOptions) => {
  return (
    <section className="options">
      <h2>Options</h2>
      <input
        id="inifityScroll"
        type="checkbox"
        checked={infiniteScroll}
        onChange={onInifiniteChange}
      />
      <label htmlFor="inifityScroll">Infinite Scroll</label>
    </section>
  );
};

export default Options;
