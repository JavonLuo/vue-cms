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

// 新闻详情
let getNewsInfo = (newsid)=>{
    let url = `http://www.liulongbin.top:3005/api/getnew/${newsid}`
    return axios.get(url)
}

// 获取评论信息
let getComment = (newsid,pageIndex)=>{
    let url = `http://www.liulongbin.top:3005/api/getcomments/${newsid}?pageindex=${pageIndex}`
    return axios.get(url)
}

// 提交评论
let postComment = (newsid,msg)=>{
    let url =  `http://www.liulongbin.top:3005/api/postcomment/${newsid}`
    return axios.post(url,{content:msg})
}

// 图片分类
let getImgCategory = ()=>{
    let url = 'http://www.liulongbin.top:3005/api/getimgcategory'
    return axios.get(url)
}

// 图片列表
let getImg = (cateid)=>{
    let url = `http://www.liulongbin.top:3005/api/getimages/${cateid}`
    return axios.get(url)
}

// 图片详情
let getImgDetail = (imgid) =>{
    let url = `http://www.liulongbin.top:3005/api/getimageInfo/${imgid}`
    return axios.get(url)
}

// 缩略图
let getThumImages = (imgid) =>{
    let url = `http://www.liulongbin.top:3005/api/getthumimages/${imgid}`
    return axios.get(url)
}

// 获取商品列表数据
let getGoodsList = (pageIndex) =>{
    let url = `http://www.liulongbin.top:3005/api/getgoods?pageindex=${pageIndex}`
    return axios.get(url)
}

// 获取商品信息
let getGoodsInfoById = (goodsid) =>{
    let url = `http://www.liulongbin.top:3005/api/goods/getinfo/${goodsid}`
    return axios.get(url)
}

// 获取商品图文介绍
let getGoodsDescById = (goodsid) =>{
    let url = `http://www.liulongbin.top:3005/api/goods/getdesc/${goodsid}`
    return axios.get(url)
}

// 获取购物车数据
let getShopCarByIds = (shopcars)=>{
    let ids = []
    shopcars.forEach(item=>{
        ids.push(item.id)
    })
    if(ids.length===0){
        return
    }
    let url = 'http://www.liulongbin.top:3005/api/goods/getshopcarlist/'+ids.join(',')
    return axios.get(url)
}




export {
    getBanner,
    getNewsList,
    getNewsInfo,
    getComment,
    postComment,
    getImgCategory,
    getImg,
    getImgDetail,
    getThumImages,
    getGoodsList,
    getGoodsInfoById,
    getGoodsDescById,
    getShopCarByIds
}