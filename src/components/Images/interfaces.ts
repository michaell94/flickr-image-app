import { IPhoto } from "./../../interfaces/Api";

export interface IImages {
  infiniteScroll: boolean;
  searchString: string;
}

export interface IImagesList {
  images: IPhoto[];
}
