import { IItems } from "../components/types/ListComponent";
import { GET_REPO_SUCCESS } from "../actionTypes";

export function getRepoSuccess(dataRepo: IItems[]) {
  return {
    type: GET_REPO_SUCCESS,
    dataRepo: dataRepo,
  };
}
