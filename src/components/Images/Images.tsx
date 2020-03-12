import React, { useEffect, useState } from "react";
import { IPhoto } from "./../../interfaces/Api";
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
    setIsLoading(true);

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

  const renderLoadMore = !isLoading && (
    <LoadMore
      infiniteScroll={infiniteScroll}
      isLoading={isLoading}
      loadingOffset={300}
      onLoadMore={loadPhotos}
    />
  );

  const renderLoader = isLoading && <Loader />;

  useEffect(() => loadPhotos(), []);

  return (
    <section className="images">
      <h2>Photos</h2>
      <ImagesList images={images} />
      {renderLoadMore}
      {renderLoader}
    </section>
  );
};

export default Images;
