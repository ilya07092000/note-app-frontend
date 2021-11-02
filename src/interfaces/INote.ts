import { IAuthor } from "./IAuthor";

export interface INote {
  id: string;
  author: IAuthor;
  content: string;
  createdAt: string;
  favoriteCount: number;
  favoritedBy: number[];
};