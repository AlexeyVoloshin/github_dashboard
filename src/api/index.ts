import { AxiosPromise } from 'axios';
import { ApiGetResponse } from './types';
import { api } from '../core';

export const getConversionResult = (): AxiosPromise<ApiGetResponse<any>> =>
  api.get(``);
