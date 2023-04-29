import { Button, Form, Input } from "antd";
import { useCallback } from "react";

const MyForm = (props: { setopen: any }) => {
  const [form] = Form.useForm();
  const { setopen } = props;

  const onFinish = useCallback(
    (values: any) => {
      console.log(values);
      setopen(false);
      form.resetFields();
    },
    [form]
  );

  const onCancel = useCallback(() => {
    setopen(false);
    form.resetFields();
  }, [form]);
  return (
    <>
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="title"
          rules={[
            { required: true, message: "Please enter the title!" },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
          <Input placeholder="Check In Title" />
        </Form.Item>
        <Form.Item
          name="imageUrl"
          rules={[
            { required: true, message: "Please enter the imageUrl!" },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
          <Input placeholder="Image Url" />
        </Form.Item>
        <div style={{ textAlign: "right" }}>
          <Button style={{ marginRight: 8 }} onClick={onCancel}>
            Cancel
          </Button>
          <Button type="primary" className="add-button" htmlType="submit">
            Create Check In
          </Button>
        </div>
      </Form>
    </>
  );
};

export default MyForm;
