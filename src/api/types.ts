export type ApiGetResponse<T> = {
  success: boolean;
  code: string;
  msg: string;
  data: T;
};

export interface IParamsQuery {
  q?: string;
  page: number;
  per_page: number;
}
