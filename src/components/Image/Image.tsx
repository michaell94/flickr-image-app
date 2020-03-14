import React from "react";
import LazyLoad from "components/LazyLoad/LazdyLoad";
import { IImage } from "./interfaces";
import ImageInternal from "./ImageInternal/ImageInternal";

const Image = ({ url, alt, omitLazyload = false }: IImage) =>
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
