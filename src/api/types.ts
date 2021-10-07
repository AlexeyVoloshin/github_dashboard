export type ApiGetResponse<T> = {
  success: boolean;
  code: string;
  msg: string;
  data: T;
};
