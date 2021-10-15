import { ILanguages, IOwner } from "../../core/components/types/ListComponent";

export interface IParams {
  id: string;
  name: string;
}

export const GET_CONTRIBUTORS = "CARD_DETAILS/GET_CONTRIBUTORS";

export interface ContributorsState {
  isLoading: boolean;
  error: string;
  contributors: IOwner[];
}

export const GET_LANGUAGE = "CARD_DETAILS/GET_LANGUAGE";

export interface LanguagesState {
  isLoading: boolean;
  error: string;
  languages: ILanguages;
}
