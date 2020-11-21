// asyncawait 示例
export default ()=>{
    // 作用3：异步操作同步化
    // 执行器
    // function fork(generator){
    //     const it  = generator()

    //     function go(result){
    //         if(result.done) return result.value;

    //         return result.value.then(data=>{
    //             go(it.next(data))
    //         }).catch(err=>{
    //             go(it.throw(err))
    //         })
    //     }
    //     go(it.next())

    // };

    // promise 包装器
    function call(url){
        return new Promise((resolve,reject)=> {
            return fetch(url)
                .then(res=>res.json())
                .then(res=>resolve(res))
                .catch(err=>reject(err))
        });
    }
    // async 方法返回 promise 的resolve值
    async function fetchTopics(){
        // const topic = await call('http://120.27.235.113:9002/suggest/getGameArticles?page=1&game_id=1') // 方法一
        const topic = await fetch('http://120.27.235.113:9002/suggest/getGameArticles?page=1&game_id=1').then(res=>res.json()) // 方法二(await 返回 promise 返回的内容 resolve或者reject的值)
        console.log('fetch1 topic:',topic);

        const id = topic.data.article[0].id;
        // const detail = await call(`http://120.27.235.113:9002/suggest/articleDetail?article_id=${Number(id)}&user_id=0`) // 方法一
        const detail = await fetch(`http://120.27.235.113:9002/suggest/articleDetail?article_id=${Number(id)}&user_id=0`).then(res=>res.json())  // 方法二(await 返回 promise 返回的内容 resolve或者reject的值)
        console.log('fetch2 detail:',detail);
    }

    fetchTopics()

    return (
        <>
            <div>
                <h2>async_await示例</h2>
            </div>
        </>
    )
}