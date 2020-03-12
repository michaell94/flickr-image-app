import { IPhotosResponse } from "../types/Api";

const API_URL = `${process.env.REACT_APP_API_URL}?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&format=json&nojsoncallback=1`;

const getData = (url: string) => {
  return fetch(url).then(response => response.json());
};

export const fetchImages = (
  text: string,
  page: number
): Promise<IPhotosResponse> => {
  const url = `${API_URL}&text=${text}&page=${page}`;

  return getData(url).then(({ photos }) => photos);
};
