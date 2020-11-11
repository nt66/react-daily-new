import React,{useEffect} from 'react';
import {createPortal} from 'react-dom';

export default (props) =>{
    const { children } = props;
    const el = document.createElement('div');    
    useEffect(()=>{
        const root2 = document.getElementById('root2');
        root2.appendChild(el)
    });
    return(
        createPortal(
            <div class='dialog'>{children}</div>,
            el
        )
    ) 
}