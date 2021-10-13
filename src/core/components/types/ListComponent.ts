// export interface IDataList {
//   nameRepo: string;
//   countStars: number;
//   dateLastCommit: Date;
//   link: string;
// }

export interface IPropsList {
  dataRepo: IItems[];
}

export interface IItems {
  name: string;
  stargazers_count: number;
  updated_at: Date;
  git_url: string;
}

export interface IDataRepo {
  total_count: number;
  incomplete_results: true;
  items: IItems[];
}

// export interface IResponceData {
//   status: number;
//   message: string;
//   data: IDataRepo;
// }
