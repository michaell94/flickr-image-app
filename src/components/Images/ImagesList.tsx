import React from "react";
import Image from "../Image/Image";
import { getImageUrl } from "../../common/helpers";
import { IImagesList } from "./interfaces";
import "./Images.scss";

const ImagesList = ({ images }: IImagesList) => (
  <ul className="images-list">
    {images.map(({ farm, server, secret, id, title }) => (
      <li key={id} className="images-list__item">
        <Image
          url={getImageUrl(farm, server, id, secret, "q")}
          alt={title}
          omitLazyload={false}
        />
      </li>
    ))}
  </ul>
);

export default ImagesList;
