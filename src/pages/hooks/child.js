import React, { useState, useEffect, useRef } from 'react';

export default (props) => {
    const { value1 } = props;
    const previous = usePrevious(value1);
    const [counts, setFocusIndex] = useState(0)
    // useEffect 使用（props 和 state）都可以
    useEffect(()=>{
        console.log('value1改变我就出现',value1,counts)
    },[value1,counts])

    // useState使用
    const addHandler = () => {
        setFocusIndex(counts + 1)
    }

    return (
        <>
            <span>
                now: {value1}, before:{previous}
            </span>
            <button onClick={() => addHandler()} >增加</button> &nbsp;
        </>
    )
}

// 获取之前的props
function usePrevious(value){
    const ref = useRef()
    useEffect(()=>{
        ref.current = value;
    })
    return ref.current
}


