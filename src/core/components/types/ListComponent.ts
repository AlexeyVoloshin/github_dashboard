export interface IPropsList {
  dataRepo: IItems[];
}

export interface ICardDetails {
  details: IItems | undefined;
}

export interface IContributors {
  contributors: IOwner[];
}

export interface IOwner {
  avatar_url: string;
  login: string;
  html_url: string;
}

export interface IItems {
  name: string;
  stargazers_count: number;
  updated_at: Date;
  git_url: string;
  contributors_url: string;
  description: string;
  languages_url: string;
  owner: IOwner;
}

export interface IDataRepo {
  total_count: number;
  incomplete_results: true;
  items: IItems[];
}
