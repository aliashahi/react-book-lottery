import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
const { Meta } = Card;
export default function LotteryItem(props: any) {
  return (
    <div className="p-2">
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
  );
}
