import { IAuthor } from "./IAuthor";

export interface IPost {
  id: number;
  title: string;
  content?: string;
  created_on?: string;
  modified_on?: string;
  author?: IAuthor;
}
