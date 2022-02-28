<template>
  <div id="app">

<beth-header></beth-header>
        <router-view/>
    <el-footer></el-footer>



  </div>
</template>

<script>
import BethHeader from "./components/BethHeader";
export default {
  name: 'rootPage',
  components: {
    BethHeader
  }
}
</script>

<style lang="scss" scoped></style>
