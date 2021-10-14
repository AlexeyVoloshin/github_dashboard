import React from "react";
import { Card, Avatar } from "antd";
import { ICardDetails } from "../../../core/components/types/ListComponent";
import { IconText } from "../IconText";
import { StarOutlined } from "@ant-design/icons";

interface IListItem {
  [ket: string]: number;
}

interface IPropsList {
  data: IListItem;
}

const RenderList: React.FC<IPropsList> = (props): React.ReactElement => {
  return (
    <ul>
      {Object.keys(props.data).map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export const CardComponent: React.FC<ICardDetails> = (
  props
): React.ReactElement => {
  const { Meta } = Card;
  const { details } = props;
  return (
    <div>
      <Card
        actions={[
          <span>{details!.name}</span>,
          <IconText
            icon={StarOutlined}
            text={details!.stargazers_count}
            key="list-vertical-star-o"
          />,
          <span>data last commit: {details!.updated_at}</span>,
        ]}
      >
        <Meta
          avatar={<Avatar src={details!.owner.avatar_url} />}
          title={<a href={details!.owner.html_url}>{details!.owner.login}</a>}
          description={details!.description}
        />
        <p>List of used languages: </p>
        <ul>
          <li>html</li>
          <li>js</li>
          <li>TypeScript</li>
        </ul>
        {/* <RenderList data={} /> */}
      </Card>
    </div>
  );
};
