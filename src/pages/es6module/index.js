// 引用一个对象时必须export default
// 引用多个对象时分开export 可以没有export default
// 没有export defalut时，引用一个对象用 import * as Child form './components/child';

// import * as Child from './components/child';
// import Child from './components/child';

import Child,{a as A, b as B} from './components/child'; // react多引用的模式

export default ()=>{
    return (
        <>
            <div>我是父元素</div>
            <Child/>
            <A/>
            <B/>
        </>
    )
}