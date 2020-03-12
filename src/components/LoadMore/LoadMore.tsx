import React, { useEffect } from "react";
import { ILoadMore } from "./interfaces";
import Button from "../Button/Button";

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
    <Button onClick={onLoadMore} text={"Fetch more!"} />
  ) : null;
};

export default LoadMore;
