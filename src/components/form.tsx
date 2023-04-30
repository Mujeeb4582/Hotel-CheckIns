import { Button, Form, Input } from "antd";
import { useCallback } from "react";
import { useMutation } from "@apollo/client";
import { INSERT_SINGLE_CHECKIN } from "../../graphql/mutations";

const MyForm = (props: { setopen: any }) => {
  const [form] = Form.useForm();
  const { setopen } = props;

  // Define the mutation function and its variables
  const [createCheckIn, { loading }] = useMutation(INSERT_SINGLE_CHECKIN, {
    onError: (error) => {
      console.error(error);
    },
    onCompleted: () => {
      setopen(false);
      form.resetFields();
    },
  });

  const onFinish = useCallback(
    (values: any) => {
      // Call the mutation function with the form values
      createCheckIn({
        variables: {
          checkIn: {
            name: values.title,
            image_url: values.imageUrl,
            comment: values.comment,
          },
        },
      });
    },
    [createCheckIn]
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
          name="comment"
          rules={[
            { required: true, message: "Please enter the comment!" },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
          <Input placeholder="Comment" />
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
          <Button
            type="primary"
            className="add-button"
            htmlType="submit"
            loading={loading}
          >
            Create Check In
          </Button>
        </div>
      </Form>
    </>
  );
};

export default MyForm;
