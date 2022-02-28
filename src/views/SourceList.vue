<template>
  <div class="home">
    <div>



        <el-row  :gutter="10">

          <el-col  :xs="24" :sm="{span:20,offset:2}" :md="{span:20,offset:2}" :lg="{span:20,offset:2}"  :xl="{span:16,offset:4}" >
            <el-row>
      <el-col :xs="24" :sm="12" :md="8" :lg="6"  v-for="item in sourceList" :key="item.id">
        <div style=";width:280px;margin: 0 auto;margin-top: 40px;min-height:280px">
          <el-skeleton :rows="5" animated :loading="loading" >
            <router-link :to="{name:'SourceDetail',params:{id:item.id}}">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.image" class="image" style="width:100%">
          <div style="padding: 14px;">
            <span>{{item.title}}</span>
            <div class="bottom clearfix" style="text-align:left">

            </div>
          </div>
        </el-card>
            </router-link>
          </el-skeleton>

        </div>
      </el-col>

            </el-row>
            <div style="margin-top: 30px">


              <el-pagination
                  background
                  layout="prev, pager, next"
                  :current-page="currentPage"
                  :page-size="20"
                  @current-change="handleCurrentChange"
                  @prev-click="handleCurrentChange"
                  @next-click="handleCurrentChange"
                  :total="toatl_page">
              </el-pagination>
            </div>

      </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: 'SourceList',
  data(){
    return{
      loading: true,
      sourceList:[
      ],
      page:1,
      pagesize:16,
      cate:"",
      toatl_page:1,
      currentPage:1

    }
  },
  watch: {
    '$route' (to, from) { //监听路由是否变化
      if(this.$route.params.cate){//判断id是否有值
        //调数据
        this.getSourceList(this.$route.params.cate,this.page,this.pagesize)
      }
    }
  },
  methods: {



    getSourceList(cate,page,pagesize){
      this.cate=cate
      this.loading=true

      api.sourceList(cate,page,pagesize).then(data=>{
        this.sourceList=data['data']['data'];
        this.toatl_page=data['data']['total_page']
        this.currentPage=data['data']['page']
        this.loading=false
      })


  }, handleCurrentChange(val){
      this.getSourceList(this.cate,val,this.pagesize)



    }
  }
  ,created() {
    this.cate=this.$route.params.cate
    this.getSourceList(this.cate,this.page,this.pagesize)
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
