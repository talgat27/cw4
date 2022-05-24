import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createQuestion } from '../../store/actions';
import { Table, Tag, Space } from 'antd';

function QuestionList() {
    const questions = useSelector((store => store.questionsList));
    const columns = [
        {
            title: 'Question',
            dataIndex: questions.name,
            key: questions.name,
        },
        {
            title: 'Answer One',
            dataIndex: questions.answers[0].answer,
            key: 'age',
        },
        {
            title: 'Answer Two',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Answer Three',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Answer Four',
            dataIndex: 'answerFour',
            key: '',
        },
    ];

    return (
        <div>
            <h1>Question List</h1>
            <div>
                {/* {questions.map(question => (
                    <div key={question.id} style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div>{question.name}</div>
                        <div>{question.answers[0].answerOne}</div>
                    </div>
                ))} */}
                <Table columns={columns} dataSource={questions} />
            </div>
        </div>
    )
}

export default QuestionList;