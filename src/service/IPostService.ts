import { IPost } from "../model/IPost";

export interface IPostService {
  getPostById(id: number): IPost | null;
  getPosts(): IPost[];
}
