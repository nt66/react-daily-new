// generater 示例
export default ()=>{
    function* tell(){
        yield 'a';
        yield 'b';
        return 'c';
    };
    let k = tell();

    // 对象iterator化
    let Obj = { a:1,b:2,c:3 };
    let Ary = [1,2,3,4,5];

    // 方法一
    function* iterEntries(obj){
        let keys = Object.keys(obj);
        for(let i=0;i<keys.length;i++){
            let key = keys[i];
            let value = obj[key];
            yield [key, value]
        }
    }
    for(let item of iterEntries(Obj)){
        console.log('iterEntries:',item)
    }

    // 方法二
    // var iterCollection = {
    //     items:[],
    //     *[Symbol.iterator]() {
    //         for(let i of this.items){
    //         yield i;
    //         }
    //     }
    // }
    // iterCollection.items = Obj;

    

    // for(let item of iterCollection){
    // console.log('iterCollection:',item)
    // }

    return (
        <>
            <div>
                <h2>流程控制</h2>
                <div>{k.next().value}</div>
                <div>{k.next().value}</div>
                <div>{k.next().value}</div>
                <div>{k.next().value}</div>
            </div>
            <div>
                <h2>遍历器</h2>
                
            </div>
        </>
    )
}