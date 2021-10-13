import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";
import { useDebouncedCallback } from "use-debounce";
import { ADD_SEARCH_FILTER, GET_POPULAR_REPO } from "./types";
import { ListComponent } from "../../core/components/ListComponent";
import { RootState } from "../../store";
import { IItems } from "../../core/components/types/ListComponent";
import { readFilterSearch, saveFilterSearch } from "../../utils/localStore";

const { Search } = Input;

export const MainPage: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const searchFilter = readFilterSearch();
  const stateRepo = useSelector((state: RootState) => state.repositories);

  const [isLoading, setIsLoading] = React.useState<boolean>(
    stateRepo.isLoading
  );
  const [inputValue, setInputValue] = React.useState(searchFilter);
  const [repo, setRepo] = React.useState<IItems[]>(stateRepo.repo);

  const debounced = useDebouncedCallback((value) => {
    setInputValue(value);
  }, 500);

  const getPopularRepo = React.useCallback(() => {
    try {
      // setIsLoading(true);
      dispatch({ type: GET_POPULAR_REPO });
      if (repo.length > 0) {
        //   setIsLoading(false);
      }
    } catch (e) {
      console.error(e);
    }
  }, [dispatch, repo]);

  const searchRepo = React.useCallback(
    (search: string) => {
      try {
        setIsLoading(true);
        dispatch({ type: ADD_SEARCH_FILTER, search });

        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        // setIsLoading(false);
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
  }, [getPopularRepo, searchRepo, inputValue, isLoading]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    debounced(e.target.value);
  };
  return (
    <>
      <Search
        placeholder="input search loading default"
        loading={isLoading}
        enterButton
        onChange={handleInput}
      />
      {!isLoading ? "Loading...." : <ListComponent dataRepo={repo} />}
    </>
  );
};
