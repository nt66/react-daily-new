// 手写ajax方法
import React , { useState, useEffect } from 'react';

export default ()=>{
    const [responseText, setResponseText] = useState('');
    
    function ajax(url){
        const req = new XMLHttpRequest()

        req.open('GET', url, true) // 请求类型|URL|是否异步
        req.onload = ()=>{
            // responseText = JSON.parse(req.responseText)
            console.log('responseText', JSON.parse(req.responseText))
            setResponseText(req.responseText);
        }
        req.send();
    }

    useEffect(()=>{
        ajax('http://120.27.235.113:9002/suggest/getGameArticles?page=1&game_id=1');
    })
    return (
        <>
            <div>
                <h2>ajax示例</h2>
                <span>{responseText}</span>
            </div>
        </>
    )
}