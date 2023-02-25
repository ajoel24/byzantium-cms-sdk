export interface IPaginated<T> {
  page: number;
  limit: number;
  data: T[];
}
