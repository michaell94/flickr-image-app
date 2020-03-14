import React, { useState } from "react";
import classnames from "classnames";
import { IImageInternal } from "../interfaces";
import "./../Image.scss";

const ImageInternal = ({ url, alt }: IImageInternal) => {
  const [showImage, setShowImage] = useState(false);
  const [showError, setShowError] = useState(false);

  return (
    <figure
      className={classnames("image", {
        "image--loaded": showImage,
        "image--error": showError
      })}
    >
      <img
        className="image__img"
        onLoad={() => setShowImage(true)}
        onError={() => setShowError(true)}
        src={url}
        alt={alt}
      />
    </figure>
  );
};

export default ImageInternal;
