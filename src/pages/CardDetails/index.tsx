import React from "react";
import { IItems, IPropsList } from "../../core/components/types/ListComponent";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IParams } from "./types";
import { CardComponent } from "../components/CardComponent";

export const CardDetails: React.FC<IPropsList> = (
  props
): React.ReactElement => {
  const history = useHistory();
  const params = useParams<IParams>();

  const { repo } = useSelector((state: RootState) => state.repositories);

  const [itemRepo, setItemRepo] = React.useState<IItems>();

  React.useEffect(() => {
    if (repo.length > 0) {
      const item = repo[Number(params.id)];
      if (!item) history.push("/");
      setItemRepo(item);
    } else {
      history.push("/");
    }
  }, [history, params.id, repo]);

  return <>{itemRepo && <CardComponent details={itemRepo} />}</>;
};
