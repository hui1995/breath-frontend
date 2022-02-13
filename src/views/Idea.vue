<template>

<div>
  <el-row :gutter="24">
    <el-col :span="10" :offset="7">
      <div  style="text-align: center">
        <h1 style="color: #67C23A">激活码下载</h1>

        <div style="color: #67C23A">
          <p><i class="el-icon-warning"></i>  用户须知</p>

          <p>要用电脑浏览器下载，用微信下载可能会因为缓存原因，得不到最新激活码</p>
          <p>如果显示key is invalid，这是因为你破解过软件的原因，请按如下操作</p>
          <p>打开软件，help edit VM options ，删掉最下面一行，重启软件</p>
          <p>由于最近日更激活码特别不稳定，强烈建议大家使用下方的专属激活</p>

        </div>

        <el-row>

          <a href="https://idea.medeming.com/a/jihuoma1.zip" ><el-button type="success" style="margin: 30px">idea激活码</el-button></a>
          <a href="https://idea.medeming.com/a/jihuoma2.zip" ><el-button type="success" style="margin: 30px">pycharm激活码</el-button></a>
          <a href="https://idea.medeming.com/a/jihuoma3.zip" ><el-button type="success" style="margin: 30px">webstorm激活码</el-button></a>


        </el-row>




      </div>

    </el-col>
  </el-row>


</div>

</template>

<script>
export default {
  name: "idea"
}
</script>

<style scoped>

</style>
