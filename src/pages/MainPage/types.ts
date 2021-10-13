import { IItems } from "../../core/components/types/ListComponent";

export interface IInitialState {
  isLoading: boolean;
  error: string;
  search_filter: string;
}

export interface RepoState {
  isLoading: boolean;
  error: string;
  repo: IItems[];
}

export const ADD_SEARCH_FILTER = "MAIN_PAGE/ADD_SEARCH_FILTER";

export const GET_POPULAR_REPO = "MAIN_PAGE/GET_POPULAR_REPO";
