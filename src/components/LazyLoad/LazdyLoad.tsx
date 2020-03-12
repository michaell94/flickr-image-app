import React from "react";
import { useInView } from "react-intersection-observer";
import { ILazyLoad } from "./interfaces";
import "intersection-observer"; // Polyfills to support IE and another old browsers.

const LazyLoad = ({
  children = null,
  offset = "100px 0px 0px 0px",
  height = "100px",
  width = "100px" // Must be minimum 1px, due to render bug in chrome
}: ILazyLoad) => {
  const [placeholderRef, inView] = useInView({
    rootMargin: offset,
    triggerOnce: true
  });

  return inView ? (
    children
  ) : (
    <div
      ref={placeholderRef}
      style={{ minHeight: height, minWidth: width }}
      className="lazyload__placeholder"
    />
  );
};

export default LazyLoad;
