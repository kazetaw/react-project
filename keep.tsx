import React from "react";
import { useStepsForm } from "sunflower-antd";
import { Steps, Input, Button, Form, Result } from "antd";

const { Step } = Steps;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default () => {
  const {
    form,
    current,
    gotoStep,
    stepsProps,
    formProps,
    submit,
    formLoading,
  } = useStepsForm({
    async submit(values) {
      const { username, email, address } = values;
      console.log(username, email, address);
      await new Promise((r) => setTimeout(r, 1000));
      return "ok";
    },
    total: 3,
  });

  const formList = [
    <>
      <h1> General:</h1>
      <Form.Item
        label="username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input username",
          },
        ]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button onClick={() => gotoStep(current + 1)}>Next</Button>
      </Form.Item>
    </>,

    <>
      <h1>Contact:</h1>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input address",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button
          style={{ marginRight: 10 }}
          type="primary"
          loading={formLoading}
          onClick={() => {
            submit().then((result) => {
              if (result === "ok") {
                gotoStep(current + 1);
              }
            });
          }}
        >
          Submit
        </Button>
        <Button onClick={() => gotoStep(current - 1)}>Prev</Button>
      </Form.Item>
    </>,
  ];

  return (
    <div>
      <Steps {...stepsProps}>
        <Step />
        <Step />
        <Step />
      </Steps>

      <div style={{ marginTop: 60 }}>
        <Form {...layout} {...formProps} style={{ maxWidth: 600 }}>
          {formList[current]}
        </Form>

        {current === 2 && (
          <Result
            status="success"
            title="Submit is succeed!"
            extra={
              <>
                <Button
                  type="primary"
                  onClick={() => {
                    form.resetFields();
                    gotoStep(0);
                  }}
                >
                  Buy it again
                </Button>
                <Button>Check detail</Button>
              </>
            }
          />
        )}
      </div>
    </div>
  );
};
