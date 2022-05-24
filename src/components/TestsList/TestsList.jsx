import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function Tests() {
    const tests = useSelector((store => store.tests));

    return (
        <div>
            <h1>Tests List</h1>
            <div>
                {/* {tests.map(test => (
                    <div key={test.id} style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div>{test.name}</div>
                        <div>{test.questions[1]}</div>
                        <div>{test.questions[2]}</div>
                    </div>
                ))} */}
            </div>
        </div>
    )
}

export default Tests;