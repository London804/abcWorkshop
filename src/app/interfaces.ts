export interface IVideoDetails {
  age: number;
  region: string;
  date: string;
}
export interface IVideo {
  title: string;
  author: string;
  id: string;
  viewDetails: Array<IVideoDetails>;
}