import React, { useState } from "react";
import {
  Button,
  Card,
  Form,
  Input,
  message,
  Radio,
  Checkbox,
  DatePicker,
  Steps,
  Space,
  Switch,
} from "antd";
import Title from "antd/es/typography/Title";

const steps = [
  {
    title: "",
    fields: ["username", "password"],
    content: (
      <>
        <Title level={3}>General:</Title>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>
      </>
    ),
  },
  {
    title: "",
    fields: ["email", "phone"],
    content: (
      <>
        <Title level={3}>Contact:</Title>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email" },
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[
            {
              required: true,
              message: "Please enter your phone number",
            },
            {
              pattern: /^[0-9]{10}$/,
              message: "Phone number must be exactly 10 digits",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </>
    ),
  },
  {
    title: "",
    fields: ["birthdate", "gender", "hobbies", "otherHobby", "acceptTerms"],
    content: (
      <>
        <Title level={3}>Confirm:</Title>
        <Form.Item
          name="birthdate"
          label="Birth Date"
          rules={[{ required: true, message: "Please select your birth date" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please select your gender" }]}
        >
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="hobbies"
          label="Hobbies"
          rules={[{ required: true, message: "Please select your hobbies" }]}
        >
          <Checkbox.Group>
            <Checkbox value="reading">Reading</Checkbox>
            <Checkbox value="traveling">Traveling</Checkbox>
            <Checkbox value="sports">Sports</Checkbox>
            <Checkbox value="other">Other</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item
          name="otherHobby"
          label="Other Hobby"
          rules={[{ required: false }]}
        >
          <Input placeholder="Enter other hobby" />
        </Form.Item>
        <Form.Item name="acceptTerms" valuePropName="checked">
          <Switch /> <span>Accept the terms</span>
        </Form.Item>
      </>
    ),
  },
];

const MyForm: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});

  const next = () => {
    form
      .validateFields(steps[current].fields)
      .then((values) => {
        setFormData({ ...formData, ...values });
        setCurrent(current + 1);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        const finalFormData = { ...formData, ...values };
        console.log("Form Values:", finalFormData);
        message.success("Processing complete!");
        console.log("Username:", finalFormData.username);
        console.log("Password:", finalFormData.password);
        console.log("Email:", finalFormData.email);
        console.log("Phone:", finalFormData.phone);
        console.log("Birthdate:", finalFormData.birthdate);
        console.log("Gender:", finalFormData.gender);
        console.log("Hobbies:", finalFormData.hobbies);
        console.log("Other Hobby:", finalFormData.otherHobby);
        console.log("Accept Terms:", finalFormData.acceptTerms);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(45deg, #fdfffd, #8aaed6, #6c6695)",
  };

  return (
    <div style={containerStyle}>
      <Card title="" style={{ width: 400 }}>
        <Space
          direction="horizontal"
          style={{ width: "100%", justifyContent: "center" }}
        >
          <Title level={2}>Sign up Form</Title>
        </Space>
        <Steps current={current} items={items} style={{ marginBottom: 24 }} />
        <Form form={form} layout="vertical" initialValues={formData}>
          {steps[current].content}
        </Form>
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={next}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={handleSubmit}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={prev}>
              Previous
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default MyForm;
