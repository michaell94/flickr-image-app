import React, { useEffect, useState } from "react";
import { IPhoto } from "../../types/Api";
import { fetchImages } from "../../services/Api";
import LoadMore from "../LoadMore/LoadMore";
import Loader from "../Loader/Loader";
import ImagesList from "./ImagesList";
import { IImages } from "./interfaces";

const Images = ({ infiniteScroll, searchString }: IImages) => {
  const [images, setImages] = useState<IPhoto[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const loadPhotos = () => {
    fetchImages(searchString, page)
      .then(({ photo }) => {
        setImages([...images, ...photo]);
        setPage(page + 1);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => loadPhotos(), []);

  return (
    <div className="images">
      <ImagesList images={images} />
      <LoadMore
        infiniteScroll={infiniteScroll}
        isLoading={isLoading}
        loadingOffset={300}
        onLoadMore={loadPhotos}
      />
      {isLoading && <Loader />}
    </div>
  );
};

export default Images;
