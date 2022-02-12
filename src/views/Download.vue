<template>
<div>
  <el-row :gutter="24">
    <el-col :span="10" :offset="7">
      <div  style="text-align: center">
        <h1>模板之家代码代下载</h1>

        <div style="color: #67C23A">
          <p><i class="el-icon-warning"></i>  用户须知</p>

         <p> 通过本站下载的模板仅供学习与参考，请勿用于商业用途，否则产生的一切后果将由您自己承担！</p>
          <p>如下载失败，请联系客服处理</p>

         <p>模板挑选地址 -> http://www.cssmoban.com </p>
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
            <el-button type="success" style="width: 60%" plain>点击下载</el-button>

        </div>

      </div>

    </el-col>
  </el-row>
</div>
</template>

<script>

export default {
  name: "download",
  data(){
    return{
      url:'',
      serect:''
    }
  },
  components: {

  },
  methods:{
    downloadinfo(){
      var data={"url":this.url,"serect":this.serect}
      var result=api.downloadMoban(data)
    }
  }
}
</script>

<style scoped>

</style>
