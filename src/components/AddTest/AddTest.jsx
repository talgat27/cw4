import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { createQuestion } from '../../store/actions';
import { Button, Form, Input } from "antd";
import { v4 as uuid } from 'uuid';
import './AddTest.scss'
import QuestionList from "../QuestionsList/QuestionList";

function AddTest() {
    const dispatch = useDispatch();

    const onFinish = (values) => {
        const newAnswers = [
            {
                answer: values.answerOne,
                isCorrect: false,
            },
            {
                answer: values.answerTwo,
                isCorrect: false,
            },
            {
                answer: values.answerThree,
                isCorrect: false,
            },
            {
                answer: values.answerFour,
                isCorrect: false,
            }
        ]

        const newQuestion = {
            id: uuid(),
            name: values.question,
            answers: newAnswers,
        }

        console.log('Success:', values);

        dispatch(createQuestion(newQuestion));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <div className="form-container">
                <Form
                    labelCol={{ span: 9 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Question"
                        name="question"
                        rules={[{ required: true, message: 'Please input question!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Answer One"
                        name="answerOne"
                        rules={[{ required: true, message: 'Please input answer one!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Answer Two"
                        name="answerTwo"
                        rules={[{ required: true, message: 'Please input answer two!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Answer three"
                        name="answerThree"
                        rules={[{ required: true, message: 'Please input answer three!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Answer Four"
                        name="answerFour"
                        rules={[{ required: true, message: 'Please input answer four!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button className="btn" type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <QuestionList/>
        </div>
    );
}

export default AddTest;;