import React, { useState } from "react";
import Modal from "components/Modal/Modal";
import { IImageMore } from "./interfaces";
import "./ImageMore.scss";

const ImageMore = ({ imageId, children }: IImageMore) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="image-more"
        onClick={() => setShowModal(!showModal)}
      >
        {children}
      </button>
      {showModal && (
        <Modal imageId={imageId} onClose={() => setShowModal(!showModal)} />
      )}
    </>
  );
};

export default ImageMore;
