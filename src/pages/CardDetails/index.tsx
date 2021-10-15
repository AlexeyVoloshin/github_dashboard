import React from "react";
import { IItems, IPropsList } from "../../core/components/types/ListComponent";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { GET_CONTRIBUTORS, GET_LANGUAGE, IParams } from "./types";
import { CardComponent } from "../components/CardComponent";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { routes } from "../../core/routes";
import { Preloader } from "../../core/components/Preloader";
import { Wrapper } from "./styles";

export const CardDetails: React.FC<IPropsList> = (
  props
): React.ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<IParams>();

  const { repo, isLoading: repoIsLoading } = useSelector(
    (state: RootState) => state.repositories
  );
  const { contributors, isLoading } = useSelector(
    (state: RootState) => state.contributors
  );
  const { languages, isLoading: langIsLoading } = useSelector(
    (state: RootState) => state.languages
  );

  const [itemRepo, setItemRepo] = React.useState<IItems>();

  const getContributors = React.useCallback(
    (url: string) => {
      dispatch({ type: GET_CONTRIBUTORS, payload: url });
    },
    [dispatch]
  );

  const getLanguages = React.useCallback(
    (url: string) => {
      dispatch({ type: GET_LANGUAGE, payload: url });
    },
    [dispatch]
  );

  React.useEffect(() => {
    if (repo.length > 0) {
      const item = repo[Number(params.id)];

      if (!item) return history.push("/");

      setItemRepo(item);
      getContributors(item.contributors_url);
      getLanguages(item.languages_url);
    } else {
      history.push("/");
    }
  }, [history, params.id, repo, getContributors, getLanguages]);

  return (
    <Wrapper>
      {!repoIsLoading && itemRepo ? (
        <CardComponent
          details={itemRepo}
          contributors={contributors}
          languages={languages}
          contribIsLoading={isLoading}
          langIsLoading={langIsLoading}
        />
      ) : (
        <Preloader size="large" />
      )}
      <div>
        <Button
          type="primary"
          icon={<ArrowLeftOutlined />}
          onClick={() => history.push(routes.static.mainPage)}
        >
          Back
        </Button>
      </div>
    </Wrapper>
  );
};
