import axios, { AxiosPromise } from 'axios';
import { config } from '../config';
import {
  IPropsList,
  IResponceData
} from '../core/components/types/ListComponent';
import { ApiGetResponse, IParamsQuery } from './types';

export const getAllRepo = (): AxiosPromise<IPropsList> => {
  return axios({
    method: 'GET',
    url: config.apiUrl + '/users/google/repos',
    withCredentials: false,
    headers: { authorization: config.apiToken }
  });
};

export const getPopularRepo = (
  query: IParamsQuery
): AxiosPromise<ApiGetResponse<IResponceData>> => {
  return axios({
    method: 'GET',
    url: config.apiUrl + '/search/repositories',
    withCredentials: false,
    headers: { authorization: config.apiToken },
    params: query
  });
};
