export interface IImageInternal {
  url: string;
  alt: string;
}

export interface IImage extends IImageInternal {
  omitLazyload: boolean;
}
