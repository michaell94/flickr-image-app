import React, { useEffect } from "react";
import { ILoadMore } from "./interfaces";
import Button from "../Button/Button";
import "./LoadMore.scss";

const LoadMore = ({
  loadingOffset,
  isLoading,
  infiniteScroll = false,
  onLoadMore
}: ILoadMore) => {
  const bottomReached = () =>
    window.innerHeight + window.scrollY + loadingOffset >=
    document.body.offsetHeight;

  const handleScroll = () => {
    if (isLoading) return;
    if (bottomReached()) {
      onLoadMore();
    }
  };

  useEffect(() => {
    if (infiniteScroll) {
      document.addEventListener("scroll", handleScroll);

      return () => document.removeEventListener("scroll", handleScroll);
    }
  });

  return !infiniteScroll ? (
    <div className="load-more">
      <Button onClick={onLoadMore} text={"Fetch more!"} />
    </div>
  ) : null;
};

export default LoadMore;
