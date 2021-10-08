import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';
import { useDebouncedCallback } from 'use-debounce';
import { ADD_SEARCH_FILTER, GET_POPULAR_REPO } from './types';

const { Search } = Input;

export const MainPage: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [value, setValue] = React.useState('');

  const debounced = useDebouncedCallback((value) => {
    setValue(value);
  }, 500);

  const getPopularRepo = React.useCallback(() => {
    try {
      const result = dispatch({ type: GET_POPULAR_REPO });
    } catch (e) {}
  }, []);

  const sendReques = React.useCallback(() => {
    try {
      setIsLoading(true);
      const result = dispatch({ type: ADD_SEARCH_FILTER });
      // if (result.error) {
      //
      // }
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      // setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  useEffect(() => {
    if (value) {
      sendReques();
    } else {
      getPopularRepo();
    }
  }, [getPopularRepo, sendReques, value]);

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
      {value}
    </>
  );
};
