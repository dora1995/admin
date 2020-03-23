<template>
  <div class="introduction">
    {{ name }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '我是介绍'
    }
  }
}
</script>
<style lang="less" scoped>
.introduction {
  height: 100%;
  background: #e6e6e6;
}
</style>
