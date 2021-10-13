import axios, { AxiosPromise } from "axios";
import { config } from "../config";
import { IDataRepo } from "../core/components/types/ListComponent";
import { ApiGetResponse, IParamsQuery } from "./types";

export const getAllRepo = (query: IParamsQuery): AxiosPromise<IDataRepo> => {
  return axios({
    method: "GET",
    url: config.apiUrl + "/users/google/repos",
    withCredentials: false,
    headers: { authorization: config.apiToken },
    params: query,
  });
};

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
