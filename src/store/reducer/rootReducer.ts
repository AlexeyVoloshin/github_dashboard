import { combineReducers } from "redux";
import { search_filter } from "../../pages/MainPage/sliceSearch";
import { repo } from "../../pages/MainPage/sliceRepo";
import { contributors } from "../../pages/CardDetails/sliceContributors";
import { languages } from "../../pages/CardDetails/sliceLanguages";

const rootReducer = combineReducers({
  search: search_filter,
  repositories: repo,
  contributors: contributors,
  languages: languages,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
