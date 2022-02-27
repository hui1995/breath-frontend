<template>
  <div class="home">
    <div>

      <el-container >


        <el-row>

          <el-col :span="16" offset="4">
            <el-row>
      <el-col :span="6" v-for="item in sourceList">
        <div style="margin:20px">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://img.bethmeta.com/online/2022-02-10/16444749175623.jpg" class="image">
          <div style="padding: 14px;">
            <span>蓝色高斯背景企业产品展示模板</span>
            <div class="bottom clearfix" style="text-align:left">
<!--              <time class="time">0</time>-->
<!--              <time class="time">0</time>-->
            </div>
          </div>
        </el-card>

        </div>
      </el-col>
            </el-row>
      </el-col>
        </el-row>
      </el-container>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: 'SourceList',
  data(){
    return{
      sourceList:[
        {
          title:"23",
          imgurl:"547",
          view:"548",
          like:"89"
        },   {
          title:"23",
          imgurl:"547",
          view:"548",
          like:"89"
        },   {
          title:"23",
          imgurl:"547",
          view:"548",
          like:"89"
        },
        {
          title:"23",
          imgurl:"547",
          view:"548",
          like:"89"
        },   {
          title:"23",
          imgurl:"547",
          view:"548",
          like:"89"
        },   {
          title:"23",
          imgurl:"547",
          view:"548",
          like:"89"
        },   {
          title:"23",
          imgurl:"547",
          view:"548",
          like:"89"
        }
      ]

    }
  },
  methods: {
    load () {
      this.count += 2
      console.log('ege3464')

    },

    sourceList(cate,page,pagesize){

      api.sourceList(cate,page,pagesize).then(data=>{

        console.log(data)
      })

  }
  },created() {
    // var cate=this.$router.params
    var cate=this.$route.params.cate

    console.log(cate)
    // var cate="web"
    this.sourceList(cate,1,20)
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
