import { IItems, IOwner } from "../core/components/types/ListComponent";

export const filterDataResponse = (items: IItems[]): IItems[] => {
  const newData: IItems[] = [];
  items.map((item): void => {
    newData.push({
      name: item.name,
      git_url: item.git_url,
      stargazers_count: item.stargazers_count,
      updated_at: item.updated_at,
      contributors_url: item.contributors_url,
      description: item.description,
      languages_url: item.languages_url,
      owner: {
        avatar_url: item.owner.avatar_url,
        html_url: item.owner.html_url,
        login: item.owner.login,
      },
    });
  });

  return newData;
};

export const filterDataContributors = (items: IOwner[]): IOwner[] => {
  const newData: IOwner[] = [];
  items.map((item): void => {
    newData.push({
      login: item.login,
      avatar_url: item.avatar_url,
      html_url: item.html_url,
    });
  });

  return newData;
};
