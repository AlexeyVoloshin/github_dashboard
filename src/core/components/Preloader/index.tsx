import { Spin, SpinProps } from "antd";
import React from "react";

export const Preloader: React.FC<SpinProps> = (props) => {
  return <Spin {...props} tip="Loading..." />;
};
