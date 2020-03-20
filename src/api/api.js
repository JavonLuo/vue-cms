import axios from 'axios'
// 轮播图
let getBanner = ()=>{
    let url = 'http://www.liulongbin.top:3005/api/getlunbo'
    return axios.get(url)
}

// 新闻资讯
let getNewsList = ()=>{
    let url = 'http://www.liulongbin.top:3005/api/getnewslist'
    return axios.get(url)
}

export {
    getBanner,
    getNewsList
}