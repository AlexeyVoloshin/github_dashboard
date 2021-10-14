import axios, { AxiosPromise } from "axios";
import { config } from "../config";
import {
  IContributors,
  IDataRepo,
} from "../core/components/types/ListComponent";
import { IListItem } from "../pages/components/types";
import { ApiGetResponse, IParamsQuery } from "./types";

export const getRepositories = (
  query: IParamsQuery
): AxiosPromise<ApiGetResponse<IDataRepo>> => {
  return axios({
    method: "GET",
    url: config.apiUrl + "/search/repositories",
    withCredentials: false,
    headers: { authorization: config.apiToken },
    params: query,
  });
};

export const getLanguages = (
  params: IParamsQuery
): AxiosPromise<ApiGetResponse<IListItem>> => {
  return axios({
    method: "GET",
    url: params.url,
    withCredentials: false,
    headers: { authorization: config.apiToken },
  });
};

export const getAllContributors = (
  query: IParamsQuery
): AxiosPromise<ApiGetResponse<IContributors>> => {
  return axios({
    method: "GET",
    url: query.url,
    withCredentials: false,
    headers: { authorization: config.apiToken },
    params: query,
  });
};
