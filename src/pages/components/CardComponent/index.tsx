import React from "react";
import { Card, Avatar } from "antd";
import { ICardDetails } from "../../../core/components/types/ListComponent";
import { IconText } from "../IconText";
import { StarOutlined } from "@ant-design/icons";
import { Preloader } from "../../../core/components/Preloader";
import { Li, Root, Ul, WrapperList } from "./styled";
import { RenderList } from "../RenderList";

export const CardComponent: React.FC<ICardDetails> = (
  props
): React.ReactElement => {
  const { Meta } = Card;
  const { details } = props;
  return (
    <Root>
      <Card
        actions={[
          <span>{details!.name}</span>,
          <IconText
            icon={StarOutlined}
            text={details!.stargazers_count}
            key="list-vertical-star-o"
          />,
          <span>Date last commit: {details!.updated_at}</span>,
        ]}
      >
        <Meta
          avatar={<Avatar src={details!.owner.avatar_url} />}
          title={<a href={details!.owner.html_url}>{details!.owner.login}</a>}
          description={details!.description}
        />
        <p>List of used languages: </p>
        <Ul>
          {props.langIsLoading ? (
            <Preloader size="small" />
          ) : (
            Object.keys(props.languages).map((item, index) => (
              <Li className="list" key={index}>
                {item}
              </Li>
            ))
          )}
        </Ul>
        <p>The most active participants: </p>
        <WrapperList>
          {props.contribIsLoading ? (
            <Preloader size="small" />
          ) : (
            <RenderList data={props.contributors} />
          )}
        </WrapperList>
      </Card>
    </Root>
  );
};
