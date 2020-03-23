<template>
  <div class="sideBar">
    aaa
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'layoutSideBar',
  computed: {
    ...mapGetters(['sideBar_opened'])
  }
}
</script>
<style lang="less" scoped>
@import '~@/layout/variables.less';
.sideBar {
  background: @sideBarBgColor;
}
</style>
