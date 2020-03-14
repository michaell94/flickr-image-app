interface ResponseObject {
  id: string;
  secret: string;
  server: string;
  farm: number;
}

interface UserObject {
  username: string;
  realname: string;
}

interface DateObject {
  taken: string;
}

interface ContentObject {
  _content: string;
}

export interface IPhotosResponse {
  page: number;
  pages: number;
  perpage: number;
  total: string;
  photo: IPhoto[];
}

export interface IPhoto extends ResponseObject {
  owner: string;
  title: string;
}

export interface IPhotoDetails extends ResponseObject {
  title: ContentObject;
  description: ContentObject;
  dates: DateObject;
  owner: UserObject;
}
