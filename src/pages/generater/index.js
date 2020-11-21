// generater 示例
export default ()=>{
    // 作用1:函数流程控制
    function* tell(){
        yield 'a';
        yield 'b';
        return 'c';
    };
    let k = tell();

    // 作用2:对象iterator化
    let Obj = { a:1,b:2,c:3 };
    let Ary = [1,2,3,4,5];
    function* iterEntries(obj){
        let keys = Object.keys(obj);
        for(let i=0;i<keys.length;i++){
            let key = keys[i];
            let value = obj[key];
            yield [key, value]
        }
    }
    for(let item of iterEntries(Obj)){
        console.log('作用2:对象iterator化:',item)
    }

    // 作用3：异步操作同步化
    // 执行器
    function fork(generator){
        const it  = generator()

        function go(result){
            if(result.done) return result.value;

            return result.value.then(data=>{
                go(it.next(data))
            }).catch(err=>{
                go(it.throw(err))
            })
        }
        go(it.next())

    };

    // promise 包装器
    function call(url){
        return new Promise((resolve,reject)=> {
            fetch(url)
                .then(res=>res.json())
                .then(res=>resolve(res))
                .catch(err=>reject(err))
        });
    }

    function* fetchTopics(){
        // const topic = yield call('http://120.27.235.113:9002/suggest/getGameArticles?page=1&game_id=1')
        const topic = yield fetch('http://120.27.235.113:9002/suggest/getGameArticles?page=1&game_id=1').then(res=>res.json())
        console.log('fetch1 topic:',topic.data.article[0].id);
        const id = topic.data.article[0].id;
        // const detail = yield call(`http://120.27.235.113:9002/suggest/articleDetail?article_id=${Number(id)}&user_id=0`)
        const detail = yield fetch(`http://120.27.235.113:9002/suggest/articleDetail?article_id=${Number(id)}&user_id=0`).then(res=>res.json())
        console.log('fetch2 detail:',detail);
    }

    fork(fetchTopics)
    // const fetchT = fetchTopics();
    // fetchT.next();
    // fetchT.next();

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