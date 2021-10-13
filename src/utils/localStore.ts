const filterSearch = "filterSearch";

export const saveFilterSearch = (search: string): void => {
  localStorage.setItem(filterSearch, JSON.stringify(search));
};

export const readFilterSearch = (): string => {
  const currency = localStorage.getItem(filterSearch);
  return currency !== null ? JSON.parse(currency) : "";
};
