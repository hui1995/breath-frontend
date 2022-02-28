<template>
<div>
  <el-menu router class="el-menu-demo" mode="horizontal"  :default-active="$route.path"  >
    <el-menu-item index="/">xxx源码网</el-menu-item>

    <el-menu-item index="/muban/web" >网站模板</el-menu-item>
    <el-menu-item index="/muban/mincode" >小程序模板</el-menu-item>
    <el-menu-item index="/4" >程序代写</el-menu-item>
    <el-menu-item index="/download/" >素材解析</el-menu-item>
    <el-menu-item index="/idea/" >破解激活</el-menu-item>
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
