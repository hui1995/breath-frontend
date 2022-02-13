<template>
  <div id="app">

<beth-header></beth-header>

      <el-container>
      <el-main>
        <router-view/>
      </el-main>
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
  }
}
</script>

<style lang="scss" scoped></style>
