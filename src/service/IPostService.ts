import { IPost } from "../model";

export interface IPostService {
  getPostById(id: number): IPost | null;
  getPosts(): IPost[];
}
