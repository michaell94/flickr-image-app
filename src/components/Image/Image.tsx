import React from "react";
import { IImage } from "./interfaces";
import LazyLoad from "../LazyLoad/LazdyLoad";
import ImageInternal from "./ImageInternal/ImageInternal";

const Image = ({ url, alt, omitLazyload }: IImage) =>
  omitLazyload ? (
    <ImageInternal url={url} alt={alt} />
  ) : (
    <>
      <LazyLoad>
        <ImageInternal url={url} alt={alt} />
      </LazyLoad>
    </>
  );

export default Image;
