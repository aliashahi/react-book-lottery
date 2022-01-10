import React, { useState } from "react";
import moment from "moment";
import { DATE_FORMAT } from "../../constants";
import { ContainerHeader } from "../../shared";
import TextArea from "antd/lib/input/TextArea";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Switch,
  FormInstance,
  Spin,
} from "antd";
import { supabase } from "../../services/supabase.client";
import { StorageHandler } from "../../utils/storage.class";
import { AlertService } from "../../services/alert.service";
import { useHistory } from "react-router-dom";

type SizeType = Parameters<typeof Form>[0]["size"];

const Layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 21 },
};

export default function CreateLottery(props: any) {
  const formRef = React.createRef<FormInstance>();
  const [pending, setPending] = useState<boolean>(false);
  const history = useHistory();

  const onFinish = async (values: any) => {
    let id = StorageHandler.getUserData()?.id;
    setPending(true);
    await supabase
      .from("lottery")
      .insert({
        ...values,
        user_id: id,
        status: "ACTIVE",
        access: values.access ? "PRIVATE" : "PUBLIC",
      })
      .then(({ body, error, data }) => {
        if (error) {
          AlertService.Error(error.message);
        }
        if (data) {
          history.push("/lottery-list");
          AlertService.Success("Lottery created Successfully!");
        }
        setPending(false);
      });
  };

  const onReset = () => {
    formRef.current!.resetFields();
  };

  return (
    <div className="!w-full flex-1 flex flex-wrap p-4 overflow-y-scroll overflow-x-hidden">
      <Form
        className="w-full"
        layout="horizontal"
        initialValues={{
          remember: true,
          create_date: moment(new Date().toISOString(), DATE_FORMAT),
          lottery_date: moment(new Date().toISOString(), DATE_FORMAT),
          access: true,
        }}
        size={"large" as SizeType}
        ref={formRef}
        name="control-ref"
        onFinish={onFinish}
      >
        <ContainerHeader Label="Define New Lottery" />
        <Form.Item
          {...Layout}
          label="Title"
          name="title"
          required={true}
          rules={[
            {
              required: true,
              message: "please enter a title for your Lottery",
            },
          ]}
        >
          <Input required />
        </Form.Item>
        <div className="flex">
          <Form.Item
            className="w-1/3"
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 15 }}
            label="Create Date"
            name="create_date"
          >
            <DatePicker disabled={true} />
          </Form.Item>
          <Form.Item
            className="w-1/3 text-center"
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 15 }}
            label="Lottery Date"
            name="lottery_date"
            required={true}
          >
            <DatePicker
              defaultValue={moment(new Date().toISOString(), DATE_FORMAT)}
            />
          </Form.Item>
          <Form.Item className="w-1/3 text-center" name="access">
            <Switch
              className="m-auto"
              checkedChildren="Private"
              unCheckedChildren="Public"
              defaultChecked
            />
          </Form.Item>
        </div>
        <Form.Item
          {...Layout}
          label="Description"
          name="desc"
          className="col-span-2"
          required={true}
        >
          <TextArea rows={5} required />
        </Form.Item>

        <Form.Item className="w-full flex justify-end">
          <Button
            className="ml-auto mr-2 flex justify-between"
            disabled={pending}
            type="primary"
            htmlType="submit"
          >
            {pending ? <Spin size="small" className="!mx-4" /> : ""}
            Submit
          </Button>
          <Button htmlType="button" disabled={pending} onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
