import React, { useContext } from 'react';
import { AppContext } from './utils';

export default (props) => {
    const { name } = useContext(AppContext)
    return (
        <>
            <span>父亲的名字:{name}</span>&nbsp;
        </>
    )
}
