import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";
import { useDebouncedCallback } from "use-debounce";
import { ADD_SEARCH_FILTER, GET_POPULAR_REPO } from "./types";
import { ListComponent } from "../components/ListComponent";
import { RootState } from "../../store";
import { readFilterSearch, saveFilterSearch } from "../../utils/localStore";
import { Preloader } from "../../core/components/Preloader";
import { MainContainer } from "./styled";

const { Search } = Input;

export const MainPage: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const searchFilter = readFilterSearch();
  const { isLoading, repo } = useSelector(
    (state: RootState) => state.repositories
  );
  const { isLoading: searchIsLoading } = useSelector(
    (state: RootState) => state.search
  );

  const [inputValue, setInputValue] = React.useState(searchFilter);

  const debounced = useDebouncedCallback((value) => {
    setInputValue(value);
  }, 500);

  const getPopularRepo = React.useCallback(() => {
    if (repo.length <= 0) {
      dispatch({ type: GET_POPULAR_REPO });
    }
  }, [dispatch, repo.length]);

  const searchRepo = React.useCallback(
    (search: string) => {
      dispatch({ type: ADD_SEARCH_FILTER, payload: search });
    },
    [dispatch]
  );

  useEffect(() => {
    if (inputValue) {
      searchRepo(inputValue);
    } else {
      getPopularRepo();
    }

    return saveFilterSearch(inputValue);
  }, [getPopularRepo, searchRepo, inputValue]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    debounced(e.target.value);
  };

  return (
    <MainContainer>
      <Search
        placeholder="input search loading default"
        loading={searchIsLoading}
        enterButton
        onChange={handleInput}
      />
      {repo.length > 0 && !isLoading ? (
        <ListComponent dataRepo={repo} />
      ) : (
        <Preloader size="large" />
      )}
    </MainContainer>
  );
};
