import { Avatar, Card } from "antd";
import { IList } from "../types";
import { LiCard, Ul } from "./styles";

export const RenderList: React.FC<IList> = (props): React.ReactElement => {
  const { Meta } = Card;
  return (
    <Ul>
      {props.data.map((item, index) => (
        <LiCard key={index}>
          <Card style={{ width: "100%" }}>
            <Meta
              avatar={<Avatar src={item.avatar_url} />}
              title={<a href={item.html_url}>{item.login}</a>}
            />
          </Card>
        </LiCard>
      ))}
    </Ul>
  );
};
