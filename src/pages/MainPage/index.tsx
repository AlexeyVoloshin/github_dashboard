import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";
import { useDebouncedCallback } from "use-debounce";
import { ADD_SEARCH_FILTER, GET_POPULAR_REPO } from "./types";
import { ListComponent } from "../../core/components/ListComponent";
import { RootState } from "../../store";
import { readFilterSearch, saveFilterSearch } from "../../utils/localStore";

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
    try {
      dispatch({ type: GET_POPULAR_REPO });
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  const searchRepo = React.useCallback(
    (search: string) => {
      try {
        dispatch({ type: ADD_SEARCH_FILTER, search });
      } catch (e) {
        console.error(e);
      }
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
    <>
      <Search
        placeholder="input search loading default"
        loading={searchIsLoading}
        enterButton
        onChange={handleInput}
      />
      {isLoading ? "Loading...." : <ListComponent dataRepo={repo} />}
    </>
  );
};
