import { combineReducers } from "redux";
import { search_filter } from "../../pages/MainPage/sliceSearch";
import { repo } from "../../pages/MainPage/sliceRepo";

const rootReducer = combineReducers({
  search: search_filter,
  repositories: repo,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
