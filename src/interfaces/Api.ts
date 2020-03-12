export interface IPhotosResponse {
  page: number;
  pages: number;
  perpage: number;
  total: string;
  photo: IPhoto[];
}

export interface IPhoto {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: NumericBoolean;
  isfriend: NumericBoolean;
  isfamily: NumericBoolean;
}

export type NumericBoolean = 1 | 0;
