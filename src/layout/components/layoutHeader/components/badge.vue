<template>
  <div class="badge">
    <!-- <el-badge :value="num"> -->
    <i class="el-icon-message-solid"></i>
    <!-- </el-badge> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 2
    }
  },
  methods: {
    showMessage() {
      console.log('hello')
      this.num++
    }
  }
}
</script>
<style lang="less" scoped>
.badge {
  height: 100%;
  i {
    font-size: 20px;
  }
}
</style>
