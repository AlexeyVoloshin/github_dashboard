import React from "react";
import { Space } from "antd";
import { IPropsIconText } from "../types";

export const IconText = ({ icon, text }: IPropsIconText) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
