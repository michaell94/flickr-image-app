import React from "react";
import Image from "components/Image/Image";
import { getImageUrl } from "common/helpers";
import { IImagesList } from "./interfaces";
import "./Images.scss";
import ImageMore from "../ImageMore/ImageMore";

const ImagesList = ({ images }: IImagesList) => (
  <ul className="images-list">
    {images.map(({ farm, server, secret, id, title }) => (
      <li key={id} className="images-list__item">
        <ImageMore imageId={id}>
          <Image
            url={getImageUrl(farm, server, id, secret, "q")}
            alt={title}
          />
        </ImageMore>
      </li>
    ))}
  </ul>
);

export default ImagesList;
