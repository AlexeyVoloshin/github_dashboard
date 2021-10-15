import React from "react";
import { List } from "antd";
import { IPropsList } from "../../../core/components/types/ListComponent";
import { StarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { IconText } from "../IconText";

export const ListComponent: React.FC<IPropsList> = (
  props
): React.ReactElement => {
  return (
    <List
      itemLayout={"vertical"}
      size={"large"}
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      }}
      dataSource={props.dataRepo}
      renderItem={(item, index) => (
        <List.Item
          key={index}
          actions={[
            <IconText
              icon={StarOutlined}
              text={item.stargazers_count}
              key="list-vertical-star-o"
            />,
          ]}
        >
          <List.Item.Meta
            title={<a href={item.git_url}>{item.git_url}</a>}
            description={
              <Link to={`/card-details/${index}/${item.name}`}>
                {item.name}
              </Link>
            }
          />
          <p>Date last commit: {item.updated_at}</p>
        </List.Item>
      )}
    />
  );
};
