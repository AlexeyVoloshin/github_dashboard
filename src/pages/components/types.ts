import { IOwner } from "../../core/components/types/ListComponent";

export interface IPropsIconText {
  icon: any;
  text: number;
}

export interface IListItem {
  [ket: string]: number;
}

export interface IPropsList {
  data: IListItem;
}

export interface IList {
  data: IOwner[];
}
