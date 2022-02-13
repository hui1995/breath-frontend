import request from './request'
function getRequest(url,method,params){
    return request({url,method,params})
}
function postRequest(url,method,data){
    return request({url,method,data})
}

let Path = 'http://www.breathcoder.cn/api'
let SourcePath = 'http://www.breathcoder.cn/source'

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
        return postRequest(Path+'/download/moban','post',data)

    },
    downloadMobanNext(id,url){
       var  data={"id":id,"url":url}
        return postRequest(SourcePath+"/download",'post',data)

    }
}
