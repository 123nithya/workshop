import React from 'react'
import { Button, Form, Input, Card, InputNumber } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
}

function ProForm() {
    
    const [form] = Form.useForm()
    const [number, setNumber] = useState(0);

    const e_id = Form.useWatch("eId", form);
    const e_name = Form.useWatch("eName", form);
    const e_dept = Form.useWatch("eDept", form);
    const e_phone = Form.useWatch("ePhone", form);
    const e_email = Form.useWatch("eEmail", form);
    const e_shift = Form.useWatch("eShift", form);
    const e_salary = Form.useWatch("eSalary", form);

    async function submit(e) {
        e.preventDefault();

        const data = {
            empId: e_id,
            empName: e_name,
            empDept: e_dept,
            phoneNo: parseInt(e_phone),
            email: e_email,
            shift: e_shift,
            salary: parseInt(e_salary)
        };
        console.log(data);
        await axios.post("http://localhost:8080/post", data)

    }

    return (
        <div>
            <Card style={{ backgroundColor: "Lavender", marginLeft: "300px", marginTop: "150px", marginRight: "300px" }}>

                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={form}
                    autoComplete="off"
                    action='POST'
                >
                <Form.Item label="Employee ID" name="eId" rules={[
                    {
                        required: true,
                    },
                ]}>
                    <InputNumber />
                </Form.Item>
                    <Form.Item
                        label="Employee Name"
                        name="eName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Employee Department"
                        name="eDept"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Phone Number" name="ePhone">
                        <Input
                            type="text"
                            style={{
                                width: 100,
                            }}
                        />
                    </Form.Item>
                    <Form.Item label="Email" name="eEmail">
                        <Input
                            type="text"
                            style={{
                                width: 500,
                            }}
                        />
                    </Form.Item>
                    <Form.Item label="Shift" name="eShift">
                        <Input
                            type="text"
                            style={{
                                width: 100,
                            }}
                        />
                    </Form.Item>
                    <Form.Item label="Salary" name="eSalary">
                        <Input
                            type="text"
                            style={{
                                width: 100,
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        name="submit"
                    >
                        <Button type="primary" htmlType="submit" onClick={submit} style={{ backgroundColor: "white", color: "Black" }}>
                        <Link to="/get">
                        Submit
                        </Link>
                        
                       
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

            <br />
            <br />
            <br />
            <br />



        </div>
    )
}

export default ProForm;
