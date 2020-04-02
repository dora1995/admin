<template>
  <div class="page404">
    <p class="title">找不到啦</p>
    <router-link to="/"><el-button>返回首页</el-button></router-link>
  </div>
</template>

<script>
export default {}
</script>
<style lang="less" scoped>
.page404 {
  width: 100%;
  height: 100%;
  text-align: center;
  background: #b5c794 url(./img-404.png) no-repeat center center !important;
  .title {
    font-size: 20px;
    color: #fff;
    text-align: center;
    padding: 80px 0 20px 0;
  }
}
</style>
