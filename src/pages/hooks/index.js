import React, { useState } from 'react';
import './index.css';

const HookTest =  (props) => {
    const [counts, setFocusIndex] = useState(0)

    // useState使用
    const addHandler = () => {
        setFocusIndex(counts + 1)
    }

    const clearHandler =() =>{
        setFocusIndex(0)
    }
    
    return (
        <div>
            <h1>hooks</h1>
            <div>
                <strong> useState例子 </strong> &nbsp;
                <button onClick={() => clearHandler()} >归零</button> &nbsp;
                <button onClick={() => addHandler()} >增加</button> &nbsp;
                <span>{counts}</span>
            </div>
            
        </div>
    )
}

export default HookTest
