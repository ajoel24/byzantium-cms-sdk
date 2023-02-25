import { IPost } from "./IPost";

export interface IAuthor {
    id: number;
    name: string;
    posts: IPost[];
}