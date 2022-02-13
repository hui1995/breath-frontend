<template>
<div>
  <el-row :gutter="24">
    <el-col :span="10" :offset="7">
      <div  style="text-align: center">
        <h1 style="color: #67C23A">模板之家代码代下载</h1>

        <div style="color: #67C23A">
          <p><i class="el-icon-warning"></i>  用户须知</p>

         <p> 通过本站下载的模板仅供学习与参考，请勿用于商业用途，否则产生的一切后果将由您自己承担！</p>
          <p>如下载失败，请联系客服处理</p>

         <p>模板挑选地址 -> <a href="http://www.cssmoban.com" style="color: #67C23A"> http://www.cssmoban.com </a></p>
        </div>

        <p></p>
        <p></p>
        <div>
          <el-input placeholder="素材详情页url：http://www.cssmoban.com/wpthemes/8932.shtml" v-model="url">
            <template slot="prepend">网址：</template>
          </el-input>
        </div>
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入16位的卡密" v-model="serect">
            <template slot="prepend">卡密：</template>
          </el-input>
        </div>

        <div style="margin-top: 20px">
            <el-button type="success" @click="downloadInfo()" style="width: 60%"   >点击下载</el-button>

        </div>

      </div>

    </el-col>
  </el-row>

</div>
</template>

<script>

import api from "@/services/api";

export default {
  name: "download",
  data(){
    return{
      url:'http://www.cssmoban.com/wpthemes/8932.shtml',
      serect:'q'
    }
  },
  methods:{
    downloadInfo(){
      if (this.url===""||this.serect===""){
        this.$message({
          showClose: true,
          message: '网址或者密钥不能为空',
          type: 'error'
        });
        return

      }

      var data={"url":this.url,"serect":this.serect}
     api.downloadMoban(data).then( (data)=>{

       if (data.code===50){
         this.$message({
           showClose: true,
           message: data.msg,
           type: 'error'
         });
       }else{
         this.$message({
           showClose: true,
           message: data.msg,
           type: 'success'
         });
         api.downloadMobanNext(data.data)
       }
      })

    }
  },
  created() {
  }
}
</script>

<style scoped>

</style>
