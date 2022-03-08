<template>
  <div class="home">
    <div>



        <el-row  :gutter="10">

          <el-col  :xs="24" :sm="{span:20,offset:2}" :md="{span:20,offset:2}" :lg="{span:20,offset:2}"  :xl="{span:16,offset:4}" >

        <div style="margin: 0 auto;margin-top: 40px;min-height:280px">
          <el-skeleton :rows="5" animated :loading="loading" >

        <el-card :body-style="{ padding: '0px' }">
          <el-row>
            <el-col :span="12">          <img :src="sourceDetail.image" class="image" style="width:100%">
            </el-col>
            <el-col :span="12">
              <div>
                <h3> {{sourceDetail.title}}</h3>
              </div>

              <a :href="sourceDetail.zip_url">   <el-button type="success">点击下载</el-button></a>

            </el-col>
          </el-row>

        </el-card>
          </el-skeleton>

        </div>



      </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: 'SourceDetail',
  data(){
    return{
      loading: true,
      sourceDetail:"",
      id:"",


    }
  },
  watch: {
    '$route' (to, from) { //监听路由是否变化
      if(this.$route.params.id){//判断id是否有值
        //调数据
        this.getSourceDetail(this.$route.params.id)
      }
    }
  },
  methods: {


    getSourceDetail(id){
      this.id=id
      this.loading=true

      api.sourceDetail(id).then(data=>{
        this.sourceDetail=data['data'];
        this.loading=false
      })


  }
  }
  ,created() {
    this.id=this.$route.params.id
    this.getSourceDetail(this.id)
  }
}
</script>
<style lang="scss" >
.home{
  margin-top:50px;
  text-align: center;
  background:$mainColor;
}
</style>
