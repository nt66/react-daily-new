// export default ()=>{
//     return(<div>我是子元素</div>)
// }

const a = () =>{
    return(<div>我是子元素</div>)
}
const b = () =>{
    return(<div>我是子元素3</div>)
}

export {
    a,
    b,
}

export default ()=> <div>我是子元素1000</div>