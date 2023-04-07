import React from "react";
import "./Form.css";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import { Modal } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { Select } from "antd";

const FormModal = ({ setModelOpen, modelOpen }) => {
  const onFinish = (values) => {
    console.log("Success:", values);

    setModelOpen(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleOk = () => {
    setModelOpen(false);
  };

  const handleCancel = () => {
    setModelOpen(false);
  };

  return (
    <div>
      <Modal
        title="Add new Event"
        open={modelOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          initialValues={{}}
        >
          <Form.Item label="Name" name="name">
            <Input placeholder="Please enter your name" />
          </Form.Item>
          <Form.Item label="Age" name="age">
            <InputNumber
              placeholder="Please enter your age"
              min={18}
              max={45}
            />
          </Form.Item>
          <Form.Item label="Adress" name="adress">
            <Input placeholder="Please enter your adress" />
          </Form.Item>

          <Form.Item
            label="Prefered"
            name="selectItem"
            style={{ width: "100%" }}
          >
            <Select
              placeholder="Select a tag"
              mode={"multiple"}
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "teacher",
                  label: "teacher",
                },
                {
                  value: "developer",
                  label: "developer",
                },
                {
                  value: "nice",
                  label: "nice",
                },
                {
                  value: "cool",
                  label: "cool",
                },
              ]}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FormModal;
