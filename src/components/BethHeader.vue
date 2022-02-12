<template>
<div>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">xxx源码网</el-menu-item>

    <el-menu-item index="2" >网站模板</el-menu-item>
    <el-menu-item index="3" >小程序模板</el-menu-item>
    <el-menu-item index="3" >程序代写</el-menu-item>
    <el-menu-item index="4" >素材解析</el-menu-item>
    <el-menu-item index="5" >破解激活</el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: "bethHeader"
}
</script>

<style scoped>

</style>
