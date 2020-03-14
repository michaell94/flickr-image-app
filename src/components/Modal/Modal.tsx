import React, { useEffect, useState } from "react";
import { IPhotoDetails } from "interfaces/Api";
import Logger from "services/Logger";
import { fetchImage } from "services/Api";
import Loader from "components/Loader/Loader";
import Image from "components/Image/Image";
import { IModal } from "./interfaces";
import "./Modal.scss";
import { getImageUrl } from "common/helpers";

const Modal = ({ imageId, onClose }: IModal) => {
  const [image, setImage] = useState<IPhotoDetails>();
  const [isLoading, setIsLoading] = useState(false);

  const loadPhoto = () => {
    setIsLoading(true);

    fetchImage(imageId)
      .then(photo => {
        setImage(photo);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        Logger(error);
        setIsLoading(false);
      });
  };

  const escClose = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const renderImage = image && (
    <>
      <Image
        url={getImageUrl(image.farm, image.server, image.id, image.secret, "z")}
        alt=""
      />

      <div className="modal__description">
        <h2>{image.title._content}</h2>
        <p className="modal__caption">{`Caption: ${image.description._content}`}</p>
        <p>{`Date: ${image.dates.taken}`}</p>
        <p>
          {`Author: ${image.owner.realname ||
            image.owner.username ||
            "unknown"}`}
        </p>
      </div>
    </>
  );

  useEffect(() => {
    loadPhoto();
    document.addEventListener("keydown", escClose);

    return () => {
      document.removeEventListener("keydown", escClose);
    };
  }, []);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__inner">{isLoading ? <Loader /> : renderImage}</div>
    </div>
  );
};

export default Modal;
