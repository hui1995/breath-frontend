<template>
  <div id="app">

<beth-header></beth-header>

      <el-container>
      <el-main>   <router-view/></el-main>
    </el-container>
    <el-footer></el-footer>



  </div>
</template>

<script>
import {Other} from './common/index'
import BethHeader from "./components/BethHeader";
export default {
  name: 'rootPage',
  components: {
    BethHeader
  },
  created(){
// 获取数据
    this.$api.getData().then((res)=>{
      console.log('res',res)
    })

//调用公有方法
    Other.globalFun()
  }
}
</script>

<style lang="scss" scoped></style>
