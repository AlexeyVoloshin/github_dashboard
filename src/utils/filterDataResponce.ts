import { IItems } from "../core/components/types/ListComponent";

export const filterDataResponse = (items: IItems[]): IItems[] => {
  const newData: IItems[] = [];
  items.map((item): void => {
    newData.push({
      name: item.name,
      git_url: item.git_url,
      stargazers_count: item.stargazers_count,
      updated_at: item.updated_at,
    });
  });

  return newData;
};
