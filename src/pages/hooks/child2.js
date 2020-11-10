import React, { useState, useMemo, useCallback } from 'react';
export default (props) => {
    const [count, setCount] = useState(0)
    const [val,setVal] = useState('华子')

    // 没有用useMemo情况
    // function computer(){
    //     console.log('不管谁，我都渲染')
    //     return count*10;
    // }

    const computer = useMemo(()=>{
        console.log('只有count改变，我才渲染')
        return count*10;
    },[count])

    // const click2 = useCallback(()=>{
    //     console.log('只有在count改变的时候我才')
    // },[count])
    
    const click2 = useCallback(()=>{
        return ()=> console.log('只有在count改变时我才会重建',count)
    },[count])

    return (
        <>
            <button onClick={()=>setCount(count+1)}>点击+1</button>&nbsp;
            <button onClick={click2()}>click2</button>&nbsp;
            <input value={val} onChange={event=>setVal(event.target.value)} />&nbsp;
            <span>{count}---{computer}</span>&nbsp;
        </>
    )
}
