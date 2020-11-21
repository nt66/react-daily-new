// ajax 示例
export default ()=>{

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
        // console.log('9999999',fetch('http://120.27.235.113:9002/suggest/getGameArticles?page=1&game_id=1').then(res=>res.json()).then(res=>console.log(res)))
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
                <h2>ajax示例</h2>
            </div>
        </>
    )
}