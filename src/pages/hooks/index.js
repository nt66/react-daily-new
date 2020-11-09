import React, { useState } from 'react';
import './index.css';

const HookTest =  (props) => {
    const [counts, setFocusIndex] = useState(0)

    // useEffect使用
    const addHandler = () => {
        setFocusIndex(counts + 1)
    }

    return (
        <div>
            <h1>hooks</h1>
            <div>
                <button onClick={() => addHandler()} >增加</button>
                <span>{counts}</span>
            </div>
        </div>
    )
}

export default HookTest
