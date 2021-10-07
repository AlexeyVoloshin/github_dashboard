import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';
import { useDebouncedCallback } from 'use-debounce';

const { Search } = Input;

export const MainPage: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [value, setValue] = React.useState('');

  const debounced = useDebouncedCallback((value) => {
    setValue(value);
  }, 300);

  const sendReques = () => {
    try {
      setIsLoading(true);
      const result = dispatch({ type: 'USER_FETCH_REQUESTED' });
      // if (result.error) {
      //
      // }
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (value) {
      sendReques();
    }
  }, [sendReques, value]);

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
