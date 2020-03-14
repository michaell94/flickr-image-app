import {IPhotoDetails, IPhotosResponse} from "interfaces/Api";
import { API_METHODS } from "./consts";

const getApiUrl = (method: string) =>
  `${process.env.REACT_APP_API_URL}?method=${method}&api_key=${process.env.REACT_APP_API_KEY}&format=json&nojsoncallback=1`;

const getData = (url: string) => {
  return fetch(url).then(response => response.json());
};

export const fetchImages = (
  text: string,
  page: number
): Promise<IPhotosResponse> => {
  const url = `${getApiUrl(API_METHODS.GET_PHOTOS)}&text=${text}&page=${page}`;

  return getData(url).then(({ photos }) => photos);
};

export const fetchImage = (imageId: string): Promise<IPhotoDetails> => {
  const url = `${getApiUrl(API_METHODS.GET_PHOTO)}&photo_id=${imageId}`;

  return getData(url).then(({ photo }) => photo);
};
