export type ApiGetResponse<T> = {
  success: boolean;
  status: string;
  msg: string;
  statusText: string;
  data: T;
};

export interface IParamsQuery {
  q?: string;
  page?: number;
  per_page?: number;
}
