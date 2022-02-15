import { Card, Avatar, Popover, Popconfirm } from "antd";
import { DateHandler } from "../../utils";
import { Lottery } from "../../shared/models/lottery.mode";
import {
  BookOutlined,
  EditOutlined,
  EllipsisOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { LOTTERY_IMAGE } from "../../constants";
import { useState } from "react";

const { Meta } = Card;

export default function LotteryItem({
  lottery,
  onShowDetails,
  onDeleteLottery,
}: {
  onShowDetails: () => void;
  onDeleteLottery: (id: string) => void;
  lottery: Lottery;
}) {
  const [visible, setVisible] = useState<boolean>(false);

  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (visible: boolean) => {
    setVisible(visible);
  };

  const createOptionMenu = () => {
    return (
      <div>
        <li
          className="w-full flex items-center px-4 py-2 hover:text-blue-500 cursor-pointer transition-all"
          onClick={hide}
        >
          <HeartOutlined className="px-2 !text-red-500" />
          add to favorites
        </li>
        <li
          className="w-full flex items-center px-4 py-2 hover:text-blue-500 cursor-pointer transition-all"
          onClick={hide}
        >
          <BookOutlined className="px-2" />
          add to archive
        </li>
        <hr className="bg-gray-200 text-gray-200" />
        <Popconfirm
          title="Are you sure to delete this lottery?"
          onConfirm={() => {
            hide();
            onDeleteLottery(lottery.id);
          }}
          onCancel={hide}
          okText="Yes"
          cancelText="No"
        >
          <li className="justify-center w-full bg-red-700 text-white flex items-center px-4 py-2 hover:bg-white hover:text-red-500 cursor-pointer transition-all">
            delete lottery
          </li>
        </Popconfirm>
      </div>
    );
  };

  return (
    <div className="p-2 hover:scale-105 transition-all cursor-pointer">
      <Card
        style={{ width: 300 }}
        cover={<img alt="lottery.img" src={LOTTERY_IMAGE} />}
        actions={[
          <Popover
            content={createOptionMenu()}
            trigger="click"
            visible={visible}
            onVisibleChange={handleVisibleChange}
          >
            <EllipsisOutlined key="ellipsis" />
          </Popover>,
          <EditOutlined onClick={onShowDetails} key="edit" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={lottery.title}
          description={
            lottery.desc +
            " " +
            DateHandler.createDateFormatToShow(lottery.create_date) +
            " to " +
            DateHandler.createDateFormatToShow(lottery.lottery_date)
          }
        />
      </Card>
    </div>
  );
}
