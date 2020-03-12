import React from "react";
import { IImage } from "../../types/Image";

const Image = ({ url, alt }: IImage) => <img src={url} alt={alt} />;

export default Image;
