import React from 'react';
import { List, Space } from 'antd';
import { IPropsList } from '../types/ListComponent';
import { StarOutlined } from '@ant-design/icons';

interface IPropsIconText {
  icon: any;
  text: number;
}

const IconText = ({ icon, text }: IPropsIconText) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const ListComponent: React.FC<IPropsList> = (
  props
): React.ReactElement => {
  return (
    <List
      itemLayout={'vertical'}
      size={'large'}
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10
      }}
      dataSource={props.dataRepo}
      footer={
        <div>
          <b>Footer</b>
        </div>
      }
      renderItem={(item, index) => (
        <List.Item
          key={index}
          actions={[
            <IconText
              icon={StarOutlined}
              text={item.countStars}
              key="list-vertical-star-o"
            />
          ]}
        >
          <List.Item.Meta
            title={<a href={item.link}>{item.link}</a>}
            description={item.nameRepo}
          />
          <p>Date last commit: {item.dateLastCommit}</p>
        </List.Item>
      )}
    />
  );
};
