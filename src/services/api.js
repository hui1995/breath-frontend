import request from './request'
function getRequest(url,method,params){
    return request({url,method,params})
}
function postRequest(url,method,data){
    return request({url,method,data})
}

let Path = 'https://api.bethmeta.com'
// let Path = 'http://127.0.0.1:5000'
// let SourcePath = 'http://www.breathcoder.cn/source'

export default{
    // get
    getData(params){
        return getRequest(Path+'/octokit.rb','get',params)
    },
    // post
    setData(data){
        return postRequest(Path+'/octokit.rb','post',data)
    },
    downloadMoban(data){
        return postRequest(Path+'/download/muban','post',data)

    },
    downloadMobanNext(url){
        return postRequest(url,'get')

    },

    sourceList(category,page,pagesize){
        return getRequest(Path+'/source/list/'+category+"/"+page+"/"+pagesize,'get')

    },
    sourceDetail(id){
        return getRequest(Path+'/source/detail/'+id,'get')

    },


}
