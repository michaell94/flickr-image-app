import React, { useEffect, useState } from "react";
import { IPhoto } from "interfaces/Api";
import { fetchImages } from "services/Api";
import LoadMore from "components/LoadMore/LoadMore";
import Loader from "components/Loader/Loader";
import Alert from "components/Alert/Alert";
import { ALERT_TYPE } from "components/Alert/consts";
import Logger from "services/Logger";
import ImagesList from "./ImagesList";
import { IImages } from "./interfaces";

const Images = ({ infiniteScroll, searchString }: IImages) => {
  const [images, setImages] = useState<IPhoto[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const loadPhotos = () => {
    setIsLoading(true);

    fetchImages(searchString, page)
      .then(({ photo }) => {
        setImages([...images, ...photo]);
        setPage(page + 1);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        Logger(error);
        setIsError(true);
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

  const renderImagesList = isError ? (
    <Alert type={ALERT_TYPE.DANGER}>
      An error occurred. Please try again later. :(
    </Alert>
  ) : (
    <ImagesList images={images} />
  );

  useEffect(() => loadPhotos(), []);

  return (
    <section className="images">
      <h2>Photos</h2>
      {renderImagesList}
      {renderLoadMore}
      {renderLoader}
    </section>
  );
};

export default Images;
